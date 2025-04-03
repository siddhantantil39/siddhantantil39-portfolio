import Link from 'next/link';
import EducationData from "@/app/data/EducationData";

export default function Education() {
    return (
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Education</h1>
          <div className="space-y-8">
            <div className="rounded-lg p-6 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                {EducationData.description}
                <Link 
                  href={EducationData.leetcodeLink.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
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