"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSolarPanel } from "react-icons/fa"; // wind waves + solar
import { MdAir } from "react-icons/md";
import { GiSewingMachine, GiTurbine  } from "react-icons/gi";

const SewingMachineAnimation: React.FC = () => {
  const [direction, setDirection] = useState<"right" | "left">("right");

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

const OurStorySection: React.FC = () => {
  return (
    <section className="bg-[#f9f2e9] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/assets/images/EnergyRecover.png"
            alt="Our Story"
            fill
            className="object-cover rounded-md shadow-lg"
          />
          {/* Rating box overlay */}
          {/* <div className="absolute bottom-6 left-6 bg-white shadow-md px-6 py-4">
            <div className="flex items-center text-3xl font-bold text-[var(--forestGreen)]">
              4.7
              <span className="ml-2 text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 font-medium text-sm">
              Happy Client Rating
            </p>
          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Animated Heading */}
          {/* <div className="flex items-center mb-4">
            <div className="w-52">
              <SewingMachineAnimation />
            </div>
          </div> */}

          <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-4 font-serif">
            Energy Recovery: Powering Sustainable Production
          </h2>

          <p className="textStyle2 font-open !leading-tight mb-4">
            Our integrated energy systems minimize dependence on conventional
            power sources while maximizing efficiency throughout our
            manufacturing processes.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 font-open">
            <div className="p-6 border border-dashed border-gray-300 flex gap-4 items-start">
            <GiTurbine  className="w-8 h-8 text-[var(--forestGreen)]" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--bodyContent)]">
                  Steam Turbine Units
                </h3>
                <p className="text-[var(--bodyContent)] text-sm">
                  Capturing and converting process steam into electricity
                </p>
              </div>
            </div>

            <div className="p-6 border border-dashed border-gray-300 flex gap-4 items-start">
              <MdAir  className="w-8 h-8 text-[var(--forestGreen)]" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--bodyContent)]">
                  Heat Recovery Systems
                </h3>
                <p className="text-[var(--bodyContent)] text-sm">
                  Recycling thermal energy from production processes
                </p>
              </div>
            </div>

            <div className="p-6 border border-dashed border-gray-300 flex gap-4 items-start md:col-span-2">
              <FaSolarPanel className="w-8 h-8 text-[var(--forestGreen)]" />
              <div>
                <h3 className="font-semibold text-lg text-[var(--bodyContent)]">
                  Solar Energy Plants
                </h3>
                <p className="text-[var(--bodyContent)] text-sm">
                  Generating clean electricity to offset traditional power
                  consumption
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-[var(--forestGreen)] text-white font-medium hover:bg-green-900 transition rounded-sm">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
