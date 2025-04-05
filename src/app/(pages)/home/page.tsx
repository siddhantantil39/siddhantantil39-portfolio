import HomeData from "@/app/data/home/HomeData";

export default function Home() {
    return (
      <div className="mx-auto py-8 items-left ">
        <div className="mx-auto  ">
          <h1 className="text-4xl font-bold text-white mb-8 font-montserrat">Overview</h1>
          <div className="">
            {Object.entries(HomeData).map((section, index) => (
              <div key={index} className="py-6">
                <h2 className="text-xl text-white font-semibold mb-4 font-montserrat">{section[0]}</h2>
                <p className="text-gray-300 leading-relaxed font-montserrat">{section[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}