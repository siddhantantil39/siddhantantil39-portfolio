import HomeData from "@/app/data/HomeData";

export default function Home() {
    return (
      <div className="mx-auto py-8 items-left border border-red-500">
        <div className="mx-auto  border border-red-500">
          <h1 className="text-4xl font-bold text-white mb-8">Overview</h1>
          <div className="">
            {Object.entries(HomeData).map((section, index) => (
              <div key={index} className="py-6">
                <h2 className="text-xl text-white font-semibold mb-4">{section[0]}</h2>
                <p className="text-gray-300 leading-relaxed">{section[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}