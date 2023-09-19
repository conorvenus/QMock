import TrueFalse from "./components/questions/TrueFalse"
import MultipleChoice from "./components/questions/MultipleChoice"
import MatchingPairs from "./components/questions/MatchingPairs"
import Button from "./components/Button"
import { useState } from "react"
import { fetchEventSource } from "@microsoft/fetch-event-source"
import { QuestionTypeSchema, QuestionType } from "../../shared/validators/QuestionTypeValidator"
import { TrueFalseQuestion } from "../../shared/validators/questions/TrueFalseValidator"
import { MultipleChoiceQuestion } from "../../shared/validators/questions/MultipleChoiceValidator"
import { MatchingPairsQuestion } from "../../shared/validators/questions/MatchingPairsValidator"
import { ExtendedTopic } from "../../shared/validators/TopicValidator"
import z from "zod"

function App() {
    const [questions, setQuestions] = useState<QuestionType[]>([])

    async function getQuestionsByTopic(topic: ExtendedTopic) {
        fetchEventSource("/api/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([topic]),
            onmessage: (msg: any) => {
                const TopicQuestionsSchema = z.object({
                    topic: z.string(),
                    questions: z.array(QuestionTypeSchema)
                })
                type TopicQuestions = z.infer<typeof TopicQuestionsSchema>
                const data: TopicQuestions = JSON.parse(msg.data)
                setQuestions(cur => [...cur, ...data.questions])
            }
        })
    }

    return (
        <>
            <div className="bg-white rounded-lg p-8 mx-auto w-fit mt-8 shadow-lg">
                <div className="flex flex-row gap-4 m-8 mt-0 pt-8 justify-center">
                    <Button variant="secondary" text="Get Questions" onClick={() => getQuestionsByTopic({ topic: "Test Topic", summary: "test topic", quantity: 1, type: "true/false" })} />
                    <Button variant="secondary" text="Clear Questions" onClick={() => setQuestions([])} />
                </div>
                {questions.length > 0 &&
                <>
                    <hr className="py-4" />
                    <div className="flex flex-col flex-align-center gap-8 m-8 items-start">
                        {questions.map((question, index) => {
                            if ('trueStatement' in question) {
                                return <TrueFalse question={question as TrueFalseQuestion} questionNumber={index + 1} numberOfQuestions={questions.length} onSubmit={(correct: boolean) => {
                                    console.log(correct)
                                }} />
                            } else if ('incorrectAnswer1' in question) {
                                return <MultipleChoice question={question as MultipleChoiceQuestion} questionNumber={index + 1} numberOfQuestions={questions.length} onSubmit={(correct: boolean) => {
                                    console.log(correct)
                                }} />
                            } else if ('prompt' in question) {
                                return <MatchingPairs question={question as MatchingPairsQuestion} questionNumber={index + 1} numberOfQuestions={questions.length} onSubmit={(correct: boolean) => {
                                    console.log(correct)
                                }} />
                            }
                            return <p>{index}</p>
                        })}
                    </div>
                </>}
            </div>
        </>
    )
}

export default App