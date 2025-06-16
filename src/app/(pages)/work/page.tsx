import WorkData from "@/app/data/work/WorkData";

export default function Work() {
    return (
        <div className="mx-auto py-8 items-left ">
        <div className="mx-auto ">
        <h1 className="text-4xl font-bold text-primary mb-8">Work History</h1>
          <div className="">
            {Object.entries(WorkData).map((section, index) => (
              <div key={index} className="">
                <h2 className="text-xl text-primary font-semibold mb-1">{section[0]}</h2>
                <div className="py-1">
                    {Object.entries(section[1]).map((subSection, index) => (
                        <div key={index} className="p-2">
                            <h2 className="text-xl text-primary font-semibold mb-1">{subSection[0]}</h2>
                            <p className="text-secondary-300 leading-relaxed">{subSection[1]}</p>
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