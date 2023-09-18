import { useRef } from "react";
import Button from "./Button";

export type Option = {
    id: number,
    text: string
}

export default function OptionSelector({ options, selectedOption, setSelectedOption, onSelect, onDeselect }: { 
    options: Option[],
    selectedOption: Option | null,
    setSelectedOption: React.Dispatch<React.SetStateAction<Option | null>>,
    onSelect?: (option: Option) => void,
    onDeselect?: (option: Option) => void
}) {
    const shuffledOptions = useRef(options.sort(() => Math.random() - 0.5));

    function selectOption(option: Option) {
        if (selectedOption?.id === option.id) {
            setSelectedOption(null);
            onDeselect?.(option);
            return;
        }
        setSelectedOption(option);
        onSelect?.(option);
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            {shuffledOptions.current.map(option => (
                <Button key={option.id} text={option.text} variant={selectedOption?.id === option.id ? "selected option" : "option"} onClick={() => selectOption(option)} />
            ))}
        </div>
    )
}