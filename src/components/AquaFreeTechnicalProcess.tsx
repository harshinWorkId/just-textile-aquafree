import React from "react";
import FuzzyText from "@/utils/FuzzyText";
import Image from "next/image";

const AquaFreeTechnicalProcess = () => {
  return (
    <section className="bg-[var(--beige)]/20 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* heading and description  */}
        <div className="grid grid-cols-2 gap-12">
          <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-6 leading-snug">
            The AquaFree Technical Process: Key Stages
          </h2>

          <div className="text-justify text-lg font-open text-[var(--bodyContent)]">
            <p>
              AquaFree revolutionizes the way textiles are processed. Where
              conventional methods require 12 - 14 separate bath steps, AquaFree
              delivers the same or better quality in far fewer stages. The
              result is a cleaner, faster, and more sustainable approach that
              conserves water, reduces energy consumption, and lowers chemical
              loads - without compromising fabric performance.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-14 my-8 ">
          {/* Batch Preparation  */}
          <div className="w-full flex flex-row gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative z-20 -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step1.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12 z-20">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Batch Preparation
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                The process begins with preparing fabric batches. Careful
                planning ensures uniform loading, consistent weight
                distribution, and correct alignment of the fabric. This stage is
                crucial because any variation here can impact quality across
                later treatments.
              </p>
            </div>

            <div className="w-[20%] relative z-20 text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                01
              </FuzzyText>
            </div>

            <div className="absolute top-[50%] -right-20 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/right-curve.png`}></Image>
            </div>

            <div className="absolute w-[92%] -bottom-10 h-[3px] bg-black"></div>
          </div>

          {/* Singeing  */}
          <div className="w-full flex flex-row-reverse gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step2.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Singeing
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                Fabric is passed through controlled flames or heated plates to
                remove protruding surface fibers. This step creates a smooth
                fabric surface, improves appearance, and ensures that subsequent
                treatments - like dyeing and printing - adhere more evenly.
              </p>
            </div>

            <div className="w-[20%] text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                02
              </FuzzyText>
            </div>

            <div className="absolute -top-[14.5%] -left-22 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/left-curve.png`}></Image>
            </div>

            <div className="absolute top-[50%] -right-34 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/right-curve.png`}></Image>
            </div>

            <div className="absolute w-[100%] left-2 -bottom-10 h-[3px] bg-black"></div>
          </div>

          {/* Jet Scour (3 Baths)  */}
          <div className="w-full flex flex-row gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step2.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Jet Scour (3 Baths)
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                Traditionally, scouring requires multiple lengthy baths to
                remove oils, waxes, dirt, and processing chemicals. AquaFree
                condenses this into just three carefully controlled baths, using
                optimized chemistry and machine settings. The outcome is a
                cleaner fabric with improved absorbency and readiness for
                bleaching, while drastically cutting water and chemical use.
              </p>
            </div>

            <div className="w-[20%] text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                03
              </FuzzyText>
            </div>

            <div className="absolute -top-[14.5%] -left-28 h-[180px] w-[120px] -z-10">
              <Image fill alt="" src={`/assets/images/left-curve.png`}></Image>
            </div>

            <div className="absolute top-[50%] -right-20 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/right-curve.png`}></Image>
            </div>

            <div className="absolute w-[92%] -bottom-10 h-[3px] bg-black"></div>
          </div>

          {/* Bleaching (3 Baths)  */}
          <div className="w-full flex flex-row-reverse gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step2.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Bleaching (3 Baths)
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                Bleaching removes natural color pigments and impurities to
                achieve the desired whiteness. Instead of the conventional
                extended process, AquaFree uses an efficient three-bath method
                that balances brightness with fabric strength. The process
                ensures the material is uniformly prepared for dyeing without
                overexposure to harsh chemicals.
              </p>
            </div>

            <div className="w-[20%] text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                04
              </FuzzyText>
            </div>


            

            <div className="absolute -top-[14.5%] -left-22 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/left-curve.png`}></Image>
            </div>

            <div className="absolute top-[50%] -right-34 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/right-curve.png`}></Image>
            </div>

            <div className="absolute w-[100%] left-2 -bottom-10 h-[3px] bg-black"></div>
          </div>

          {/*  Dyeing (1 Bath)  */}
          <div className="w-full flex flex-row gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step2.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Dyeing (1 Bath)
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                One of AquaFree's most groundbreaking steps - colors are applied
                in a single bath. Precise dyeing technology ensures uniform
                penetration, vibrant shade development, and reproducibility
                across large batches. This eliminates the multiple rounds of
                dyeing common in traditional methods, drastically reducing
                resource consumption and processing time.
              </p>
            </div>

            <div className="w-[20%] text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                05
              </FuzzyText>
            </div>


            <div className="absolute -top-[14.5%] -left-28 h-[180px] w-[120px] -z-10">
              <Image fill alt="" src={`/assets/images/left-curve.png`}></Image>
            </div>

            <div className="absolute top-[50%] -right-20 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/right-curve.png`}></Image>
            </div>

            <div className="absolute w-[92%] -bottom-10 h-[3px] bg-black"></div>
          </div>

          {/*  Neutralizing (RFF 2)  */}
          <div className="w-full flex flex-row-reverse gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 py-0 px-10 mt-6 relative h-[300px]">
            <div className="w-[40%] relative -top-5 h-[350px]">
              <div className="relative h-full ml-[10%] w-[80%] group-hover:-translate-x-[50px] transition-transform duration-800 ease-in-out">
                <Image
                  fill
                  src={`/assets/images/step2.jpg`}
                  alt=""
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="w-[40%] my-12">
              <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                Neutralizing (RFF 2)
              </h3>

              <p className="text-base text-[var(--bodyContent)]">
                The final stage involves neutralizing any residual alkali or
                oxidizing agents. AquaFree uses a Residue-Free Finishing (RFF 2)
                process that ensures the fabric is pH balanced, stable, and safe
                for subsequent finishing or garmenting. This step also enhances
                fabric longevity and wearer comfort.
              </p>
            </div>

            <div className="w-[20%] text-xl font-open text-white rounded-full h-fit my-14 py-14 px-0 bg-gradient-to-r from-[#065591] to-[#044413]">
              {/* Step 01 */}
              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                Step
              </FuzzyText>

              <FuzzyText
                baseIntensity={0.1}
                hoverIntensity={0.2}
                enableHover={true}
              >
                06
              </FuzzyText>
            </div>

            
            <div className="absolute -top-[14.5%] -left-22 h-[190px] w-[140px] -z-10">
              <Image fill alt="" src={`/assets/images/left-curve.png`}></Image>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AquaFreeTechnicalProcess;
