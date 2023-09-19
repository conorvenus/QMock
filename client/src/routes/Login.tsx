import Form from "@/components/Form";
import { Form as FormType } from "@/components/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

export default function Login() {
    const signIn = useSignIn()
    const navigate = useNavigate()

    async function handleSubmit(form: FormType) {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: form.username.value ?? "",
                password: form.password.value ?? ""
            })
        })
        const data = await response.json()
        if (response.ok) {
            signIn({ token: data.token, expiresIn: 1000, tokenType: 'Bearer' })
            navigate('/')
        }
    }

    return (
        <>
            <div className="h-full inset-0 -z-10 fixed">
                <img className="h-full object-cover" src="https://www.qmul.ac.uk/media/qmul/site-assets/images/queens-social.jpg" alt="" />
            </div>
            <div className="h-full w-full bg-qm-700 top-0 -z-10 fixed backdrop-blur-sm bg-opacity-95">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg px-4">
                    <Form initialForm={{
                        username: { type: "text" },
                        password: { type: "password" }
                    }} buttonText="Login" handleSubmit={handleSubmit} />
                    <p className="text-slate-200">Don't yet have an account? <Link className="font-bold text-white" to="/register">Register</Link></p>
                </div>
            </div>
        </>
    )
}