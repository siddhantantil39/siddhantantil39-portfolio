import Link from "next/link"
import SearchComponent from "./Search";
import { Search } from "@geist-ui/icons";

const Header = () => {
    return(
        <header className="sticky top-0 text-white py-2 px-4  z-10">
            <div className="grid grid-cols-4 md:grid-cols-12 items-center max-w-screen-2xl mx-auto gap-4">
                <h1 className="text-xl font-bold col-span-1 md:col-span-3">
                    <Link href="/" className="hover:text-blue-400">Siddhant Antil</Link>
                </h1>

                <div className="col-span-2 md:col-span-6 md:col-start-4">
                    <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 text-gray-400 hover:border-white transition-colors">
                        <SearchComponent className="w-5 h-5" />
                        <Search />
                        <span className="ml-2 text-sm hidden sm:inline">Search</span>
                        <span className="ml-auto text-sm hidden lg:inline">Ctrl + K</span>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-end">
                    <button className="flex items-center">
                        <span className="text-sm text-blue-400">Dark</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;