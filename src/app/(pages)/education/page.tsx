import Link from 'next/link';
import EducationData from "@/app/data/education/EducationData";

export default function Education() {
    return (
      <div className="mx-auto py-8 items-left ">
        <div className="mx-auto  ">
        <h1 className="text-4xl font-bold text-white mb-8">Education</h1>
          <div className="">
            <div className="rounded-lg  transition-colors">
              <p className="text-gray-300 leading-relaxed font-montserrat">
                {EducationData.description}
                <Link 
                  href={EducationData.leetcodeLink.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-montserrat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {EducationData.leetcodeLink.text}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}