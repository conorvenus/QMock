import { MultipleChoiceQuestion } from "../../../../shared/validators/questions/MultipleChoiceValidator";
import { useState, useRef } from "react";
import QuestionHeader from "../QuestionHeader";
import Button from "../Button";

export default function MultipleChoice({ question, questionNumber, numberOfQuestions, onSubmit }: {
    question: MultipleChoiceQuestion,
    questionNumber: number,
    numberOfQuestions: number,
    onSubmit: (correct: boolean) => void
}) {

    const choices = useRef([question.correctAnswer, question.incorrectAnswer1, question.incorrectAnswer2, question.incorrectAnswer3].sort(() => Math.random() - 0.5));
    const [selectedIdx, setSelectedIdx] = useState<number>(-1);

    function setSelectedIndex(idx: number) {
        if (selectedIdx === idx) {
            setSelectedIdx(-1);
            return;
        }
        setSelectedIdx(idx);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-fit flex flex-col gap-4">
            <QuestionHeader questionNumber={questionNumber} numberOfQuestions={numberOfQuestions} questionPrompt={question.question}/>
                <div className="grid grid-cols-2 gap-4">
                    {choices.current.map((answer, i) => (
                        <button key={i} onClick={() => setSelectedIndex(i)} className={`rounded-xl p-4 font-medium text-lg border border-qm-500 ${selectedIdx !== i && "bg-qm-200 text-qm-700"} ${selectedIdx === i && "bg-qm-700 border-qm-700 text-qm-200"}`}>{answer}</button>
                    ))}
                </div>
            </div>
            <Button text="Submit" variant="secondary" onClick={() => selectedIdx !== -1 && onSubmit(question.correctAnswer === choices.current[selectedIdx])} />
        </div>
    )
}
