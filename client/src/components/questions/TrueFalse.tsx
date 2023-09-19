import { TrueFalseQuestion } from "../../../../shared/validators/questions/TrueFalseValidator";
import { useState, useRef } from "react";
import QuestionHeader from "../QuestionHeader";
import Button from "../Button";
import OptionSelector, { Option } from "../OptionSelector";

export default function TrueFalse({ question, questionNumber, numberOfQuestions, onSubmit }: {
    question: TrueFalseQuestion,
    questionNumber: number,
    numberOfQuestions: number,
    onSubmit: (correct: boolean) => void
}) {
    const options = [{ id: 0, text: "True" }, { id: 1, text: "False" }];
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const isTrueStatement = useRef(Math.random() > 0.5 ? true : false);

    return (
        <div className="flex flex-col items-center gap-4 w-full"> 
            <div className="w-fit flex flex-col gap-4">
                <QuestionHeader questionNumber={questionNumber} numberOfQuestions={numberOfQuestions} questionPrompt={isTrueStatement.current ? question.trueStatement : question.falseStatement} />
                <OptionSelector options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}  />
            </div>
            <Button text="Submit" variant="secondary" onClick={() => selectedOption && onSubmit(selectedOption.id === (isTrueStatement.current ? 0 : 1))} />
        </div>
    )
}