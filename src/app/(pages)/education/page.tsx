"use client"

import Link from 'next/link';
import EducationData from "@/app/data/education/EducationData";
import { useRef, useState } from 'react';

export default function Education() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!linkRef.current) return;

    const rect = linkRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 80 // Position above the cursor
    });
  };

  return (
    <div className="mx-auto py-8 items-left">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Education</h1>
        <div className="">
          <div className="rounded-lg transition-colors">
            <p className="text-gray-300 leading-relaxed font-montserrat">
              {EducationData.description}
              <a
                href={EducationData.leetcodeLink.href}
                className="text-blue-400 hover:text-blue-300 transition-colors font-montserrat relative"
                target="_blank"
                rel="noopener noreferrer"
                ref={linkRef}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
              >
                {EducationData.leetcodeLink.text}
                {isHovering && (
                  <div
                    className="absolute bg-gray-800 p-4 rounded-lg shadow-lg transform -translate-y-full border border-gray-700 z-50"
                    style={{
                      left: `${position.x}px`,
                      top: `${position.y}px`,
                      pointerEvents: 'none'
                    }}
                  >
                    <span className="text-lg font-bold text-blue-500 font-montserrat">
                      {EducationData.leetcodeLink.href}
                    </span>
                  </div>
                )}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}