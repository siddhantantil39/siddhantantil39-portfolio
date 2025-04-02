import Link from "next/link"
import { ArrowRightCircle } from '@geist-ui/icons';

const Footer = () => {
    return(
        <footer className="w-full bg-black text-white p-4 border-t border-gray-700 fixed bottom-0">
            <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl">
                    <Link href="/work-history" 
                        className="w-full flex justify-between items-center border border-gray-600 rounded-lg p-4 hover:bg-gray-800 transition">
                        <span>Next</span>
                        <span>Work History</span>
                        <ArrowRightCircle />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;