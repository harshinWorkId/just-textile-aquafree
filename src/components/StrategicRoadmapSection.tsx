"use client";

import React from "react";
import { FaFlask, FaCertificate, FaLeaf } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";

const roadmap = [
  {
    icon: <BiExpand className="w-10 h-10 text-[var(--greenShade)]" />,
    title: "Scale AquaFree™ Production",
    desc: "Full-scale implementation of salt-free dyeing across all major production lines for maximum environmental impact.",
  },
  {
    icon: <FaFlask className="w-10 h-10 text-[var(--greenShade)]" />,
    title: "Enhanced R&D Investment",
    desc: "Developing new performance finishes and sustainable technologies to maintain industry leadership.",
  },
  {
    icon: <FaCertificate className="w-10 h-10 text-[var(--greenShade)]" />,
    title: "Global Certification Excellence",
    desc: "Strengthening ISO, OEKO-TEX, and GOTS certifications to exceed global buyer expectations.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-[var(--greenShade)]" />,
    title: "Comprehensive Sustainability",
    desc: "Reducing energy consumption alongside water and chemical usage for holistic environmental stewardship.",
  },
];

const StrategicRoadmapSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto bg-white/80 py-12 rounded-2xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-12 font-serif">
          Our Strategic Roadmap Forward
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-4 border border-gray-200 max-lg:grid-cols-2 max-md:grid-cols-1 font-open">
          {roadmap.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 h-78 font-open py-8 px-4 flex flex-col text-center gap-4 bg-white hover:shadow-md transition"
            >
              <div className="flex flex-col items-center gap-4">
                {/* Icon */}
                {item.icon}
                {/* Title */}
                <h3 className="font-semibold text-lg max-md:text-xl text-[var(--bodyContent)]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--bodyContent)] text-base max-md:text-xl leading-relaxed mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-gray-700 max-md:text-xl text-lg max-w-4xl mx-auto leading-relaxed">
          Our timeline doesn't end here - these strategic initiatives represent
          our unwavering commitment to leading the textile industry toward a
          more sustainable, efficient, and innovative future.
        </p>
      </div>
    </section>
  );
};

export default StrategicRoadmapSection;
