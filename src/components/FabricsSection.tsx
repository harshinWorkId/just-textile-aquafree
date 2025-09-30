"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

interface FabricDetails {
  id: string;
  name: string;
  title: string;
  description: string;
  features: (string | { [key: string]: string })[];
  imageUrl: string;
}

// --- 2. DEFINE CONTENT FOR EACH FABRIC ---
// Your data structure is now supported by the new type
const fabricData: FabricDetails[] = [
  // cotton
  {
    id: "cotton",
    name: "Cotton",
    title: "Cotton",
    description:
      "Cotton remains the backbone of global textiles, and it is also the most widely processed fabric in our plant. From lightweight shirting to heavy-duty industrial fabrics, cotton accounts for a significant portion of our production.",
    features: [
      {
        Applications:
          "Apparel, shirting, trousers, home textiles (bed linen, upholstery), and industrial fabrics.",
      },
      {
        "Processing Requirements":
          "Cotton fibers contain natural impurities like waxes, oils, and pectins. Effective pretreatment is essential - this includes singeing to remove protruding fibers, desizing to eliminate starch, scouring for impurities, and bleaching for whiteness.",
      },
      {
        "Advanced Step - Mercerizing":
          "We use a Swastik Chainless Merceriser to improve luster, tensile strength, and dye affinity. Mercerized cotton not only looks more refined but also retains dyes more evenly.",
      },
      {
        "Dyeing Approach":
          "Reactive dyeing is the primary method for cotton, as it delivers brilliant colors with high wash fastness. Our softflow, jigger, and pad-dyeing machines allow us to achieve precision shades across small and large lots.",
      },
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
  // viscose
  {
    id: "viscose",
    name: "Viscose",
    title: "Viscose",
    description:
      "Viscose, also called artificial silk, is valued for its luxurious hand feel and excellent drape. It is widely used in women’s fashion, blends, and premium home furnishings.",
    features: [
      {
        Applications:
          "Dresses, blouses, scarves, lining materials, and blended fabrics for fashion wear.",
      },
      {
        "Processing Requirements":
          "Viscose is prone to shrinkage and requires gentle handling during processing. Pretreatment is carried out with optimized scouring and bleaching sequences to ensure dimensional stability.",
      },
      {
        "Dyeing Approach":
          "Reactive dyes are the most common choice for viscose, delivering bright and deep shades. In certain cases, pigment dyes are used for prints and surface effects. Our dyeing ranges (softflow and jigger) are adapted to ensure controlled liquor ratios to protect the fiber structure.",
      },

      {
        Result:
          "Sharp colors, smooth finish, and fabrics with the elegance of silk but the versatility of man-made fiber.",
      },
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
  // polyester
  {
    id: "polyester",
    name: "Polyester",
    title: "Polyester",
    description:
      "Polyester is one of the most dominant synthetic fibers today due to its strength, resilience, and versatility. Our plant has dedicated infrastructure for polyester dyeing and finishing, ensuring the performance required for both fashion and technical markets.",
    features: [
      {
        Applications:
          "Sportswear, outerwear, sarees, dresses, uniforms, home furnishings, and industrial fabrics.",
      },
      {
        "Processing Requirements":
          "Polyester does not absorb dyes at normal temperatures. It requires high-temperature processing in softflow or jet dyeing machines, as well as thermosol ranges for pad-dyeing applications.",
      },
      {
        "Dyeing Approach":
          "Disperse dyes are the industry standard for polyester, ensuring vivid shades with excellent wash and rub fastness. With thermosol processing, we can produce continuous dyeing results for bulk production.",
      },
      {
        Finishing:
          "Polyester fabrics require precision finishing for stability and hand feel. Our stenters, calenders, and compaction ranges deliver wrinkle resistance, dimensional control, and smooth finishes.",
      },
      {
        Result:
          "Strong, vibrant, and long-lasting polyester fabrics that meet both fashion and functional needs.",
      },
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
  // nylon
  {
    id: "nylon",
    name: "Nylon",
    title: "Nylon (Up to 80 GSM)",
    description:
      "Nylon is a specialty fiber known for its lightweight strength and performance qualities. Although lighter in GSM (grams per square meter), nylon fabrics require careful handling and precise dyeing techniques.",
    features: [
      {
        Applications:
          "Activewear, lingerie, outerwear, hosiery, technical fabrics, and performance sportswear.",
      },
      {
        "Processing Requirements":
          "Nylon fibers are highly sensitive to heat and must be processed under controlled conditions. Pretreatment includes mild scouring and bleaching, as excessive chemicals can damage the fiber.",
      },
      {
        "Dyeing Approach":
          "Acid dyes are best suited for nylon, producing deep, bright shades with excellent fastness properties. Our softflow and jet dyeing machines are designed to maintain uniform liquor circulation, ensuring even color penetration even at low GSM weights.",
      },
      {
        Finishing:
          "Nylon fabrics are often finished with functional enhancements such as water repellency, antimicrobial properties, and UV resistance, which can also be integrated through plasma technology in the future.",
      },
      {
        Result:
          "Lightweight yet strong fabrics that meet the high-performance needs of fashion, lingerie, and sports industries.",
      },
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
  // blends & lycra processing
  {
    id: "blends & lycra processing",
    name: "Blends & Lycra Processing",
    title: "Blends & Lycra Processing",
    description:
      "Stretch fabrics like poly-cotton Lycra, viscose Lycra, and nylon Lycra require advanced handling.",
    features: [
      "Low-tension processing machines protect elasticity.",
      "Uniform dye uptake ensures vibrant colors without distortion.",
      "Perfect for suiting, shirting, and high-performance sportswear.",
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
  //   cotton & blends
  {
    id: "cotton & blends",
    name: "Cotton & Blends",
    title: "Cotton & Blends",
    description: "",
    features: [
      "Pure cotton with superior hand-feel",
      "Poly-cotton blends for wrinkle resistance",
      "Lycra-infused cotton for stretch denim and trousers",
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },

  //   functional finishes
  {
    id: "functional finishes",
    name: "Functional Finishes",
    title: "Functional Finishes",
    description:
      "Nylon is a specialty fiber known for its lightweight strength and performance qualities. Although lighter in GSM (grams per square meter), nylon fabrics require careful handling and precise dyeing techniques.",
    features: [
      {
        "Moisture Management": "For athletic wear and hot climates",
      },
      {
        "Anti-Odor Treatments": "Activewear that stays fresh longer",
      },
      {
        "Easy-Care Finish": "Low-iron fabrics for travel wear",
      },
      {
        "Anti-Microbial Protection": "Hygiene built into every thread",
      },
    ],
    imageUrl: "/assets/images/why-work-matters1.png",
  },
];

const FabricsSection: React.FC = () => {
  const [activeFabricId, setActiveFabricId] = useState<string>(
    fabricData[0].id
  );

  const activeFabric =
    fabricData.find((f) => f.id === activeFabricId) || fabricData[0];

  return (
    <section className="bg-[var(--beige)]/20 my-12">
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="flex flex-row gap-20 items-center relative">
          <div className="absolute -top-20 -left-40 w-[300px] h-[150px] opacity-20">
            <Image
              src={`/assets/images/blackStrip.png`}
              alt={"AquaFree"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* --- left column content --- */}
          <div className="lg:order-1 w-[60%]">
            <h2 className="text-4xl font-serif font-medium text-[var(--greenShade)] leading-tight mb-5">
              {activeFabric.title}
            </h2>
            <p className="text-[var(--bodyContent)] font-open text-lg text-justify leading-relaxed mb-8">
              {activeFabric.description}
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-4">
              {activeFabric.features.map((feature, index) => {
                // Checking here it's object or string
                if (typeof feature === "string") {
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheck className="w-6 h-6 bg-[var(--greenShade)] overflow-hidden rounded-full text-white p-1 flex-shrink-0" />
                      <span className="text-[var(--bodyContent)] text-justify text-lg  font-open font-medium">
                        {feature}
                      </span>
                    </li>
                  );
                } else {
                  // If it's an object, get its first key and value
                  const key = Object.keys(feature)[0];
                  const value = feature[key];
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheck className="w-7 h-7 bg-[var(--greenShade)] overflow-hidden rounded-full text-white p-2 flex-shrink-0" />
                      <span className="text-[var(--bodyContent)] text-justify text-lg font-open font-medium">
                        <strong>{key}:</strong> {value}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          {/* --- right column buttons and image --- */}
          <div className="lg:order-2 w-[40%] relative">
            <div className="flex flex-wrap gap-3 mb-6">
              {fabricData.map((fabric) => (
                <button
                  key={fabric.id}
                  onClick={() => setActiveFabricId(fabric.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ease-in-out 
                    ${
                      activeFabricId === fabric.id
                        ? "bg-[var(--deepOcean)] text-white font-open font-semibold text-base shadow-md border-2 border-white outline-2 outline-[#065591]"
                        : "bg-[var(--deepOcean)]/80 text-white hover:bg-[var(--deepOcean)] shadow-2xl"
                    }
                  `}

                  //   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#c1a37f] focus:ring-[#065591]
                >
                  {fabric.name}
                </button>
              ))}
            </div>
            <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={activeFabric.imageUrl}
                alt={activeFabric.title}
                fill
                style={{ objectFit: "cover" }}
                key={activeFabric.id}
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricsSection;
