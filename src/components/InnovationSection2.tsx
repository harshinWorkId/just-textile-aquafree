// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// type Step = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// };

// const steps: Step[] = [
//   {
//     id: 1,
//     title: "Spectrophotometers & Color-Matching Systems",
//     description:
//       "guaranteeing shade accuracy and consistency in bulk orders.",
//     image: "/assets/images/Impact1.jpg",
//   },
//   {
//     id: 2,
//     title: "Fastness Testing Equipment",
//     description:
//       "verifying wash, rub, and light resistance for global standards.",
//     image: "/assets/images/Impact2.jpg",
//   },
//   {
//     id: 3,
//     title: "Performance Testing",
//     description:
//       "setups for antimicrobial efficiency, moisture management, and technical fabric behavior.",
//     image: "/assets/images/Impact3.jpg",
//   },
//   {
//     id: 4,
//     title: "Effluent Monitoring Units",
//     description:
//       "real-time checks to ensure zero non-compliance with environmental norms.",
//     image: "/assets/images/Impact1.jpg",
//   },

// ];

// export default function HowWeWork() {
//   const [activeStep, setActiveStep] = useState<Step>(steps[0]);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY * 0.5); // smooth parallax-like movement
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif text-center mb-12">Lab Capabilities - Science Behind Every Fabric</h2>

//         {/* Main Section Layout */}
//         <div className="flex flex-row gap-12 relative font-open">

//           {/* Left - Steps */}
//           <div className="space-y-6 flex flex-col justify-center w-[60%]">
//             {steps.map((step) => (
//               <div
//                 key={step.id}
//                 onMouseEnter={() => setActiveStep(step)}
//                 onFocus={() => setActiveStep(step)}
//                 className={`flex items-center cursor-pointer transition ml-6 font-open w-[70%] mx-auto
//                 ${activeStep.id === step.id ? "text-black font-bold" : "text-gray-600"}`}
//               >
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 mr-4">
//                   {String(step.id).padStart(2, "0")}
//                 </div>
//                 <span className="uppercase text-2xl">{step.title}</span>
//               </div>
//             ))}
//           </div>

//           {/* Center - Moving Rod */}
//           <div className="hidden lg:flex items-center absolute top-0 left-0 justify-center">
//             <Image
//               src="/assets/images/machine3.png" // your rod image
//               alt="Rod"
//               width={50}
//               height={200}
//               style={{
//                 transform: `translateY(${scrollY}px)`,
//                 transition: "transform 0.2s linear",
//               }}
//               className="z-10"
//             />
//           </div>

//           {/* Right - Content */}
//           <div className="flex flex-col items-start w-[50%]">
//             <div className="w-full rounded-lg overflow-hidden shadow-md">
//               <Image
//                 src={activeStep.image}
//                 alt={activeStep.title}
//                 width={600}
//                 height={400}
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mt-4">{activeStep.title}</h3>
//             <p className="text-[var(--bodyContent)] text-xl mt-2 max-w-lg">{activeStep.description}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Spectrophotometers & Color-Matching Systems",
    description: "guaranteeing shade accuracy and consistency in bulk orders.",
    image: "/assets/images/Impact1.jpg",
  },
  {
    id: 2,
    title: "Fastness Testing Equipment",
    description:
      "verifying wash, rub, and light resistance for global standards.",
    image: "/assets/images/Impact2.jpg",
  },
  {
    id: 3,
    title: "Performance Testing",
    description:
      "setups for antimicrobial efficiency, moisture management, and technical fabric behavior.",
    image: "/assets/images/Impact3.jpg",
  },
  {
    id: 4,
    title: "Effluent Monitoring Units",
    description:
      "real-time checks to ensure zero non-compliance with environmental norms.",
    image: "/assets/images/Impact1.jpg",
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<Step>(steps[0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // useScroll gives progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <section className="bg-gray-50 py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif text-center mb-12">
          Lab Capabilities - Science Behind Every Fabric
        </h2>

        <div className="flex flex-row gap-12 font-open">
          {/* Left - Steps */}
          <div className="space-y-6 flex flex-col justify-center w-[60%]">
            {steps.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step)}
                onFocus={() => setActiveStep(step)}
                className={`flex items-center cursor-pointer transition ml-6 font-open w-[70%] mx-auto 
                ${
                  activeStep.id === step.id
                    ? "text-black font-bold"
                    : "text-gray-600"
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 mr-4">
                  {String(step.id).padStart(2, "0")}
                </div>
                <span className="uppercase text-2xl">{step.title}</span>
              </div>
            ))}
          </div>

          <motion.div
            style={{ y }}
            className="hidden lg:flex items-start absolute left-[48%] -translate-x-1/2 z-10 top-[0.2rem]"
          >
            <Image
              src="/assets/images/machine3.png"
              alt="Rod"
              width={180}
              height={300}
            />
          </motion.div>

          {/* Right - Content */}
          <div
            id="how-we-work-card"
            className="flex flex-col items-start w-[50%]"
          >
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{activeStep.title}</h3>
            <p className="text-[var(--bodyContent)] text-xl mt-2 max-w-lg">
              {activeStep.description}
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
