import Form from "@/components/Form";
import { Form as FormType } from "@/components/Form";
import { Link } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const signIn = useSignIn()
    const navigate = useNavigate()

    async function handleSubmit(form: FormType) {
        if (form.password.value !== form.confirmPassword.value) return;

        const response = await fetch("/api/register", {
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
                        password: { type: "password" },
                        confirmPassword: { type: "password" }
                    }} buttonText="Register" handleSubmit={handleSubmit} />
                    <p className="text-slate-200">Already have an account? <Link className="font-bold text-white" to="/login">Login</Link></p>
                </div>
            </div>
        </>
    )
}