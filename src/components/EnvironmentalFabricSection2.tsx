// // components/EnergyFeatures.tsx
// import React from 'react';
// import Image from 'next/image';
// import { Sun, Wind, Rocket } from 'lucide-react';


// interface Feature {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// }

// const features: Feature[] = [
//   {
//     icon: Sun,
//     title: 'Green Energy Supply',
//     description: 'A significant portion of our power requirements now comes from renewable solar energy.',
//   },
//   {
//     icon: Wind,
//     title: 'Reduced Emissions',
//     description: 'Every unit of solar power offsets emissions that would otherwise come from conventional electricity.',
//   },
//   {
//     icon: Rocket,
//     title: 'Future-Focused',
//     description: 'With continuous expansion planned, our goal is to eventually transition towards a majority-renewable energy mix.',
//   },
// ];

// const EnergyFeatures = () => {
//   return (
//     <section className="bg-white py-12 mt-10 relative">


//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-6 max-w-5xl mx-auto">
//           <div className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
//             Solar Power Installations - Harnessing the Sun
//           </div>

//           {/* <p className="font-open text-xl font-semibold text-[var(--bodyContent)] text-center">
//             For decades, cotton dyeing has relied heavily on salts as fixatives
//             and massive volumes of water. A single ton of cotton can consume
//             thousands of liters of water during dyeing and finishing. The salts,
//             once discharged, create highly saline effluents that are difficult
//             and costly to treat. This has long been a pain point for textile
//             manufacturers and a source of criticism from environmental groups.
//           </p> */}
//         </div>

//         <div className="flex w-full relative mt-10">


//           <div className="relative h-full w-[50%] z-10">
//             <Image
//               src="/assets/images/why-work-matters1.png"
//               alt=""
//               width={800}
//               height={900}
//               className="h-full w-full object-cover"
//             />
//           </div>


//           <div className='bg-white relative h-full w-[50%] z-10'>

//             <div className="bg-[var(--greenShade)] w-full absolute top-30 -left-30 px-12 py-20 h-fit">
//               <div className="flex flex-col gap-10">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-5">
//                     <div className="flex-shrink-0">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#0f233a]">
//                         <feature.icon className="h-7 w-7 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white">
//                         {feature.title}
//                       </h3>
//                       <p className="mt-2 text-base text-gray-200">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>






//         </div>
//       </div>

//       <div className='absolute top-[40%] h-[300px] w-full z-0 bg-[var(--deepOcean)]'>

//       </div>

//     </section>
//   );
// };

// export default EnergyFeatures;



// ************************************************

// components/EnergyFeatures.tsx
'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Sun, Wind, Rocket } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Sun,
    title: 'Green Energy Supply',
    description:
      'A significant portion of our power requirements now comes from renewable solar energy.',
  },
  {
    icon: Wind,
    title: 'Reduced Emissions',
    description:
      'Every unit of solar power offsets emissions that would otherwise come from conventional electricity.',
  },
  {
    icon: Rocket,
    title: 'Future-Focused',
    description:
      'With continuous expansion planned, our goal is to eventually transition towards a majority-renewable energy mix.',
  },
]



const EnergyFeatures = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)


  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ['start 90%', 'start 30%'],
  })


  const xRaw = useTransform(scrollYProgress, [0, 1], [240, 0])


  const x = useSpring(xRaw, { stiffness: 40, damping: 18 })


  return (
    <section ref={sectionRef} className="bg-[#fbfdfb] py-30 max-md:py-20 mt-0 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="text-4xl max-md:text-3xl max-md:text-center font-medium font-serif text-[var(--greenShade)] text-center max-lg:text-3xl">
            Solar Power Installations - Harnessing the Sun
          </div>
        </div>

        {/* Main layout */}
        <div className="relative mt-10 flex w-full max-lg:flex-col">
          {/* Left image */}
          <div className="relative h-full w-[50%] z-10 max-lg:w-full">
            <Image
              src="/assets/images/why-work-matters1.png"
              alt="Solar and factory"
              width={800}
              height={900}
              className="h-full w-full object-cover max-lg:max-h-[420px] max-md:max-h-[320px]"
              priority
            />
          </div>

          {/* Right column (panel container) */}
          <div className="relative -top-4 h-full w-[50%] z-10 max-lg:w-full">


            <div className='h-[14rem] max-md:h-[10rem] w-auto relative'>
              <Image
                src="/assets/gifs/solarInstallationGif.gif"
                alt="Solar and factory"
                fill
                className="h-full w-full"
                priority
              />
            </div>


            <motion.div
              style={{ x }}
              transition={{ type: 'spring', stiffness: 40, damping: 5 }}
              className="bg-[var(--greenShade)] w-full absolute top-54 -left-10 px-12 py-20 h-fit
                         max-xl:top-8 max-xl:-left-8 max-lg:static max-lg:px-10 max-lg:py-14 max-md:px-6 max-md:py-8"
            >
              <div className="flex flex-col gap-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#0f233a]">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="border-b border-white/20 pb-6 last:border-none last:pb-0">
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-100/90">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Deep ocean band */}
      <div className="absolute top-[60%] h-[300px] w-full z-0 bg-[var(--deepOcean)] max-lg:top-[55%] max-md:h-[220px]" />
    </section>
  )
}

export default EnergyFeatures