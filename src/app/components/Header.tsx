import Link from "next/link"
import SearchComponent from "./Search";
import { Search } from "@geist-ui/icons";

const Header = () => {

    return(
        <header className="w-full text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold ">
                <Link href="/" className="hover:text-blue-400">Siddhant Antil</Link>
            </h1>

            {/* Center: Search Bar Placeholder */}
            <div className="relative w-1/3 flex items-center w-80 border border-gray-600 rounded-lg px-3 py-2 text-gray-400 hover:border-1 hover:border-white">
                <SearchComponent className="w-5 h-5" />
                <Search className=""/>
                <span className="ml-2 text-sm">Search</span>
                <span className="ml-auto text-sm">Ctrl + K</span>
            </div>

            {/* Right: Theme Toggle (Placeholder) */}
            <button className="flex items-center space-x-2">
                {/* <Moon className="w-5 h-5" /> */}
                <span className="text-sm text-blue-400">Dark</span>
            </button>
        </header>
    )
}

export default Header;