"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PlasmaTechnologySection: React.FC = () => {
  return (
    <section className="py-12 bg-[var(--beige)]/30">
      <div className="mx-auto max-w-7xl  py-12 px-6 flex flex-row items-center relative rounded-2xl max-lg:flex-col">
        {/* Left Section: Image */}
        <motion.div
          animate={{ rotate: 180 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-[30%] h-[400px]"
        >
          <div className="relative w-full h-full">
            <Image
              src={`/assets/images/testi-shape1.png`}
              alt=""
              fill
              className="object-cover w-full h-full"
            ></Image>
          </div>
        </motion.div>

        <div className="w-[40%] flex justify-center max-lg:w-full py-6">
          <div className="relative mx-auto w-[70%] h-[25rem]">
            <Image
              src={`/assets/images/plasma-tech.jpg`} // replace with actual plasma image in /public/assets/images
              alt="Plasma Technology"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Section: Text Content Box */}
        <div className="w-[60%] flex justify-center max-lg:w-full">
          <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
            {/* Arrow pointing to image (hidden on mobile) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-4 w-0 h-0 
              border-t-[20px] border-t-transparent
              border-b-[20px] border-b-transparent
              border-r-[20px] border-r-white
              max-lg:hidden"
            ></div>

            {/* Heading */}
            <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
              Next Frontier: Plasma Technology Development
            </h2>

            {/* Description */}
            <p className="text-[var(--bodyContent)] text-lg font-open leading-relaxed mb-4">
              While AquaFree™ revolutionized wet processing, our R&D division is
              developing Plasma Technology - a groundbreaking dry process using
              ionized gases for fabric surface treatment at the microscopic
              level. This cutting-edge approach requires no water and minimal
              chemistry, representing another sustainability breakthrough.
            </p>

            {/* Subheader */}
            <h3 className="font-semibold text-2xl font-open text-[var(--bodyContent)] mb-2">Plasma Technology Benefits:</h3>

            {/* Bullet points */}
            <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
              <li>
                Enhanced wettability and absorbency for superior dye uptake
                efficiency
              </li>
              <li>
                Functional properties: antimicrobial resistance, water
                repellency, flame retardancy
              </li>
              <li>
                Dramatic energy savings by eliminating water-based finishing
                steps
              </li>
              <li>
                Compatible with cotton, polyester, viscose, and nylon fibers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlasmaTechnologySection;
