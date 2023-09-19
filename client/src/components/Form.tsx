import Button from "@/components/Button";
import { useState } from "react";

export type FormInput = {
    value?: string,
    type: "text" | "password" | "email"
}

export type Form = {
    [key: string]: FormInput
};

export default function Register({ initialForm, buttonText, handleSubmit }: { initialForm: Form, buttonText: string, handleSubmit: (form: Form) => void }) {
    const [form, setForm] = useState<Form>(initialForm);

    function updateForm(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: {
                type: form[e.target.name as keyof Form].type,
                value: e.target.value
            }
        });
    }

    const camelToTitle = (camelCase: string) => camelCase
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim();

    return (
        <form className="flex flex-col gap-8 mb-8" onSubmit={event => {
            event.preventDefault();
            handleSubmit(form);
        }}>
            {Object.keys(form).map((key: string) => (
                <div className="flex flex-col gap-2">
                    <label htmlFor={key} className="text-white font-medium">{camelToTitle(key)}</label>
                    <input type={form[key].type} name={key} className="p-2 rounded-lg text-qm-700" value={form[key].value ?? ""} onChange={updateForm} />
                </div>
            ))}
            <Button variant="secondary" text={buttonText} />
        </form>
    )
}