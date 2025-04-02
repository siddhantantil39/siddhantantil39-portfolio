import Link from "next/link"
import SearchComponent from "./Search";
import { Search } from "@geist-ui/icons";

const Header = () => {

    return(
        <header className="sticky top-0 text-white py-2 px-4">
            <div className="grid grid-cols-14 items-center">
                <h1 className="text-xl font-bold col-span-2">
                    <Link href="/" className="hover:text-blue-400">Siddhant Antil</Link>
                </h1>

                <div className="col-span-3 col-start-5">
                    <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 text-gray-400 hover:border-white transition-colors">
                        <SearchComponent className="w-5 h-5" />
                        <Search />
                        <span className="ml-2 text-sm">Search</span>
                        <span className="ml-auto text-sm hidden sm:block">Ctrl + K</span>
                    </div>
                </div>

                <div className="col-span-2 col-start-14 flex justify-end">
                    <button className="flex items-center">
                        <span className="text-sm text-blue-400">Dark</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;