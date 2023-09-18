import { MultipleChoiceQuestion } from "../../../../shared/validators/questions/MultipleChoiceValidator";
import QuestionHeader from "../QuestionHeader";
import Button from "../Button";
import OptionSelector from "../OptionSelector";
import { Option } from "../OptionSelector";
import { useState } from "react";

export default function MultipleChoice({ question, questionNumber, numberOfQuestions, onSubmit }: {
    question: MultipleChoiceQuestion,
    questionNumber: number,
    numberOfQuestions: number,
    onSubmit: (correct: boolean) => void
}) {
    const options = [question.correctAnswer, question.incorrectAnswer1, question.incorrectAnswer2, question.incorrectAnswer3].map((choice, idx) => (
        { id: idx, text: choice }
    ));

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-fit flex flex-col gap-4">
                <QuestionHeader questionNumber={questionNumber} numberOfQuestions={numberOfQuestions} questionPrompt={question.question}/>
                <OptionSelector options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}  />
            </div>
            <Button text="Submit" variant="secondary" onClick={() => selectedOption && onSubmit(selectedOption.text === question.correctAnswer)} />
        </div>
    )
}
