export default function Navbar() {
    return (
        <header className="bg-qm-700 flex items-center justify-between px-8">
            <div>
                <img className="h-20" src="https://qmplus.qmul.ac.uk/pluginfile.php/1/theme_catawesome/logo/1694614189/qm-logo-white.svg" alt="QM Logo" />
            </div>
            <nav>
                <ul className="text-white font-medium text-lg flex gap-8">
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </header>
    )
}