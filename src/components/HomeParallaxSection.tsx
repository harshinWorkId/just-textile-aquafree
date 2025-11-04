// components/HeroParallaxSection.tsx
import React from 'react';
import CountUp from "./CountUp";

const HomeParallaxSection: React.FC = () => {
  return (
    <>
      {/* This is the main hero section.
        - 'min-h-screen' gives it full-screen height.
        - 'bg-cover' and 'bg-center' make the image look good.
        - 'bg-fixed' is the key! This CSS property (background-attachment: fixed)
          makes the background image stay in one place relative to the viewport,
          creating the parallax effect as you scroll.
      */}
      <section
        className="relative h-auto bg-cover bg-center bg-fixed"
        style={{
          // Replace this with your actual image path
          backgroundImage:
            "url('/assets/images/MeasurableImpactBackground.png')",
        }}
      >
        {/* Dark overlay to make the text readable, matching your image */}
        <div className="absolute inset-0 bg-blue-900/70 opacity-20" />

        {/* Content */}
        <div className="relative z-10 h-auto py-30 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl font-medium leading-tight mb-4 text-[var(--greenShade)]">
            Our Measurable Impact

          </h2>

          <div className='grid grid-cols-4 gap-8 text-[var(--bodyContent)]'>

            <div className='font-open space-y-4 border-r border-gray-800 py-0'>
              <div className='text-center text-4xl font-bold text-[var(--bodyContent)] font-serif mt-2'>
                <CountUp
                  from={0}
                  to={215}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />

                <span>M</span>

              </div>
              <p className='text-2xl font-semibold'>Liters Saved</p>
              <p className='text-lg'>Water conserved through AquaFree™ and ZLD systems since 2019
              </p>
            </div>



            <div className='font-open space-y-4 border-r border-gray-800 py-0'>
              <div className='text-center text-4xl font-bold text-[var(--bodyContent)] font-serif mt-2'>
                <CountUp
                  from={0}
                  to={22500}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />

              </div>
              <p className='text-2xl font-semibold'>Tons Reduced</p>
              <p className='text-lg'>CO₂ emissions cut through renewable energy adoption</p>
            </div>



            <div className='font-open space-y-4 border-r border-gray-800 py-0'>
              <div className='text-center text-4xl font-bold text-[var(--bodyContent)] font-serif mt-2'>
                <CountUp
                  from={0}
                  to={2500}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />

              </div>
              <p className='text-2xl font-semibold'>Farmers Supported</p>
              <p className='text-lg'>Annual agro-waste procurement creating sustainable income
              </p>
            </div>



            <div className='font-open space-y-4 border-r-0 border-gray-800 py-0'>
              <div className='text-center text-4xl font-bold text-[var(--bodyContent)] font-serif mt-2'>
                <CountUp
                  from={0}
                  to={1200}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <span>+</span>

              </div>
              <p className='text-2xl font-semibold'>Jobs Created</p>
              <p className='text-lg'>Direct employment in safe, compliant conditions</p>
            </div>



          </div>


          <p className="text-lg sm:text-xl font-open w-[95%] mx-auto text-[var(--bodyContent)] my-8 border-l text-left border-gray-800 px-4">
            " Certified Excellence: ISO 14001, OEKO-TEX Standard 100, MPCB ZLD Consent, and multiple national awards recognize our commitment to quality and sustainability.

          </p>

          {/* <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button> */}
        </div>
      </section>


    </>
  );
};

export default HomeParallaxSection;