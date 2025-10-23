"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiSewingMachine } from "react-icons/gi";

const SewingMachineAnimation: React.FC = () => {
  // const [direction, _setDirection] = useState<"right" | "left">("right");

  const direction: "right" | "left" = "right";

  return (
    <div className="relative w-full h-16 overflow-visible flex items-center">
      {/* Wavy Zig-Zag Thread */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 20"
        className="absolute top-1/2 -translate-y-1/2 w-full h-6 text-[var(--forestGreen)] z-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* Moving Sewing Machine */}
      <motion.div className="absolute z-10 -left-10">
        <GiSewingMachine
          className={`w-10 h-10 text-[var(--forestGreen)] transition-transform duration-500 ${
            direction === "right" ? "rotate-0" : "rotate-180"
          }`}
        />
      </motion.div>
    </div>
  );
};

const WhyWorkMatters3: React.FC = () => {
  return (
    // py-24
    <section
      className="py-12 px-8 max-md:px-4 max-md:py-20"
      //   style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    >
      <div className="max-w-[1290px] bg-white/70 p-12 max-md:p-0 rounded-2xl mx-auto grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-12">
        {/* Left Column: Image */}

        <div className="relative pl-12 max-lg:pl-0">
          {/* Decorative shape - top right */}
          {/* <div className="absolute -top-16 -right-8 w-24 h-24 border-t-2 border-r-2 border-gray-900 max-md:hidden"></div> */}

          {/* <p className="text-8xl font-serif text-gray-900 leading-none max-lg:text-7xl">
            98<span className="text-orange-500">%</span>
          </p> */}

          <div className="relative max-md:mb-10">
            <p className="text-4xl max-md:text-3xl font-medium font-serif text-[var(--greenShade))] mt-2 mb-6 max-lg:text-3xl">
              Our Journey of Sustainable Innovation
            </p>

            {/* Animated Heading */}
            <div className="flex items-center mb-4 absolute top-7 right-16 max-md:right-0 max-md:left-10 max-md:top-12">
              <div className="w-52">
                <SewingMachineAnimation />
              </div>
            </div>
          </div>

          <div className="relative w-full h-[500px] hidden max-md:block max-md:mb-10 rounded-2xl overflow-hidden max-lg:h-[400px] max-md:h-[300px]">
            {/* Decorative vertical line */}
            <div className="absolute -left-20 top-0 bottom-0 w-px bg-gray-400 max-lg:hidden"></div>
            <Image
              src={`/assets/images/why-work-matters1.png`}
              alt="A person holding a collection of fabric samples"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            {/* Decorative lines - bottom left */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-orange-500 rounded-bl-2xl max-md:hidden"></div>
          </div>

          <p className="textStyle2 font-open text-justify w-[90%] max-md:w-[100%] mb-8">
            Just Textiles has charted a deliberate path of growth through
            technological advancement and environmental stewardship. Each
            milestone represents our commitment to balancing performance,
            cost-efficiency, and environmental responsibility.
          </p>

          <p className="textStyle2 font-open text-justify w-[90%] max-md:w-[100%] mb-8">
            We believe that continuous improvement in harmony with
            sustainability isn't just good business - it's essential for the
            future of our industry and our planet.
          </p>

          <a
            href="#"
            className="inline-block bg-[var(--deepOcean)] text-white font-bold py-3 px-8 rounded-md hover:bg-[var(--deepOcean)]/90 transition-colors duration-300"
          >
            Get Service
          </a>
        </div>

        {/* Right Column: Text Content */}
        <div className="relative w-full h-[500px] max-md:hidden rounded-2xl overflow-hidden max-lg:h-[400px] max-md:h-[300px]">
          {/* Decorative vertical line */}
          <div className="absolute -left-20 top-0 bottom-0 w-px bg-gray-400 max-lg:hidden"></div>
          <Image
            src={`/assets/images/why-work-matters1.png`}
            alt="A person holding a collection of fabric samples"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          {/* Decorative lines - bottom left */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-orange-500 rounded-bl-2xl max-md:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkMatters3;
