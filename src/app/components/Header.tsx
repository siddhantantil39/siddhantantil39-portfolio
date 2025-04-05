import Link from "next/link"
import SearchComponent from "./Search";
import { Search } from "@geist-ui/icons";

const Header = () => {
    return(
        <header className="sticky top-0 text-white py-2 z-10 ">
            <div className="grid grid-cols-4 md:grid-cols-12 items-center s:max-w-screen-2xl mx-auto gap-4 ">
                <h1 className="text-2xl font-bold col-span-3 md:col-span-3 ">
                    <Link href="/" className="hover:text-blue-400 whitespace-nowrap text-left">Siddhant Antil</Link>
                </h1>

                <div className="col-span-1 col-start-4 md:col-span-6">
                    <SearchComponent />
                </div>

                <div className="hidden md:flex md:col-span-3 justify-end pr-4">
                    <button className="flex items-center  ">
                        <span className="text-sm text-blue-400">Dark</span>
                    </button>
                </div>
            </div>
        </header>
        
    )
}

export default Header;