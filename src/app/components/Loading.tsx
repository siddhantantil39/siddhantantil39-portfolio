import { Loader } from "@geist-ui/icons";

const Loading = () => {
    console.log('show loader')
    return(
        // <div className="flex items-center justify-center h-screen w-full">
        //     <div className="animate-spin">
        //         <Loader size={32} className="text-blue-400" />
        //     </div>
        // </div>
        <>
            <span>Loading...</span>
        </>
    )
};

export default Loading;