"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
const features = [
  {
    title: "AquaFree™ Waterless Dyeing - ",
    description: "from lab concept to scalable, industrial production.",
  },
  {
    title: "Protective Finishes -",
    description:
      "flame-retardant and antimicrobial treatments developed with new sustainable chemistries.",
  },
  {
    title: "Industrial Textile Coatings - ",
    description:
      "advanced coatings engineered for durability, moisture management, and specialized industrial use.",
  },
];

const InnovationSection1: NextPage = () => {
  return (
    <section
      className="bg-[var(--beige)]/30 py-16 mt-20"
      
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
            [Innovation with Responsibility]
          </div>

          <p className="font-open text-xl font-semibold text-[var(--bodyContent)] text-center">
            At Just Textiles, innovation doesn't happen by chance - it's the
            outcome of structured research, strategic partnerships, and a
            commitment to reimagining what textiles can achieve. Every
            collaboration, every pilot run, and every lab test is part of a
            larger vision: to create fabrics that are sustainable,
            high-performing, and globally trusted.
          </p>
        </div>
        <div className="flex flex-row items-center mt-12 gap-0 max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left Side */}
          <div className="relative flex h-full min-h-[500px] w-[40%] items-center justify-center max-lg:min-h-[450px] max-sm:min-h-[400px]">
            {/* Red circular background shape */}
            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[480px] w-[480px] rounded-full bg-[var(--greenShade)] max-md:h-[400px] max-md:w-[400px] max-sm:h-[320px] max-sm:w-[320px]"></div>
            </div> */}

            {/* Image */}
            <div className="relative z-10 w-full max-w-[400px] mx-auto">
              <Image
                src="/assets/images/innovation-with-responsibility.png"
                alt="Business woman with a tablet"
                width={450}
                height={550}
                className="h-auto w-full object-cover"
              />

              <motion.div
                animate={{ rotate: 180 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 20,
                  ease: "linear",
                }}
                className="-top-10 absolute -left-8 w-[115%]  -z-10"
              >
                <Image
                  src="/assets/images/testi-shape1.png"
                  alt="aquafree"
                  width={450}
                  height={550}
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </div>

            {/* <div className="absolute bottom-10 left-0 z-20 w-44 rounded-xl bg-white p-4 text-center shadow-2xl max-md:bottom-4 max-md:left-[-1rem] max-sm:w-36 max-sm:p-3">
              <div className="flex justify-center">
                <FaBullseye className="mb-2 text-4xl text-red-600 max-sm:text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 max-sm:text-lg">
                100% Trusted
              </h3>
              <p className="text-sm text-gray-500">Trusted & Guarantee</p>
            </div> */}

            {/* Floating Card: +70,000 Empowered */}
            {/* <div className="absolute right-0 top-24 z-20 flex items-center gap-4 rounded-xl bg-white p-4 shadow-2xl max-md:right-[-1rem] max-md:top-20 max-sm:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <FaSearchPlus className="text-2xl text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">+70.000</h3>
                <p className="text-sm text-gray-500">Empowered</p>
              </div>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="w-[60%] max-lg:text-center px-8">
            <h2 className="text-4xl font-medium text-[var(--greenShade)] max-md:text-3xl">
              Pilot Projects - Where Ideas Become Breakthroughs
            </h2>
            <p className="mt-6 font-open leading-relaxed text-[var(--bodyContent)] text-justify text-lg">
              Every big leap starts small. Our dedicated pilot-scale facilities
              act as the testing ground where concepts are refined into
              market-ready solutions.
            </p>
           

            <ul className="mt-8 space-y-6 font-open leading-relaxed text-[var(--bodyContent)] text-justify text-lg">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p className="text-gray-700">
                    <span className="font-bold">{feature.title}</span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-open leading-relaxed text-[var(--bodyContent)] text-justify text-lg">
            By running pilots in controlled environments, we perfect innovation before it reaches full - scale production - ensuring reliability, repeatability, and sustainability.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection1;
