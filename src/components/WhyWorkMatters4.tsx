"use lcient";

import React from "react";
import Image from "next/image";
import CountUp from "../components/CountUp";

// You can place these SVG components in a separate file or keep them here.
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const BadgeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

const WhyWorkMatters4 = () => {
  // Data for the feature list to avoid repetition
  const features = [
    "Up to 70% less water consumption",
    "Significant energy reduction",
    "Faster lead times for production",
    "Lower chemical usage",
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Images */}
          <div className="relative h-[550px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute left-0 top-0 w-[60%] h-[100%]">
              <Image
                src="/assets/images/why-work-matters3.png"
                alt="Textile worker cutting blue fabric"
                layout="fill"
                objectFit="cover"
                className="shadow-md"
              />
            </div>
            {/* Foreground Image */}
            <div className="absolute right-0 bottom-5 w-[70%] h-[85%] bg-white p-3">
              <div className="relative w-[95%] mx-auto h-[95%] mt-3">
                <Image
                  src="/assets/images/why-work-matters-2.png"
                  alt="Hands operating a sewing machine"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4 tracking-tight">
              AquaFree Technology: Revolutionary Water Conservation
            </h2>

            <p className="textStyle2 font-open text-justify mb-8">
              Our revolutionary AquaFree method has transformed traditional
              dyeing processes by reducing 12-14 bath steps to just a few,
              resulting in dramatic resource conservation:
            </p>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Experience Box */}
              <div className="bg-gray-800 text-white rounded-lg p-8 text-center flex flex-col items-center justify-center shadow-lg min-w-[200px]">
                <BadgeIcon className="w-12 h-12 mb-2 text-teal-400" />
                <p className="text-5xl font-bold">
                <CountUp
                  from={0}
                  to={70}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />

                <span>%</span>

                </p>
                <p className="text-gray-300">Water Reduction</p>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-[var(--greenShade)] rounded-full p-1 mr-3 flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-gray-200" />
                    </div>
                    <span className="textStyle2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                    <Image
                      src="/assets/images/why-work-matters3.png"
                      alt="Miya Draper, Founder"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Miya Draper</p>
                  <p className="text-gray-500 text-sm">Founder Textilery</p>
                </div>
              </div>
              <a 
                href="#" 
                className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md w-full sm:w-auto text-center"
              >
                More About Us
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkMatters4;
