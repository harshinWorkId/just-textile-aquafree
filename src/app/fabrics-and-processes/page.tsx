import React from "react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
// import ScrollStack, { ScrollStackItem } from "@/utils/ScrollStack";
import { FaCheckCircle } from "react-icons/fa";
// import ExpandableContent from "@/components/ExpandableContent";
import FabricsSection from "@/components/FabricsSection";
import MetaBalls from "@/utils/MetaBalls";

const page = () => {
  //   const content = [
  //     {
  //       Applications:
  //         "Apparel, shirting, trousers, home textiles (bed linen, upholstery), and industrial fabrics.",
  //     },
  //     {
  //       "Processing Requirements":
  //         "Cotton fibers contain natural impurities like waxes, oils, and pectins. Effective pretreatment is essential—this includes singeing to remove protruding fibers, desizing to eliminate starch, scouring for impurities, and bleaching for whiteness.",
  //     },

  //     {
  //       "Advanced Step - Mercerizing":
  //         "We use a Swastik Chainless Merceriser to improve luster, tensile strength, and dye affinity. Mercerized cotton not only looks more refined but also retains dyes more evenly.",
  //     },

  //     {
  //       "Dyeing Approach":
  //         "Reactive dyeing is the primary method for cotton, as it delivers brilliant colors with high wash fastness. Our softflow, jigger, and pad-dyeing machines allow us to achieve precision shades across small and large lots.",
  //     },

  //     {
  //       Result:
  //         "Fabrics that are bright, durable, and dimensionally stable, suitable for both fashion and utility.",
  //     },
  //   ];

  // const content = [
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Applications:</strong> Apparel, shirting, trousers, home
  //           textiles.
  //         </div>
  //       </>
  //     ),
  //     showInShort: true, // visible even before "Read More"
  //   },
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Processing Requirements:</strong> Pretreatment includes
  //           singeing, desizing, scouring, bleaching.
  //         </div>
  //       </>
  //     ),
  //     showInShort: true,
  //   },
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Advanced Step - Mercerizing:</strong> Improves luster,
  //           tensile strength, and dye affinity.
  //         </div>
  //       </>
  //     ),
  //     showInShort: false, // only visible after "Read More"
  //   },
  // ];

  // const myContent = [
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Applications:</strong> Apparel, shirting, trousers, home
  //           textiles.
  //         </div>
  //       </>
  //     ),
  //     showInShort: true,
  //   },
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Processing:</strong> Pretreatment includes singeing,
  //           desizing, scouring, bleaching.
  //         </div>
  //       </>
  //     ),
  //     showInShort: true,
  //   },
  //   {
  //     jsx: (
  //       <>
  //         <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
  //         <div>
  //           <strong>Advanced Step:</strong> Mercerizing improves luster, tensile
  //           strength, and dye affinity.
  //         </div>
  //       </>
  //     ),
  //     showInShort: false, // Only after "Read More"
  //   },
  // ];

  return (
    <div>
      <Navbar2></Navbar2>

      <section className="max-w-7xl mx-auto px-12 max-md:w-full max-md:px-4 py-0 flex flex-col lg:flex-row items-center justify-between gap-12 mt-30">
        {/* Left - Image with Blue Border Effect */}
        <div className="w-1/2 max-md:w-full relative flex justify-center">
          <div className="absolute top-6 left-6 w-[90%] h-[90%] bg-[var(--deepOcean)] -z-10 rounded-md"></div>
          <div className="w-full max-w-md max-md:w-[80%] bg-red-500 h-[28rem] max-md:h-[16rem] relative rounded-md shadow-lg overflow-hidden">
            <Image
              src="/assets/images/why-work-matters1.png" // Place your image in public folder
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-1/2 max-md:w-full text-left relative">
          <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-6 leading-snug font-serif">
            Fabrics We Specialize In
          </h2>
          <p className="text-[var(--bodyContent)] font-open text-lg text-justify mb-6">
            Our plant is built for versatility and precision. With a wide range
            of machinery and advanced process integration, we are capable of
            handling both natural fibers and synthetic man-made fibers with
            equal expertise. Each fabric type requires a carefully balanced
            sequence of pretreatment, dyeing, and finishing. By leveraging
            specialized machinery and optimized chemistry, we ensure that every
            batch achieves the highest standards of shade consistency,
            durability, and performance.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 flex flex-row flex-wrap gap-x-12 gap-y-4">
            {[
              "Cotton",
              "Viscose",
              "Polyester",
              "Nylon (Up to 80 GSM)",
              "Blends & Lycra Processing",
              "Cotton & Blends",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex flex-row items-start gap-3 font-open text-lg"
              >
                <FaCheckCircle className="text-[var(--greenShade)] w-6 h-6 mt-0 flex-shrink-0" />
                <span className="text-gray-700 max-w-fit font-semibold">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute -top-14 -right-10">
            <MetaBalls
              color="#044413"
              cursorBallColor="#044413"
              cursorBallSize={2}
              ballCount={15}
              animationSize={50}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </div>
        </div>
      </section>

      {/* cotton  */}
      {/* <section className="max-w-7xl bg-black mx-auto px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 mt-20">
        
        <div className="lg:w-1/2 relative flex justify-center">
        
          <div className="w-full max-w-md h-[28rem] relative rounded-md shadow-lg overflow-hidden">
            <Image
              src="/assets/images/why-work-matters1.png" // Place your image in public folder
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

      
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-6 leading-snug font-serif">
            Cotton
          </h2>
          <p className="text-[var(--bodyContent)] font-open text-lg text-justify mb-6">
            Cotton remains the backbone of global textiles, and it is also the
            most widely processed fabric in our plant. From lightweight shirting
            to heavy-duty industrial fabrics, cotton accounts for a significant
            portion of our production.
          </p>

         
          <div className="space-y-4 flex flex-row flex-wrap gap-6">
            {content.map((item, idx) => {
              const [title, description] = Object.entries(item)[0];
              return (
                <div
                  key={idx}
                  className="flex flex-row items-start gap-3 font-open text-lg"
                >
                  <FaCheckCircle className="text-[var(--greenShade)] mt-1 flex-shrink-0" />
                  <div className="text-[var(--bodyContent)]">
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-justify">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* <ExpandableContent
        title="Cotton Fabric Processing"
        description="Cotton requires multiple finishing processes to enhance quality and usability."
        content={myContent}
        imageUrl="/images/cotton.jpg"
      /> */}

      <FabricsSection />
    </div>
  );
};

export default page;
