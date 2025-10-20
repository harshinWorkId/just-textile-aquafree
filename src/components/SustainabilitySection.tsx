// components/SustainabilitySection.tsx

import React from "react";
import Image from "next/image";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

// type ListItem = {
//   text: string;
// };

const sectionContent = {
  eyebrowText: "01. ABOUT US",
  title: "Our Commitment to Sustainability",
  paragraph: `What truly sets Just Textiles apart is not just capacity - it is our relentless pursuit of innovation and sustainability.
              From pioneering salt-free cotton dyeing to recycling process water, we are constantly pushing the boundaries of what textile manufacturing can achieve while reducing environmental impact. Our sustainability initiatives extend throughout our production chain, from raw material selection to final packaging, ensuring we minimize our ecological footprint at every stage.`,
  listItems: [
    // { text: "Pioneering salt-free cotton dyeing" },
    { text: "Advanced water recycling processes" },
    { text: "Full production chain sustainability" },
    { text: "Minimizing ecological footprint" },
  ],
  buttonText: "View More",
  imageUrl: "/assets/images/9.jpg",
  imageAlt: "Water recycling illustration in a factory",
};

const SustainabilitySection: React.FC = () => {
  return (
    // style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    <section className="py-16 max-md:p-0" >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2 bg-white/80 overflow-hidden rounded-2xl">
        {/* Left Column: Image */}
        <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-xl max-md:hidden">
          {/* Using Next.js Image component for optimization */}
          <Image
            src={sectionContent.imageUrl}
            alt={sectionContent.imageAlt}
            width={700}
            height={500}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="px-4">


          {/* Main Title */}
          <h2 className="mt-4 text-4xl font-medium tracking-tight text-[var(--greenShade)] text-center max-md:text-2xl font-serif">
            {sectionContent.title}
          </h2>

          <div className="hidden max-md:block h-full w-[80%] relative mx-auto mt-10">

            <Image
              src={sectionContent.imageUrl}
              alt={sectionContent.imageAlt}
              width={700}
              height={500}
              layout="responsive"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Paragraph Description */}
          <p className="mt-6 text-lg leading-8 font-open text-[var(--bodyContent)] text-justify">
            {sectionContent.paragraph}
          </p>

          {/* List of points ( */}
          <ul className="mt-8 space-y-4">
            {sectionContent.listItems.map((item, index) => (
              <li key={index} className="flex items-start font-open">
                <CheckCircleIcon
                  className="h-6 w-6 flex-shrink-0 text-[var(--forestGreen)] mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-[var(--bodyContent)]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
