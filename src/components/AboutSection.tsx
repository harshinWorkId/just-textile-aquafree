"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const AboutSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-0"
      // style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    >
      <div className="relative max-w-[1290px] bg-[var(--grayish)]/30 z-10 container mx-auto px-12 max-md:px-4 py-20 flex flex-row max-lg:flex-col gap-20">
        {/* Background Shape Image */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute max-md:w-[60%] max-md:left-30 max-md:top-30 top-10 left-40 w-[400px] h-[550px]"
        >
          <div className="relative w-full h-full">
            <Image
              src={`/assets/images/about-shape2.png`}
              alt="Abstract background shape"
              layout="fill" // Stretches to fill the parent div
              objectFit="cover" // Covers the area without distorting aspect ratio
            />
          </div>
        </motion.div>
        {/* Left Column: Images and Dotted Background */}
        <div className="w-[40%] max-lg:w-[100%] flex flex-col gap-6 relative">
          {/* Dotted background graphic (replicated with a div, could be an SVG too) */}
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-purple-100 rounded-full opacity-50 blur-xl"></div>

          <h2 className="hidden max-lg:block text-3xl text-center font-medium text-[var(--greenShade))] font-serif leading-tight mb-6">
            The Challenge: Balancing Affordability and Sustainability
          </h2>

          <div className="flex flex-row sm:flex-row gap-6">
            {/* Image 1:  */}
            <div className="w-1/2 max-lg:w-[100%] relative h-84 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/assets/images/why-work-matters1.png`}
                alt="Team working together on laptops"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-1/2 max-lg:w-[100%] mt-20 relative h-84 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/assets/images/why-work-matters1.png`}
                alt="Man sitting on sofa with laptop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-[60%] max-lg:w-[100%] flex flex-col justify-center font-open">
          <h2 className="text-4xl max-xl:text-3xl font-medium text-[var(--greenShade))] max-lg:hidden font-georgia leading-tight mb-6">
            The Challenge: Balancing Affordability and Sustainability
          </h2>

          <div className="py-3 px-4 border-l-2 border-[var(--skyBlue)] text-[var(--forestGreen)] font-open textStyle mb-4">
            "Innovative textile solutions that combine affordability with
            sustainability."
          </div>
          <p className="textStyle2 font-open mb-8 text-justify">
            Today's textile industry faces a critical dilemma: meeting growing
            global demand for affordable fabrics while addressing increasingly
            urgent sustainability concerns. This balance requires rethinking
            traditional manufacturing processes from the ground up.
          </p>

          <p className="textStyle2 font-open text-justify">
            At Just Textiles, we've made this challenge our mission, developing
            solutions that serve buyers, brands, and the planet simultaneously
            without compromise.
          </p>

          {/* Two-Column Features */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Reverse Osmosis Plants
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Advanced filtration to remove contaminants and recover clean
                water
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Multi-Effect Evaporators
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Concentration of wastewater to minimize volume and recover
                additional water
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Multi-Effect Evaporators
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Concentration of wastewater to minimize volume and recover
                additional water
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
