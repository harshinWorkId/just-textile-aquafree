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
          <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
            Looking Ahead - Preparing for the Next Era
          </h2>
          <div className="grid grid-cols-2 gap-16 items-center relative">
            {/* left side */}

            <div className="text-left">
              <p className="text-xl font-semibold font-open text-[var(--bodyContent)] leading-tight text-justify mb-2">
                The textile industry is entering a transformation driven by
                sustainability, digitalization, and smart textiles. We are
                already moving ahead:
              </p>

              {/* <div className="pl-6 border-l-2 border-l-[var(--deepOcean)] border-gray-300">
                <p className="text-[var(--bodyContent)] text-xl font-openleading-relaxed">
                  The process consists of four tightly controlled stages:
                </p>
              </div> */}

              <div className="mt-6 flex flex-col gap-y-4 font-open text-[var(--bodyContent)] text-xl text-justify">
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
                  <p>
                    Developing smart textiles with temperature-regulating,
                    antimicrobial, and durable coatings
                  </p>
                </div>
              </div>

              <p className="text-[var(--bodyContent)] text-xl font-medium font-open my-6 max-w-xl">
                We don't just keep pace with change-we set the pace.
                <br />
              </p>
            </div>

            {/* right side */}
            <div className="relative w-full h-[500px]">
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

          <div className="w-full mx-auto overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-0 grid grid-cols-2 gap-12 items-center">
              {/* Left Image with Blue Frame */}
              <div className="relative w-full h-[500px] flex justify-center">
                {/* Blue Frame */}
                <div className="absolute top-6 left-6 w-full h-full bg-[var(--deepOcean)] rounded-md -z-10" />

                {/* Main Image */}
                <Image
                  src="/assets/images/why-work-matters3.png"
                  alt="Business Meeting"
                  fill
                  className="object-cover rounded-r-[250px] rounded-b-[250px] shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="relative flex flex-col justify-center">
                {/* Description */}
                <p className="text-[var(--bodyContent)] font-semibold text-xl font-open mb-2">
                  At Just Textiles Ltd, capabilities are not measured by
                  machines or buildings alone. They are defined by a philosophy:
                  innovation with responsibility.
                </p>

                {/* Checklist */}
                <div className="mt-4 flex flex-col gap-y-4 font-open text-[var(--bodyContent)] text-xl text-justify">
                  <div className="flex flex-row gap-4">
                    <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                    <p>AquaFree™ proves our power to innovate.</p>
                  </div>

                  <div className="flex flex-row gap-4">
                    <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                    <p>European technology ensures precision and quality.</p>
                  </div>

                  <div className="flex flex-row gap-4">
                    <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                    <p>
                      ZLD and renewable energy highlight our responsibility.
                    </p>
                  </div>

                  <div className="flex flex-row gap-4">
                    <FaCheck className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                    <p>
                      Collaborations and labs reinforce our commitment to
                      continuous improvement.
                    </p>
                  </div>
                </div>

                <p className="text-[var(--bodyContent)] text-xl font-medium font-open my-6 max-w-xl">
                  This is why global buyers trust us.
                  <br />
                  This is why we are seen as pioneers.
                  <br />
                  And this is how we will continue leading the textile
                  industry-by creating fabrics that dress the world responsibly.
                </p>

                <div className="absolute -top-16 -right-30 w-[200px] h-[200px] rounded-md -z-10 overflow-hidden opacity-50">
                  <Image
                    src="/assets/images/blackStrip.png"
                    alt="Business Meeting"
                    fill
                    className="object-cover overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
