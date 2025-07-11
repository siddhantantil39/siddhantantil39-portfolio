import Link from "next/link";
import Image from "next/image";

const Landing = () => {

    return(
        <div className="min-h-[60vh] w-full flex items-center justify-center text-primary px-4 ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-2xl w-full gap-8">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold mb-4 items-left font-montserrat tracking-wide">Siddhant Antil</h1>
                    <span className="text-xl font-montserrat mb-6 text-secondary-300">Software Engineer. Learner and  partly open-source contributor.</span>
                    <div className="flex flex-row py-4 gap-6">
                        <Link href='/home'>
                            <button className="bg-foreground text-background py-2 px-4 rounded-4xl h-12 w-42">
                                See my work
                            </button>
                        </Link>
                        <Link href='/blog'>
                            <button className="border text-primary py-2 px-4 rounded-4xl hover:bg-secondary-100 transition-colors h-12 w-42 hover:text-foreground">
                                Read my blog
                            </button>
                        </Link>
                    </div>
                </div>
                <Image src="/icon.png" alt="avatar" width={100} height={100} className="rounded-4xl w-50"/>
            </div>
        </div>
    )
}

export default Landing;