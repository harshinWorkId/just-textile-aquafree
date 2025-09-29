"use client";

import React from "react";
import Image from "next/image";



import { GiRecycle } from "react-icons/gi";


import { FaLightbulb } from "react-icons/fa"; 


import { FaChartLine } from "react-icons/fa"; 

// import { FaCheckCircle } from "react-icons/fa";
import { FaMedal } from "react-icons/fa"; 

const items = [
  {
    icon: <GiRecycle className="w-8 h-8 text-[var(--greenShade)]" />,
    title: "Process Innovation",
    desc: "Developing new fabric blends, advanced finishes, and eco-friendly processing methods that set industry standards",
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-[var(--greenShade)]" />,
    title: "Sustainable Solutions",
    desc: "Leading the adoption of waterless dyeing and salt-free dyeing techniques to dramatically reduce environmental impact",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[var(--greenShade)]" />,
    title: "Market Relevance",
    desc: "Anticipating customer needs and ensuring Just Textiles stays ahead of global trends through proactive R&D",
  },
  {
    icon: <FaMedal className="w-8 h-8 text-[var(--greenShade)]" />,
    title: "Quality Excellence",
    desc: "Guaranteeing consistent shade reproducibility and reliable performance across large-scale production",
  },
];

const WhatWeAreDoing: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-[40%_60%] gap-12 px-6 max-lg:grid-cols-1 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-[80%] mx-auto h-[450px] rounded-md overflow-hidden">
          <Image
            src="/assets/images/leader3.jpg" // replace with your static image
            alt="Volunteers"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-4">
            Innovation Under Mr. Pandey's Leadership
          </h2>
          <p className="text-base text-[var(--bodyContent)] font-open mb-10 leading-relaxed">
            His vision extends beyond the laboratory - transforming experimental
            concepts into scalable solutions that meet both sustainability goals
            and market demands.
          </p>

          {/* Items */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 max-md:grid-cols-1">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-3 text-[var(--bodyContent)] font-open"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreDoing;
