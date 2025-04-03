import HomeData from "@/app/data/HomeData";

export default function Home() {
    return (
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Overview</h1>
          <div className="space-y-8">
            {Object.entries(HomeData).map((section, index) => (
              <div key={index} className="p-6">
                <h2 className="text-xl text-white font-semibold mb-4">{section[0]}</h2>
                <p className="text-gray-300 leading-relaxed">{section[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}