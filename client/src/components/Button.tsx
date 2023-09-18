export default function Button({
    text,
    variant = "primary",
    onClick
}: {
    text: string,
    variant: "primary" | "secondary" | "option" | "selected option",
    onClick: () => any
}) {
    return (
        <button 
        className={
            `px-4 py-2 border rounded-xl text-lg font-bold 
            ${variant === "primary" && "border-qm-700"} 
            ${variant === "secondary" && "bg-qm-700 text-white"}
            ${variant === "option" && "bg-qm-200 text-qm-700 border-qm-500"}
            ${variant === "selected option" && "bg-qm-700 border-qm-700 text-qm-200"}`
        } onClick={onClick}>{text}</button>
    )
}