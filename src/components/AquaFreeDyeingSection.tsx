"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

const AquaFreeDyeingSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-24 overflow-x-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* left side */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
            <div className="relative w-full h-full rounded-l-[250px] rounded-t-[250px] overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/why-work-matters1.png"
                alt="Engineer working with a robotic arm in a modern facility"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* right side */}
          <div className="text-left">
            <p className="text-4xl font-semibold font-open text-[var(--greenShade)] tracking-[0.2em] mb-4">
              [Our Innovation: AquaFree™]
            </p>

            <h3 className="text-xl font-boldfont-open text-[var(--bodyContent)] leading-tight sm:leading-tight mb-8">
              At Just Textiles, we decided to confront this challenge head-on.
              Our AquaFree™ process is a proprietary technology designed to
              minimize or even eliminate the use of water and salt in cotton
              dyeing.
            </h3>

            <div className="pl-6 border-l-2 border-l-[var(--deepOcean)] border-gray-300">
              <p className="text-[var(--bodyContent)] text-xl font-openleading-relaxed">
                The process consists of four tightly controlled stages:
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8 font-open text-justify">
              <div>
                <h3 className="text-xl font-bold text-[var(--bodyContent)] mb-3">
                  Preparation
                </h3>
                <p className="text-[var(--bodyContent)] leading-snug">
                  A thin, even layer of dye solution is applied precisely to the
                  fabric. Unlike conventional immersion methods, this uses far
                  less water and ensures uniform application.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--bodyContent)] mb-3">
                  Infusion
                </h3>
                <p className="text-[var(--bodyContent)] leading-snug">
                  The fabric absorbs the dye through advanced fixation
                  techniques. Because the process avoids salt, the uptake is
                  more controlled and efficient.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--bodyContent)] mb-3">
                  Production
                </h3>
                <p className="text-[var(--bodyContent)] leading-snug">
                  The fixation occurs faster, reducing the total cycle time
                  compared to conventional methods. This translates into lower
                  energy consumption and higher throughput.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--bodyContent)] mb-3">
                  Finishing:
                </h3>
                <p className="text-[var(--bodyContent)] leading-snug">
                  Minimal rinsing removes any residual dye, producing fabrics
                  with brilliant shades and long-lasting fastness properties.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -top-20 left-1/3 w-[100px] h-[80px]"
            style={{
              x: x,
              rotate: rotate,
            }}
          >
            <Image
              alt="Thread roll icon"
              fill
              src="/assets/images/thread-roll.png"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AquaFreeDyeingSection;
