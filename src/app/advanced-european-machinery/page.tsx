import React from "react";
import Navbar2 from "@/components/Navbar2";
import ExpandableCard from "@/components/ExpandableCard";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <Navbar2></Navbar2>

      <section className="bg-white mt-30">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold font-open text-[var(--bodyContent)] uppercase tracking-wide">
              Technology & Innovation
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-medium font-serif leading-tight text-[var(--greenShade)]">
              Advanced European Machinery
            </h2>

            {/* Subtext */}

            <div className="space-y-4 text-[var(--bodyContent)] text-lg font-medium font-open mt-4 text-justify">
              <p className="">
                In textiles, machinery is more than steel and electronics-it's
                the foundation of quality, speed, and sustainability. At Just
                Textiles, we have built our reputation on one clear principle:
                to deliver fabrics that match global expectations, you need
                machines that set global standards.
              </p>

              <p className="">
                That's why we've consistently invested in cutting-edge European
                textile machinery, each installation carefully chosen for its
                efficiency, precision, and eco-performance. This commitment
                allows us to deliver large-scale orders without compromise,
                whether it's for global fashion retailers, high-performance
                sportswear brands, or defense and institutional buyers where
                consistency is mission critical.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="px-6 py-3 rounded-full font-open bg-[var(--deepOcean)] text-white font-semibold shadow hover:bg-[var(--deepOcean)]/90 transition">
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Robot Image */}
            <Image
              src="/assets/images/advanced-european-machinery.png"
              alt="aquafree"
              width={450}
              height={500}
              className="object-contain"
            />

            {/* Experience Card */}
            <div className="absolute bottom-6 left-0 bg-[var(--deepOcean)] text-white px-6 py-10 rounded-lg shadow-lg w-[70%]">
              {/* <h3 className="text-4xl font-bold text-blue-400">12+</h3>
              <p className="font-semibold mt-1">Years Of Experience</p> */}
              <p className="text-xl mt-2 text-white flex gap-4">
                <span>
                  <FaQuoteLeft />
                </span>
                Every machine inside our plant is more than just equipment-it is
                part of a system that guarantees uniformity, savings on
                resources, and sustainable production at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-4xl font-medium text-[var(--greenShade)] group-hover:text-white font-serif text-center my-12">
        Our Key Installations
      </h2>

      <ExpandableCard
        id={1}
        title="Greige Fabric Preparation"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Before fabrics can undergo chemical or mechanical treatment, they
            must be opened, aligned, and prepared in a uniform way. Our batching
            machines, fabric openers, and handling systems ensure smooth
            preparation.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Before fabrics can undergo chemical or mechanical treatment, they
              must be opened, aligned, and prepared in a uniform way. Our
              batching machines, fabric openers, and handling systems ensure
              smooth preparation.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Batching machines unwind and rewind greige fabric rolls into
                  uniform lots, creating continuous batches that run seamlessly
                  on processing machines.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Fabric openers remove folds, creases, and entanglements,
                  preventing uneven absorption later.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Trolleys, A-frames, and horse-shoe carriers move heavy rolls
                  across departments without damage.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Pallet systems improve bulk storage, minimizing contamination
                  from the floor.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: A poorly prepared fabric at this stage can cause
              shade variation, defects, or rejections downstream. With our
              system, every batch enters pretreatment in perfect alignment,
              ready for consistent results.
            </p>
          </div>
        }
        extraContent={""}
      />

      <ExpandableCard
        id={2}
        title="Singeing + Desizing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Surface cleaning is achieved using Ostoff singeing machines with
            desizing compartments, along with Ashima's continuous pretreatment
            line.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Surface cleaning is achieved using Ostoff singeing machines with
              desizing compartments, along with Ashima's continuous pretreatment
              line.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Singeing exposes fabric to controlled flames, burning off
                  protruding fibers. This ensures a smooth surface, reducing
                  pilling and improving print sharpness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Desizing removes starch and chemicals applied during weaving.
                  Without desizing, dyes and finishes cannot penetrate properly.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Integrated singeing + desizing saves time, steam, and
                  manpower, while delivering a cleaner, more absorbent fabric.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  The Ashima continuous range combines singeing, desizing,
                  scouring, and bleaching into one streamlined operation.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Fabrics are cleaner, smoother, and more absorbent,
              resulting in brighter prints, even dyeing, and durable finishes —
              qualities that global buyers expect.
            </p>
          </div>
        }
        extraContent={""}
      />

      <ExpandableCard
        id={3}
        title="Scouring (Jet Scour)"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Scouring removes natural oils, waxes, and dirt that prevent uniform
            dyeing. Our system combines Menzel rope washing ranges with Monforts
            weight reduction machines for synthetics.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p className="flex flex-row gap-3">
              <FaCircleArrowRight className="font-open text-white text-4xl -mt-1" />
              Scouring removes natural oils, waxes, and dirt that prevent
              uniform dyeing. Our system combines Menzel rope washing ranges
              with Monforts weight reduction machines for synthetics.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Rope washing allows large batches to be washed continuously,
                  reducing creases and mechanical strain on fabrics.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Scouring agents break down natural impurities and residual
                  lubricants from weaving.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Weight reduction machines (WR) carefully hydrolyze polyester,
                  reducing GSM while giving fabrics a softer, silkier drape.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Continuous processing saves water and ensures reproducible
                  results lot after lot.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Fabrics become uniformly absorbent, clean, and
              bright. For synthetics, the WR machine allows us to deliver
              lighter, fashion-friendly polyester with premium feel, a key
              demand for lifestyle brands.
            </p>
          </div>
        }
        extraContent={
          <div className="space-y-4">
            <p className="text-white flex flex-row gap-3">
              <FaCircleArrowRight className="text-2xl" />
              Continuous Scouring & Bleaching Machine for Knits
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  We are proud to house the first-of-its-kind continuous
                  scouring and bleaching machine for knits in India.
                  Traditionally, knits were processed in batch systems,
                  consuming high volumes of water, steam, and energy. Our
                  continuous line has changed the game:
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Prepares knitted fabrics uniformly for subsequent dyeing and
                  finishing.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Cuts down processing time significantly compared to batch
                  systems.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Reduces water and energy usage while ensuring consistent
                  brightness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Delivers softer, cleaner knits that absorb dye more
                  effectively.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Knits processed on this system have superior
              whiteness, dye uptake, and hand feel, setting a new benchmark for
              both fashion and functional wear.
            </p>
          </div>
        }
      />

      <ExpandableCard
        id={4}
        title="Mercerizing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Our Swastik chainless merceriser chemically modifies cotton to
            improve its quality and performance.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Caustic soda treatment under tension swells the cotton fibers,
              increasing dye affinity and luster.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Chainless technology eliminates stress marks and distortion
                  that older mercerising machines often caused..
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Fabrics gain silk-like sheen, improved tensile strength, and
                  dimensional stability.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Dye uptake improves, resulting in brighter shades with
                  superior fastness.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Mercerized cotton is a global benchmark of premium
              quality. It elevates shirtings, dress fabrics, and high-fashion
              cottons into the luxury category, meeting the expectations of
              international buyers.
            </p>
          </div>
        }
        extraContent={""}
      />

      <section className="bg-white py-16 sm:py-24 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-row gap-12">
            <p className="w-full text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
              Special Finishing Lines
            </p>

            <h3 className="text-xl font-boldfont-open text-[var(--bodyContent)] leading-tight sm:leading-tight mb-8">
              Today's textiles are more than just fabrics-they are performance
              materials. At Just Textiles, we've invested in special finishing
              lines that transform ordinary fabrics into value-added products
              tailored to end-use requirements.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-16 items-center relative">
            {/* left side */}
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-l-[250px] rounded-t-[250px] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/why-work-matters1.png"
                  alt="Engineer working with a robotic arm in a modern facility"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* right side */}
            <div className="text-left">
              {/* <p className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
                Special Finishing Lines
              </p>

              <h3 className="text-xl font-boldfont-open text-[var(--bodyContent)] leading-tight sm:leading-tight mb-8">
                Today's textiles are more than just fabrics-they are performance
                materials. At Just Textiles, we've invested in special finishing
                lines that transform ordinary fabrics into value-added products
                tailored to end-use requirements.
              </h3> */}

              <div className="">
                <p className="text-[var(--deepOcean)] text-2xl font-open font-semibold leading-relaxed">
                  Our capabilities include:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8 font-open text-justify">
                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif">01</span>
                    Antimicrobial Finishes
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Fabrics that stay fresh for longer, ideal for healthcare,
                    sportswear, and uniforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">02</span>
                    Flame-Retardant Treatments
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Critical safety requirement for defense, industrial, and
                    workwear applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">03</span>
                    Moisture Management (Wicking) Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Perfect for sportswear and active lifestyles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">04</span>
                    Water & Stain Repellent Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Everyday convenience for shirtings, suiting, and casual
                    wear.
                  </p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif">05</span>
                    Wrinkle-Free & Easy-Care Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Meeting the demands of modern, low-maintenance clothing.
                  </p>
                </div>
              </div>

              <div className="-ml-6 pl-4 border-l-2 border-l-[var(--deepOcean)] border-gray-300 mt-10">
                <p className="text-[var(--bodyContent)] text-xl font-openleading-relaxed">
                  <span className="font-semibold font-open text-[var(--bodyContent)]">
                    Why it matters:{" "}
                  </span>
                  These advanced finishes make our fabrics not just
                  aesthetically superior, but also functional and
                  high-performing, giving global buyers the edge they need in
                  competitive markets.
                </p>
              </div>
            </div>
          </div>

          {/* Folding & Packing  */}
          <div className="relative w-full flex flex-row mt-12">
            <div className="w-[100%] flex justify-center max-lg:w-full">
              <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                {/* Arrow pointing to image (hidden on mobile) */}
                <div
                  className="absolute bg-white top-1/2 -translate-y-1/2 -left-4 w-0 h-0 
              border-t-[20px] border-t-transparent
              border-b-[20px] border-b-transparent
              border-r-[20px] border-r-white
              max-lg:hidden"
                ></div>

                {/* Heading */}
                <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                  Folding & Packing
                </h3>

                <p className="font-semibold text-lg font-open text-[var(--bodyContent)] mb-2">
                  Final presentation matters. Our folding and packing lines
                  ensure fabrics are delivered in perfect condition.
                </p>

                {/* Bullet points */}
                <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                  <li>
                    Enhanced wettability and absorbency for superior dye uptake
                    efficiency
                  </li>
                  <li>
                    Functional properties: antimicrobial resistance, water
                    repellency, flame retardancy
                  </li>
                  <li>
                    Dramatic energy savings by eliminating water-based finishing
                    steps
                  </li>
                  <li>
                    Compatible with cotton, polyester, viscose, and nylon fibers
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[40%] h-[400px] flex justify-center">
              {/* Blue Frame */}
              <div className="absolute top-6 left-6 w-full h-full bg-[var(--deepOcean)] rounded-md -z-10" />

              {/* Main Image */}
              <Image
                src="/assets/images/why-work-matters1.png"
                alt="Business Meeting"
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
