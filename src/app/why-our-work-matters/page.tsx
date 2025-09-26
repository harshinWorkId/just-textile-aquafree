
import React from "react";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutSection from "@/components/AboutSection";
import WhyWorkMatters3 from "@/components/WhyWorkMatters3";
import WhyWorkMatters4 from "@/components/WhyWorkMatters4";
import TimelineSection from "@/components/TimelineSection";
import ServicesGrid from "@/components/ServicesGrid";
import ZeroLiquidDischarge from "@/components/ZeroLiquidDischarge";
import EnergyRecovery from "@/components/EnergyRecovery";




const page = () => {
  return (
    <>
      <div className="relative">
      {/* bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/bg1.png')" }} */}
        <Navbar2></Navbar2>

        <div
          className="p-4 flex items-center justify-center mt-20"
          // style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
        >
          <section className="relative mx-auto my-12 max-w-7xl bg-white/100 rounded-2xl">
            <div className="overflow-hidden rounded-lg relativee shadow-lg lg:grid lg:grid-cols-2 lg:gap-4">
              {/* Left Column: Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-[url('/assets/images/bg1.png')] opacity-40 -z-10 rounded-2xl"
                aria-hidden="true"
              ></div>
              <div className="relative aspect-video lg:aspect-auto">
                {/* IMPORTANT: Replace this src with your image path, e.g., "/your-image.jpg" */}
                <Image
                  src="/assets/images/why-work-matters1.png"
                  alt="Worker in a factory inspecting a large metal part."
                  layout="fill"
                  objectFit="cover"
                  className="h-full w-full"
                />
                {/* <div className="absolute bottom-8 left-8 max-w-sm rounded-lg bg-gray-900/90 p-6 text-white backdrop-blur-sm">
                <h3 className="text-3xl font-bold leading-tight">
                  Market leadership since 2002
                </h3>
              </div> */}
              </div>

              {/* Right Column: Content */}
              <div className="p-8 sm:p-12 lg:p-16">
                {/* <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                EXCELLENT PRODUCTS
              </p> */}
                <h2 className="mt-2 text-4xl font-medium tracking-tight text-[var(--greenShade)] sm:text-5xl">
                  Innovation, Scale, and Responsibility in Textile Production
                </h2>
                <p className="mt-6 text-lg text-[var(--bodyContent)] text-justify">
                  At Just Textiles, we're transforming the textile industry by
                  balancing affordable fabric production with urgent
                  sustainability needs. Our approach combines cutting-edge
                  innovation, efficient scaling, and environmental
                  responsibility to create a new standard for textile
                  manufacturing..
                </p>

                {/* <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Adipiscing voluptas sit amet
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Lorem ipsum dolor
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <p className="ml-3 text-base text-gray-700">
                    Dicta sunt explicabo lorem ipsum
                  </p>
                </li>
              </ul> */}
                {/* <div className="mt-10">
                <button
                  type="button"
                  className="rounded-full bg-red-600 px-8 py-3 text-base font-medium text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Our Process
                </button>
              </div> */}
              </div>
            </div>
          </section>
        </div>

        <AboutSection></AboutSection>
        <TimelineSection />

        <WhyWorkMatters3></WhyWorkMatters3>
        <WhyWorkMatters4></WhyWorkMatters4>
        <ZeroLiquidDischarge/>
        <EnergyRecovery/>
        <ServicesGrid/>
      </div>
    </>
  );
};

export default page;
