import React from "react";
import Navbar2 from "@/components/Navbar2";
import EnvironmentalFabricSection1 from "@/components/EnvironmentalFabricSection1";
import EnvironmentalFabricSection2 from "@/components/EnvironmentalFabricSection2";
import ZeroLiquidDischarge2 from "@/components/ZeroLiquidDischarge2";
import ProcessSteps from "@/components/ProcessSteps";
import CardStack3 from "@/components/CardStack3";

import { FaHandHoldingWater, FaUserTie } from "react-icons/fa";

import { FaLeaf } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";

import { LiaAwardSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
// import Image from 'next/image';

// interface WorkStep {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// }

// const steps: WorkStep[] = [
//   {
//     icon: DraftingCompass,
//     title: 'Planet',
//     description: 'Protecting natural resources, reducing emissions, eliminating waste.',
//   },
//   {
//     icon: Layers,
//     title: 'People',
//     description: 'Empowering farmers, creating safe employment, supporting communities.',
//   },
//   {
//     icon: User,
//     title: 'Performance',
//     description: 'Delivering quality fabrics that help global brands meet their own sustainability goals.',
//   },

// ];

// const corePillars = [
//   {
//     number: "01/",
//     title: "Zero Liquid Discharge (ZLD)",
//     description:
//       "Every drop of wastewater is treated, recycled, and reused. Nothing leaves our plant untreated.",
//   },
//   {
//     number: "02/",
//     title: "Waterless Innovation (AquaFree™)",
//     description:
//       "Pioneering technologies that cut water use by up to 90% compared to conventional dyeing.",
//   },
//   {
//     number: "03/",
//     title: "Clean Energy",
//     description:
//       "Solar power and agro-based boilers reduce dependence on fossil fuels.",
//   },
//   {
//     number: "04/",
//     title: "Green Chemistry",
//     description:
//       "Partnering with innovators to adopt eco-certified dyes and auxiliaries.",
//   },
//   {
//     number: "05/",
//     title: "Circularity",
//     description:
//       "Textile waste minimization, recycling, and trials with bio-based fabrics.",
//   },
//   {
//     number: "06/",
//     title: "Transparency",
//     description:
//       "Annual sustainability reports, measurable impact metrics, and independent validations.",
//   },
// ];

import CountUp from "@/components/CountUp";

const page = () => {
  return (
    <div>
      <Navbar2></Navbar2>

      {/* <section className="relative overflow-hidden bg-[var(--beige)]/30 py-20 mt-20">


        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-20">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-black">
                Sustainability
              </span>
              <h2 className="mt-4 text-4xl font-medium text-[var(--greenShade)] font-serif">
                Our Responsibility in Action
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--bodyContent)] font-open">
                For us at Just Textiles, sustainability is not an afterthought or a marketing line. It is the foundation on which we have built our company. Every meter of fabric that leaves our facility is created with one guiding principle: industrial excellence must never come at the cost of the environment.

              </p>
              <p className="mt-4 text-lg leading-relaxed text-[var(--bodyContent)] font-open">
                The global textile industry is one of the most resource-intensive sectors. Conventional dyeing and finishing consume massive amounts of water, release untreated effluents, and rely heavily on fossil fuels. Left unchecked, it can drain rivers, pollute ecosystems, and push communities into crisis.

              </p>

              <p className="mt-4 text-lg leading-relaxed text-[var(--bodyContent)] font-open">
                At Just Textiles, we chose a different path. We pioneered what we call Environmental Fabric Processing - a way of working that balances scale with sustainability, efficiency with empathy, and business with biodiversity.


              </p>

            </div>

            <div className="flex flex-col">

              <h3 className='text-[var(--deepOcean)] font-semibold font-open text-xl'>
                Our sustainability work spans three dimensions:
              </h3>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex items-start gap-6 p-6 
                    ${index === 0 ? 'border-0' : 'border-t-1'}

                  `}
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md border-2 border-[var(--deepOeacn)]">
                    <step.icon className="h-8 w-8 text-[var(--deepOeacn)] font-open" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--bodyContent)]">{step.title}</h3>
                    <p className="mt-2 text-lg text-[var(--bodyContent)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section> */}

      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 px-6 max-lg:grid-cols-1">
        
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-8 font-serif">
              Our Commitment - Beyond Compliance
            </h2>

            <p className='text-[var(--bodyContent)] text-xl font-open'>
              We don't stop at meeting government regulations or industry norms. We set our own benchmarks - often stricter than what compliance demands.
            </p>


            <h3 className='text-3xl text-[var(--deepOcean)] font-semibold font-open mt-10'>
              Core Pillars of Our Commitment
            </h3>

            <div className="space-y-6 mt-4">
              {corePillars.map((step, idx) => (
                <div
                  key={idx}
                  className="group border-b border-gray-300 pb-4 flex gap-6 items-start"
                >
                  <div className="text-4xl group-hover:scale-[2] transform transition-transform duration-500 ease-in-out font-bold text-[var(--bodyContent)] font-serif min-w-[70px]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="textStyle2 font-open font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[var(--bodyContent))] text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative w-full h-[550px] max-lg:h-[400px]">
            <Image
              src="/assets/images/beyond-manufacturing.png" 
              alt="Textile Work"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </section> */}

      {/* <CorePillars/> */}

      <EnvironmentalFabricSection1 />

      <EnvironmentalFabricSection2 />

      <ZeroLiquidDischarge2 />

      {/* Why it matters  */}
      <div className="h-[24rem] max-md:h-full w-full relative">
        <div className="w-full h-[50%] relative top-10 max-md:top-6">
          <h3 className="text-center font-serif font-semibold text-2xl text-[var(--deepOcean)]">
            Why it Matters
          </h3>
        </div>

        <div className="w-full h-[50%] max-md:hidden bg-[var(--grayish)]"></div>

        <div className="absolute max-md:hidden top-[20%] w-full">
          <ProcessSteps />
        </div>

        <div className="hidden max-md:block mt-6">
          <ProcessSteps />
        </div>
      </div>

      {/* Case Studies & Impact Stories  */}
      <div className="w-full bg-[var(--beige)]/30">
        <div className="max-w-7xl mx-auto py-30 space-y-12 max-md:space-y-0">
          <h2 className="font-serif text-4xl max-md:text-3xl text-center font-medium text-[var(--greenShade)]">
            Case Studies & Impact Stories
          </h2>

          <div className="max-md:hidden">
            <CardStack3></CardStack3>
          </div>

          <div className="max-md:block hidden">
            <div className="relative h-auto px-4 space-y-6">
              {/* Card 1 */}
              <div className="relative mx-auto w-3/4 max-md:w-[100%] bg-[var(--greenShade)] rounded-xl shadow-xl p-10">
                <h2 className="text-2xl font-bold font-open text-white">
                  01. AquaFree™ - Revolutionizing Dyeing with Less Water
                </h2>

                <div className="flex flex-row max-md:flex-col gap-12 mt-6">
                  <div className="w-[50%] max-md:w-[100%] flex flex-col gap-4">
                    <p className="font-medium text-lg font-open text-white mb-2">
                      Conventional dyeing requires 80-120 liters of water per
                      kilogram of fabric. Multiply that across millions of
                      meters, and the scale of water depletion is staggering.
                    </p>

                    <div>
                      <p className="font-medium text-lg font-open text-white mb-2">
                        <span className="font-semibold underline underline-offset-2">
                          Our answer:
                        </span>{" "}
                        AquaFree™ - our proprietary waterless dyeing technology.
                      </p>

                      <div className="w-full flex flex-col justify-center gap-2 pl-4">
                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Water Savings:
                            </span>{" "}
                            Up to 90% less water usage.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Lower Chemical Load:
                            </span>{" "}
                            Uses 30% fewer auxiliaries.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Superior Results:
                            </span>{" "}
                            Uniform shade penetration, improved fastness,
                            reduced re-dyeing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] max-md:w-[100%]">
                    {/* section 2 */}

                    <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                      <div className="absolute top-2/5 -left-5 -rotate-90">
                        <IoTriangleSharp className="text-6xl text-white" />
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                        Impact (2019-2024):
                      </h3>

                      {/* Bullet points */}
                      <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                        <li>120+ million liters of water saved.</li>
                        <li>30% reduction in effluent volume.</li>
                        <li>
                          Equivalent to supplying safe drinking water to 50,000
                          people for an entire year.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                  <p className="text-white text-xl font-openleading-relaxed">
                    This is not just a technology - it's a lifeline for
                    water-scarce regions.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative mx-auto w-3/4 max-md:w-[100%] bg-[var(--deepOcean)] rounded-xl shadow-xl p-10">
                <h2 className="text-2xl font-bold font-open text-white text-center">
                  02. Zero Liquid Discharge (ZLD) - Closing the Water Loop
                </h2>

                <div className="flex flex-row max-md:flex-col gap-12 mt-6">
                  <div className="w-[50%] max-md:w-[100%]">
                    {/* section 1 */}

                    <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                      <div className="absolute top-2/5 -right-5 rotate-90">
                        <IoTriangleSharp className="text-6xl text-white" />
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                        Impact (2024):
                      </h3>

                      {/* Bullet points */}
                      <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                        <li>95 million liters of water recycled annually.</li>
                        <li>100% effluents treated before reuse.</li>
                        <li>Zero discharge into natural water bodies.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-[50%] max-md:w-[100%] flex flex-col gap-4">
                    <p className="font-medium text-lg font-open text-white mb-2">
                      Across India, rivers have turned black or red due to
                      textile effluents. Communities downstream suffer.
                    </p>

                    <div>
                      <p className="font-medium text-lg font-open text-white mb-2">
                        At Just Textiles, we invested in a complete ZLD
                        ecosystem, including:
                      </p>

                      <div className="w-full flex flex-col justify-center gap-2 pl-4">
                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Reverse Osmosis (RO):
                            </span>{" "}
                            Recovers 85-90% of process water.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Multi-Effect Evaporator (MEE):
                            </span>{" "}
                            Concentrates effluents, reducing waste volume.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Agitated Thin Film Dryer (ATFD):
                            </span>{" "}
                            Converts effluent salts into reusable solid form.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                  <p className="text-white text-xl font-openleading-relaxed">
                    We became one of the few units in Maharashtra to receive
                    formal MPCB consent for ZLD, setting a benchmark for the
                    industry.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative mx-auto w-3/4 max-md:w-[100%] bg-[var(--greenShade)] rounded-xl shadow-xl p-10">
                <h2 className="text-2xl font-bold font-open text-white">
                  03. Renewable Energy - Powering Progress Responsibly
                </h2>

                <div className="flex flex-row max-md:flex-col gap-12 mt-6">
                  <div className="w-[50%] max-md:w-[100%] flex flex-col gap-4">
                    <div>
                      <p className="font-medium text-lg font-open text-white mb-2">
                        The textile sector has traditionally run on coal and
                        heavy oils. We wanted to change that.
                      </p>

                      <div className="w-full flex flex-col justify-center gap-2 pl-4">
                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Solar Installations:
                            </span>{" "}
                            Panels across factory rooftops now generate 25% of
                            our electricity.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              Agro-Based Boilers:
                            </span>{" "}
                            Instead of coal, we use rice husk, groundnut shells,
                            and other residues.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            <span className="font-semibold">
                              CO₂ Reduction:
                            </span>{" "}
                            Our switch to renewable sources has cut 18,000 tons
                            of CO₂ emissions annually.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] max-md:w-[100%]">
                    {/* section 2 */}

                    <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                      <div className="absolute top-2/5 -left-5 -rotate-90">
                        <IoTriangleSharp className="text-6xl text-white" />
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                        Impact Equivalent:
                      </h3>

                      {/* Bullet points */}
                      <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                        <li>That's like planting 300,000 trees every year.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                  <p className="text-white text-xl font-openleading-relaxed">
                    This shift not only reduces our footprint but also creates a
                    market for agricultural waste — putting extra income in
                    farmer's hands.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative mx-auto w-3/4 max-md:w-[100%] bg-[var(--deepOcean)] rounded-xl shadow-xl p-10">
                <h2 className="text-2xl font-bold font-open text-white text-right">
                  04. Supporting Farmers & Communities
                </h2>

                <div className="flex flex-row max-md:flex-col gap-12 mt-6">
                  <div className="w-[50%] max-md:w-[100%]">
                    {/* section 1 */}

                    <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                      <div className="absolute top-2/5 -right-5 rotate-90">
                        <IoTriangleSharp className="text-6xl text-white" />
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                        Impact (2024):
                      </h3>

                      {/* Bullet points */}
                      <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                        <li>
                          2,500 farmers supported through agro-waste
                          procurement.
                        </li>
                        <li>
                          Reduced regional air pollution load by cutting open
                          burning.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-[50%] max-md:w-[100%] flex flex-col gap-4">
                    <p className="font-medium text-lg font-open text-white mb-2">
                      When farmers harvest crops, residues like husks and shells
                      are often burned, adding to India's air pollution crisis.
                      We decided to put that waste to use.
                    </p>

                    <div>
                      <p className="font-medium text-lg font-open text-white mb-2">
                        By sourcing agro-residues for our boilers, we:
                      </p>

                      <div className="w-full flex flex-col justify-center gap-2 pl-4">
                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Prevent stubble burning.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Provide farmers with extra income.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Keep energy costs stable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-[50%] max-md:w-[100%] flex flex-col gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white font-open">
                        Towards Circularity & Recycling
                      </h3>

                      <p className="font-medium text-lg font-open text-white mb-2">
                        We believe the future of textiles is circular - fabrics
                        must be designed for reuse, recycling, and regeneration.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-lg font-open text-white mb-2">
                        Our initiatives include:
                      </p>

                      <div className="w-full flex flex-col justify-center gap-2 pl-4">
                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Recycling cutting waste into usable fibers.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Pilots with recycled polyester (rPET) blends.
                          </p>
                        </div>

                        <div className="flex flex-row gap-4">
                          <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                          <p className="font-medium text-base font-open text-white leading-snug">
                            Research into bio-based fabrics and natural dyes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 border-l-2 border-gray-300 mt-10">
                    <p className="text-white text-xl font-openleading-relaxed">
                      Our circular vision ensures we're not just reducing impact
                      but actively closing the loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics & Infographics  */}
      <div className="bg-[var(--grayish)]">
        <div className="max-w-7xl mx-auto py-20 max-md:px-4">
          <h2 className="text-white text-center text-4xl max-md:text-3xl font-serif font-medium">
            Success Metrics & Infographics
          </h2>
          <p className="text-gray-200 text-xl font-semibold font-open mt-10 text-center">
            Our sustainability journey is backed by measurable results.
          </p>

          <div className="mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-8 w-[80%] mx-auto">
            {/* Water Saved  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <FaHandHoldingWater className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                Water Saved
              </h3>

              <CountUp
                from={0}
                to={215}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />

              <p className="text-[var(--bodyContent)] font-semibold">
                million liters (2019-2024).
              </p>
            </div>

            {/* CO₂ Reduction  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <FaLeaf className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                CO₂ Reduction
              </h3>

              <CountUp
                from={0}
                to={22500}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />

              <p className="text-[var(--bodyContent)] font-semibold">tons.</p>
            </div>

            {/* Renewable Energy Share  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <BsLightningCharge className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                Renewable Energy Share
              </h3>

              <div className="text-[var(--bodyContent)] text-3xl font-bold">
                <CountUp
                  from={0}
                  to={42}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className="">%</span>
              </div>

              <p className="text-[var(--bodyContent)] font-semibold">
                of operations.
              </p>
            </div>

            {/* Farmers Supported  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <GiFarmer className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                Farmers Supported
              </h3>

              <CountUp
                from={0}
                to={2500}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />

              <p className="text-[var(--bodyContent)] font-semibold">
                annually.
              </p>
            </div>

            {/* Direct Employment  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <FaUserTie className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                Direct Employment
              </h3>

              <div className="text-[var(--bodyContent)] text-3xl font-bold">
                <CountUp
                  from={0}
                  to={1200}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className="">+</span>
              </div>

              <p className="text-[var(--bodyContent)] max-md:text-center font-semibold">
                jobs in safe, compliant conditions.
              </p>
            </div>

            {/* Awards  */}
            <div className="bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open">
              <div>
                <LiaAwardSolid className="text-3xl text-[var(--deepOcean)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--deepOcean)]">
                Awards
              </h3>

              <div className="text-[var(--bodyContent)] text-3xl font-bold">
                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className="">+</span>
              </div>

              <p className="text-[var(--bodyContent)] max-md:text-center font-semibold">
                national & international recognitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
