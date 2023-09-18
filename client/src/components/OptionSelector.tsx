import { useRef } from "react";

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
                <button key={option.id} onClick={() => selectOption(option)} className={`rounded-xl p-4 font-medium text-lg border border-qm-500 ${selectedOption?.id !== option.id ? "bg-qm-200 text-qm-700" : "bg-qm-700 border-qm-700 text-qm-200"}`}>{option.text}</button>
            ))}
        </div>
    )
}