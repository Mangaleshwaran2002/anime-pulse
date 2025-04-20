import ThemeToggle from "../utils/ThemeToggle";
import { Link } from "react-router-dom";
function NavBar(){
    return (
        <>
        <header className="bg-white dark:bg-gray-900 sticky">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <Link to={'/'} className="block text-teal-600 dark:text-teal-300">
                    <span className="sr-only">Home</span>
                    <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
                    <h1 className="text-2xl font-bold">Anime Pulse</h1>
                    </div>
                    </Link>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <ThemeToggle/>
                </div>
                </div>
            </div>
            </header>

        </>
    );
}

export default NavBar;
