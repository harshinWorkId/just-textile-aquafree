// src/components/TextileLeadersSection.tsx

import React from "react";
import Image from "next/image";

// Data for the feature points to make it easy to manage
const featurePoints = [
  {
    number: "01",
    text: "One Of the offis lorems leaders in textile market",
    // Position for desktop layout: [top, left/right]
    position: "top-[80px] left-[140px]",
  },
  {
    number: "02",
    text: "Top rayon fabric",
    position: "top-[260px] left-[40px]",
  },
  {
    number: "03",
    text: "One Of the offis lorems leaders in textile market",
    position: "top-[440px] left-[140px]",
  },
  {
    number: "04",
    text: "Shorter lead times, helping mills meet fast-changing fashion and retail demands.",
    position: "top-[120px] right-[-180px]", // Positioned relative to the right column
  },
  {
    number: "05",
    text: "Consistent quality, with improved reproducibility and better shade accuracy.",
    position: "top-[300px] right-[-180px]", // Positioned relative to the right column
  },
];

const TextileLeadersSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          {/* --- Left Column: Title, Description, and Features --- */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              One of the leaders in textile market
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-12">
              Since 1970, we have been supplying fabric material of a high
              standard for over 40 years. Our shop is in Kolkata, in the heart
              of Wiltshire is an iconic building.
            </p>

            {/* FEATURES CONTAINER - This holds the SVG and points for desktop */}
            <div className="relative h-[550px] hidden lg:block">
              {/* SVG Connecting Line for Desktop */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                // IMPORTANT: Adjust viewBox height if your content height changes
                viewBox="0 0 500 550"
                preserveAspectRatio="none"
              >
                <path
                  // This path creates the vertical spine and branches.
                  // You may need to tweak these numbers for pixel-perfect alignment.
                  d="
                    M 120 0 V 550
                    M 120 100 H 140
                    M 120 280 H 40
                    M 120 460 H 140
                  "
                  fill="none"
                  stroke="#1f2937" // gray-800
                  strokeWidth="2"
                />
              </svg>

              {/* Feature Points for Desktop - positioned absolutely */}
              {featurePoints.slice(0, 3).map((point) => (
                <div
                  key={point.number}
                  className={`absolute w-64 ${point.position}`}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">
                      <span className="text-blue-600 font-bold mr-2">
                        {point.number}.
                      </span>
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Points for Mobile - a simple stacked list */}
            <div className="lg:hidden flex flex-col gap-6">
              {featurePoints.map((point) => (
                <div
                  key={point.number}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    <span className="text-blue-600 font-bold mr-2">
                      {point.number}.
                    </span>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Image and Features --- */}
          {/* Added `relative` to be a container for the absolutely positioned points */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/textile-factory.jpg" // IMPORTANT: Replace with your image path
                alt="Textile factory with large weaving machines"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Feature Points for Desktop (Right Side) - positioned absolutely */}
            {/* These are only visible on large screens */}
            <div className="hidden lg:block">
              {featurePoints.slice(3, 5).map((point) => (
                <div
                  key={point.number}
                  className={`absolute w-64 ${point.position}`}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">
                      <span className="text-blue-600 font-bold mr-2">
                        {point.number}.
                      </span>
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextileLeadersSection;
