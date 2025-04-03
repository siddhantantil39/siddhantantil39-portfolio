import WorkData from "@/app/data/WorkData";
import HomeData from "@/app/data/WorkData";

export default function Work() {
    return (
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Work History</h1>
          <div className="space-y-8">
            {Object.entries(WorkData).map((section, index) => (
              <div key={index} className="p-6">
                <h2 className="text-xl text-white font-semibold mb-4">{section[0]}</h2>
                <div className="space-y-4">
                    {Object.entries(section[1]).map((subSection, index) => (
                        <div key={index} className="p-6">
                            <h2 className="text-xl text-white font-semibold mb-4">{subSection[0]}</h2>
                            <p className="text-gray-300 leading-relaxed">{subSection[1]}</p>
                        </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}