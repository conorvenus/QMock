import Form from "@/components/Form";
import { Link } from "react-router-dom";

export default function Login() {
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
                    }} buttonText="Login" />
                    <p className="text-slate-200">Don't yet have an account? <Link className="font-bold text-white" to="/register">Register</Link></p>
                </div>
            </div>
        </>
    )
}