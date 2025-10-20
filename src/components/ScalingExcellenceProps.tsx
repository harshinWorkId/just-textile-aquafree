import React from "react";

// type ScalingExcellenceProps = {};
type ScalingExcellenceProps = Record<string, never>;

const ScalingExcellence: React.FC<ScalingExcellenceProps> = () => {
  return (
    // style={{ backgroundImage: "url('/assets/images/bg1.png')" }} 
    <section className="py-12 md:py-20 font-open bg-[var(--beige)]/30 text-gray-800 relative" >
      <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:p-12 relative rounded-2xl">
       
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif max-md:text-center font-medium text-[var(--greenShade)] mb-8 md:mb-10">
          Scaling Excellence: Continuous Dyeing Capabilities
        </h2>

        {/* Introduction Paragraph */}
        <p className="text-[22px] leading-relaxed max-md:text-justify mb-12 md:mb-16">
          As demand grew from bulk buyers - particularly in exports and defense
          sectors - absolute shade consistency across millions of meters became
          non-negotiable. Our strategic expansion included multiple continuous
          dyeing ranges designed for maximum efficiency and reliability.
        </p>

        {/* Capabilities Timeline/Grid */}
        <div className="relative flex flex-col items-center mb-16 md:mb-0">
          {/* Horizontal Line for larger screens */}
          <div className="hidden md:block absolute top-[200px] left-0 right-0 h-px bg-gray-700 mx-auto w-11/12 xl:w-full"></div>

          <div className="flex flex-col md:flex-row justify-between w-full">
            {/* Capability 1 */}
            <div className="flex flex-col items-center text-center p-4 md:w-1/3 relative z-10">
              <h3 className="text-[22px] font-medium text-[var(--bodyContent)] mb-4">
                Cotton Dyeing Lines
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Optimized continuous processing for superior efficiency and
                consistent quality delivery
              </p>
              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-gray-700 font-bold text-lg`}>
                1
              </div>
            </div>

            {/* Vertical separator for mobile */}
            <div className="md:hidden w-px h-16 bg-gray-600 my-4 mx-auto"></div>

            {/* Capability 2 - Pad-Steam Technology */}
            <div className="flex flex-col items-center text-center p-4 md:w-1/3 relative z-10">
              <h3 className="text-[22px] font-medium text-[var(--bodyContent)] mb-4">
                Pad-Steam Technology
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Deep, even color penetration for cotton fabrics ensuring uniform
                quality at scale
              </p>
              <div className="flex items-center justify-center w-12 h-12 mt-7 rounded-full bg-white border-2 border-gray-300 text-gray-700 font-bold text-lg">
                2
              </div>
            </div>

            {/* Vertical separator for mobile */}
            <div className="md:hidden w-px h-16 bg-gray-600 my-4 mx-auto"></div>

            {/* Capability 3 - Polyester Capabilities (bottom for larger screens) */}
            <div className="flex flex-col items-center text-center p-4 md:w-1/3 relative z-10">
              <h3 className="text-[22px] font-medium text-[var(--bodyContent)] mb-4">
                Polyester Capabilities
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Advanced systems for synthetic fiber processing meeting global
                performance standards
              </p>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-gray-700 font-bold text-lg">
                3
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Paragraph */}
        <p className="text-xl max-md:text-justify leading-relaxed mx-auto text-[var(--bodyContent)]">
          These expansions positioned Just Textiles as a reliable supplier in
          global markets, capable of handling large orders with unwavering
          uniform quality.
        </p>
      </div>
    </section>
  );
};

export default ScalingExcellence;
