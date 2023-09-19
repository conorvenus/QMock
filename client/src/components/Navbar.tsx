import { HomeIcon, UserPlus2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="bg-qm-700 flex items-center justify-between px-8">
            <div>

                <img className="h-20" src="https://qmplus.qmul.ac.uk/pluginfile.php/1/theme_catawesome/logo/1694614189/qm-logo-white.svg" alt="QM Logo" />
            </div>
            <nav>
                <ul className="text-white font-medium text-lg flex gap-16">
                    <li>
                        <Link to="/" className="flex gap-3 items-center">
                            <HomeIcon />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="flex gap-3 items-center">
                            <UserPlus2 />
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}