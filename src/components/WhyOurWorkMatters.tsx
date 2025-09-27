"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const WhyOurWorkMatters = () => {
  return (
    <section
      className="bg-[#f3f4f6] py-10"
      style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    >
      <div className="mx-auto max-w-7xl bg-white/80 py-12 px-6 flex flex-row relative rounded-2xl">
        {/* Left Section: Image */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-15 left-20 w-[30%] h-[400px]"
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
        <div className="w-[40%] flex justify-center max-md:w-full py-14">
          {/* Make sure to place your image in the `public` folder */}

          <div className="relative mx-auto w-[70%] h-[24rem]">
            <Image
              src={`/assets/images/why-work-matters1.png`}
              alt="A person sitting with a laptop, smiling."
              fill
              className=""
            />
          </div>
        </div>

        {/* Right Section: Testimonial Box */}
        <div className="w-[60%] flex justify-center max-md:w-full">
          <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-lg max-md:p-8">
            {/* Arrow/Pointer pointing to the left */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-4 w-0 h-0 
        border-t-[20px] border-t-transparent
        border-b-[20px] border-b-transparent
        border-r-[20px] border-r-white
        max-md:hidden"
            ></div>

            <h2>Innovation, Scale, and Responsibility in Textile Production</h2>

            {/* Main Text */}
            <p className="text-xl text-gray-700 leading-relaxed max-md:text-lg">
              At Just Textiles, we're transforming the textile industry by
              balancing affordable fabric production with urgent sustainability
              needs. Our approach combines cutting-edge innovation, efficient
              scaling, and environmental responsibility to create a new standard
              for textile manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOurWorkMatters;
