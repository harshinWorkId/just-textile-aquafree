

import Navbar2 from "@/components/Navbar2";
import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import HomeSection5 from "@/components/HomeSection5";
import ProductionScale from '@/components/ProductionScale';
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import HomeTeamSection from "@/components/HomeTeamSection";
import TrustedByGlobalLeaders from "@/components/TrustedByGlobalLeaders";
import HomeParallaxSection from "@/components/HomeParallaxSection";
import HomeSectionPartner from "@/components/HomeSectionPartner";
import Footer from "@/components/Footer";
export default function Home() {

  const steps = [
    {
      number: "01/",
      title: "Continuous Processing",
      description:
        "Monforts, Benninger, and Menzel ranges deliver 24/7 precision",
    },
    {
      number: "02/",
      title: "Advanced Dyeing",
      description:
        "Softflow, thermosol, and pad-steam systems ensure perfect shade matching",
    },
    {
      number: "03/",
      title: "Specialty Finishing",
      description:
        "Stenters, calenders, and compactors add performance and durability",
    },
    {
      number: "04/",
      title: "Quality Control",
      description:
        "In-house spectrophotometry and fastness testing at every stage",
    },
  ];


  return (
    // style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    <div className="relative bg-fixed bg-cover bg-center bg" >
      <Navbar2 />



      <HomeSection1></HomeSection1>
      <HomeSection2></HomeSection2>
      <HomeSection3></HomeSection3>
      <HomeSection4></HomeSection4>
      <HomeSection5></HomeSection5>

      {/* Production Scale That Delivers  */}
      <div className='h-[24rem] max-md:h-full max-md:px-4 w-full relative max-md:py-12 bg-[var(--grayish)]/30'>

        <div className="max-w-7xl mx-auto h-[50%] relative top-10 max-md:top-0 max-md:mb-6">
          <h3 className='text-center font-serif font-medium text-4xl max-md:text-3xl text-[var(--greenShade)]'>Production Scale That Delivers</h3>
        </div>


        <div className='w-full h-[50%] max-md:hidden bg-[var(--grayish)]'></div>

        <div className='absolute max-md:hidden top-[20%] max-md:h-full w-full'>
          <ProductionScale />

        </div>

        <div className='hidden max-md:block'>

          <ProductionScale />
        </div>



      </div>

      {/* European Technology Excellence */}
      <section className="bg-[#fdf6ec] py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center gap-12 px-6 max-lg:grid-cols-1">
          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl max-md:text-3xl max-md:text-center font-medium text-[var(--greenShade)] mb-8 font-serif">
              European Technology Excellence

            </h2>


            <div className="relative hidden w-full h-[16rem] max-md:block mb-8">
              <Image
                src="/assets/images/beyond-manufacturing.png" // replace with your image path
                alt="Textile Work"
                fill
                className="object-cover rounded-sm"
              />
            </div>


            <p className="text-xl text-[var(--bodyContent)] max-md:text-justify font-open mb-8">Our investment in cutting-edge European machinery sets us apart in quality, speed, and sustainability.
            </p>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group border-b border-gray-300 pb-4 flex gap-6 items-start"
                >
                  <div className="text-4xl transform transition-transform duration-500 ease-in-out font-bold text-[var(--bodyContent)] font-serif min-w-[70px]">
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

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[550px] max-lg:h-[400px] max-md:hidden">
            <Image
              src="/assets/images/beyond-manufacturing.png" // replace with your image path
              alt="Textile Work"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>


        {/* Environmental Leadership  */}
        <div>

          <div className="py-0 mt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto ">
              <h2 className="text-4xl max-md:text-3xl text-center font-medium text-[var(--greenShade)] mb-8 max-md:my-8 font-serif">
                Environmental Leadership
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-0">

                <FeatureCard
                  number="01"
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5 4v-4l2-2 2 2v4M19 7h1m-1 4h1m-1 4h1m-5 4v-4l2-2 2 2v4"></path>
                    </svg>
                  }
                  title="Zero Liquid Discharge"
                  description="MPCB-certified ZLD system with RO, MEE, and ATFD technology recycles 87% of process water. Not a single drop leaves untreated."
                />
                <FeatureCard
                  number="02"
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  }
                  title="Renewable Energy"
                  description="Solar installations and agro-based boilers running on agricultural residue power 42% of operations, cutting 18,000 tons of CO₂ annually."
                />
                <FeatureCard
                  number="03"
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.59 6.436C3.345 6.848 2.228 9.49 4.252 12.345m8.15-4.045c-.074-.067-.15-.125-.227-.182M14 5l2 2m-2-2l-2 2m0 0l-2-2m2 2l2 2"></path>
                    </svg>
                  }
                  title="Community Impact"
                  description="Supporting 2,500+ farmers through agro-waste procurement, preventing stubble burning while creating sustainable income streams."
                />
              </div>

            </div>
          </div>

        </div>




      </section>


      <TrustedByGlobalLeaders></TrustedByGlobalLeaders>

      {/* Leadership section  */}
      <HomeTeamSection></HomeTeamSection>

      <HomeParallaxSection></HomeParallaxSection>

      {/* Partner With Industry Leaders */}
      <HomeSectionPartner></HomeSectionPartner>

      <Footer></Footer>











    </div>
  );
}
