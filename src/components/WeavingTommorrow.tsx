"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

const WeavingTommorrow = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 px-6 max-lg:grid-cols-1 relative">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[500px] max-md:h-[350px] rounded-md overflow-hidden">
          <Image
            src="/assets/images/weaving-tommorrow.png" // replace with your fabric/robot image
            alt="Weaving Tomorrow's Textiles"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 h-[200px] w-[200px]">
          <Image
            fill
            alt=""
            src={`/assets/images/blackStrip.png`}
            className="opacity-30 object-contain"
          ></Image>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-4 font-serif">
              Weaving Tomorrow's Textiles Today
            </h2>
            <p className="text-[var(--bodyContent)] font-open leading-relaxed">
              At Just Textiles Ltd, our vision, mission, and purpose align to
              create fabrics that don't just meet today's needs - they
              anticipate tomorrow's challenges. <br />
              <br />
              Through innovative technology, sustainable practices, and
              unwavering commitment to excellence, we're not just processing
              textiles. We're crafting a legacy of responsibility, quality, and
              trust that will endure for generations. <br />
              <br />
              Ready to partner with a textile leader that shares your commitment
              to excellence and sustainability?
            </p>
          </div>

          <div className="flex fex-row w-full relative">
            <div className="w-[50%] h-[140px]">
              <div className="relative w-[50%] h-full flex justify-start z-0">
                <Image
                  fill
                  alt=""
                  src={`/assets/images/machine-house2.png`}
                  className="opacity-30 object-cover w-[50%] h-full"
                ></Image>

                <motion.div animate={{rotate:360}} transition={{duration:10, repeat:Infinity}} className="w-[60px] h-[60px] absolute top-2 right-5 z-0">
                  <Image
                    fill
                    alt=""
                    src={`/assets/images/settings.png`}
                    className="opacity-30 object-cover w-[50%] h-full"
                  ></Image>
                </motion.div>
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-[var(--deepOcean)] w-[50%] text-white px-8 py-4 rounded-md relative overflow-hidden flex flex-col items-start justify-between gap-6">
              <h3 className="textStyle font-open font-semibold z-10">
              Have a project? Let's Talk!
            </h3>

              {/* faint decorative circle behind */}

              <button className="bg-white text-[var(--bodyContent)] font-semibold px-6 py-2 rounded-sm hover:bg-gray-200 transition z-10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeavingTommorrow;
