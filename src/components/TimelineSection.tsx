"use client";
import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const TimelineSection = () => {
  return (
    <div className="w-[100%] py-20 mx-auto relative overflow-hidden max-md:hidden">
      <div className="absolute h-[300px] w-[300px] top-0 -right-10 opacity-70">
        <Image
          fill
          alt=""
          src={`/assets/images/blackStrip.png`}
          className="object-cover w-full h-full"
        ></Image>
      </div>
      <div className="w-[80%] mx-auto relative">
        <div className="grid grid-cols-3 gap-6 h-[14rem] font-open">
          <div className="w-full h-full relative">
            <Image
              fill
              className="object-cover rounded-xl"
              src={`/assets/images/ex1.png`}
              alt=""
            ></Image>
          </div>

          <div className="w-full h-full px-6 flex flex-col gap-6 items-center justify-center">
            <h3 className="text-2xl font-semibold text-[var(--bodyContent)] text-center">
              For Buyers
            </h3>

            <p className="text-lg !leading-[1.5] text-center">
              Reliable bulk supplies with unmatched color consistency and
              specialty finishes, meeting production deadlines with quality
              guarantees.
            </p>
          </div>

          <div className="w-full h-full relative">
            <Image
              fill
              className="object-cover rounded-xl"
              src={`/assets/images/ex2.png`}
              alt=""
            ></Image>
          </div>
        </div>

        <div className="w-full h-[0.5] bg-[var(--greenShade)] my-16"></div>

        <motion.div
          animate={{ scale: [1, 1.4, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-[48%] left-1/5"
        >
          <FaCircle className="text-[var(--greenShade)] text-2xl" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.4, 0.8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-[48%] left-1/2"
        >
          <FaCircle className="text-[var(--greenShade)] text-2xl" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.4, 0.8] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-[48%] right-1/5"
        >
          <FaCircle className="text-[var(--greenShade)] text-2xl" />
        </motion.div>

        <div className="grid grid-cols-3 gap-6 h-[14rem] font-open">
          <div className="w-full h-full px-6 flex flex-col gap-6 items-center justify-center">
            <h3 className="text-2xl font-semibold text-[var(--bodyContent)] text-center">
              For Global Brands
            </h3>

            <p className="text-lg !leading-[1.5] text-center">
              Traceable, sustainable processes that align with consumer
              expectations and compliance requirements, supporting your brand's
              sustainability commitments.
            </p>
          </div>

          <div className="w-full h-full relative">
            <Image
              fill
              className="object-cover rounded-xl"
              src={`/assets/images/ex3.png`}
              alt=""
            ></Image>
          </div>

          <div className="w-full h-full px-6 flex flex-col gap-6 items-center justify-center">
            <h3 className="text-2xl font-semibold text-[var(--bodyContent)] text-center">
              For the Planet
            </h3>

            <p className="text-lg !leading-[1.5] text-center">
              Minimized environmental footprint through water recycling, reduced
              chemical discharge, and pioneering salt-free dyeing techniques.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default TimelineSection;
