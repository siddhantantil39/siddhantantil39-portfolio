import Link from "next/link";
import Image from "next/image";

const Landing = () => {

    return(
        <div className="h-full w-full flex items-center justify-center text-primary">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 md:items-start items-center text-center md:text-left py-16 md:py-20">
                    <div className="md:col-span-3 justify-center h-full hidden md:block"/>
                    <div className="col-span-1 col-start-4 md:col-span-6 h-full flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
                        <div className="flex-1 order-2 md:order-1">
                            <h1 className="text-5xl font-bold mb-4 items-left font-montserrat tracking-wide">Siddhant Antil</h1>
                            <span className="text-xl font-montserrat mb-6 text-secondary-300">Software Engineer. Learner and  partly open-source contributor.</span>
                            <div className="py-4 gap-6 flex justify-center md:justify-start font-montserrat">
                                <Link href='/home'>
                                    <button className="bg-foreground text-background py-2 px-4 rounded-4xl h-12 w-42">
                                        See my work
                                    </button>
                                </Link>
                                <Link href='/blogs'>
                                    <button className="border text-primary py-2 px-4 rounded-4xl hover:bg-secondary-100 transition-colors h-12 w-42 hover:text-foreground">
                                        Read my blog
                                    </button>
                                </Link>
                            </div>
                        </div> 
                        <Image src="/icon.png" alt="avatar" width={100} height={100} className="rounded-4xl w-50 order-1 md:order-2"/>
                    </div>
                    <div className="md:col-span-3 h-full justify-center hidden md:block"/>
                </div>    

        </div>
    )
}

export default Landing;