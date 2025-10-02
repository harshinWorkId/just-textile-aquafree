import React from "react";
import Navbar2 from "@/components/Navbar2";
import InnovationSection1 from "@/components/InnovationSection1";
import CardStack from "@/components/CardStack";
import InnovationSection2 from "@/components/InnovationSection2";
import { FaCheck } from "react-icons/fa";

import Image from "next/image";
const page = () => {
  return (
    <div>
      <Navbar2 />
      <InnovationSection1 />

      <InnovationSection2 />

      <section className="py-20 bg-[var(--beige)]/30">
        <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
          Why It Matters - Impact Beyond Our Walls
        </h2>

        <p className="text-[var(--grayish)] font-open text-xl font-semibold text-center mt-4">
          Our capabilities are designed not just for business gains but for
          shared value creation.
        </p>

        <CardStack />
      </section>

      <section className="bg-white py-16 sm:py-24 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2  gap-16 items-center relative">
            {/* left side */}

            <div className="text-left">
              <p className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
                Looking Ahead - Preparing for the Next Era
              </p>

              <p className="text-xl font-semibold font-open text-[var(--bodyContent)] leading-tight text-justify mb-8">
                The textile industry is entering a transformation driven by
                sustainability, digitalization, and smart textiles. We are
                already moving ahead:
              </p>

              {/* <div className="pl-6 border-l-2 border-l-[var(--deepOcean)] border-gray-300">
                <p className="text-[var(--bodyContent)] text-xl font-openleading-relaxed">
                  The process consists of four tightly controlled stages:
                </p>
              </div> */}

              <div className="mt-12 flex flex-col gap-y-4 font-open text-[var(--bodyContent)] text-xl text-justify">
                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p>Scaling AquaFree™ into mainstream production</p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p>Expanding solar energy coverage across our facilities</p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p>Exploring biodegradable auxiliaries and natural dyes</p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p>Securing global certifications - ISO, OEKO-TEX, GOTS</p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                  <p>Developing smart textiles with temperature-regulating, antimicrobial, and durable coatings</p>
                </div>

              </div>
            </div>

            {/* right side */}
            <div className="relative w-full h-[600px]">
              <div className="relative w-full h-full rounded-l-[250px] rounded-b-[250px] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/why-work-matters1.png"
                  alt="Engineer working with a robotic arm in a modern facility"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
