import { Link } from "react-router-dom";
const FooterSection=()=>{
    return (
        <>
        <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={'/'} className="block text-teal-600 dark:text-teal-300">
                    <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
                    <h1 className="text-2xl font-bold">Anime Pulse</h1>
                    </div>
            </Link>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
                Created By MangalDev with ❤️
            </p>
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400">
                Copyright &copy;. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterSection;