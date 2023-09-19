import Button from "@/components/Button";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="h-full inset-0 -z-10 fixed">
                <img className="h-full object-cover" src="https://www.qmul.ac.uk/media/qmul/site-assets/images/queens-social.jpg" alt="" />
            </div>
            <div className="h-full w-full bg-qm-700 top-0 -z-10 fixed backdrop-blur-sm bg-opacity-95">
                <form className="flex flex-col gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg px-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-white font-medium">Username</label>
                        <input type="text" name="username" className="p-2 rounded-lg text-qm-700" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-white font-medium">Password</label>
                        <input type="password" name="password" className="p-2 rounded-lg text-qm-700" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-white font-medium">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="p-2 rounded-lg text-qm-700" />
                    </div>
                    <Button variant="secondary" text="Register" onClick={() => {}} />
                    <p className="text-slate-200">Already have an account? <Link className="font-bold text-white" to="/login">Login</Link></p>
                </form>
            </div>
        </>
    )
}