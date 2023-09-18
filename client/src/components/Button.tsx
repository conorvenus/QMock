export default function Button({
    text,
    variant = "primary",
    onClick
}: {
    text: string,
    variant: "primary" | "secondary" | "option",
    onClick: () => any
}) {
    return (
        <button 
        className={
            `px-4 py-2 border rounded-xl text-lg font-bold 
            ${variant === "primary" && "border-qm-700"} 
            ${variant === "secondary" && "bg-qm-700 text-white"}`
        } onClick={onClick}>{text}</button>
    )
}