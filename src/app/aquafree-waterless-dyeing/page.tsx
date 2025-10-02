import React from "react";
import Navbar2 from "@/components/Navbar2";
import AquaFreeDyeingSection from "@/components/AquaFreeDyeingSection";
import AquaFreeTechnicalProcess from "@/components/AquaFreeTechnicalProcess";
// import WhyThisMatters from "@/components/WhyThisMatters";
import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
const page = () => {
  const BadgeIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );

  const workItems = [
    {
      title: "Water savings of up to 70% compared to traditional processes.",
    },
    {
      title: "Lower energy use thanks to fewer heating and drying cycles.",
    },
    {
      title:
        "Reduced chemical load leading to safer effluents and easier treatment.",
    },
    {
      title:
        "Shorter lead times, helping mills meet fast-changing fashion and retail demands..",
    },
    {
      title:
        "Consistent quality, with improved reproducibility and better shade accuracy.",
    },
  ];
  return (
    <div>
      <Navbar2 />

      <section className="w-full mt-30">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
            [The Challenge with Conventional Dyeing]
          </div>

          <p className="font-open text-xl font-semibold text-[var(--bodyContent)] text-center">
            For decades, cotton dyeing has relied heavily on salts as fixatives
            and massive volumes of water. A single ton of cotton can consume
            thousands of liters of water during dyeing and finishing. The salts,
            once discharged, create highly saline effluents that are difficult
            and costly to treat. This has long been a pain point for textile
            manufacturers and a source of criticism from environmental groups.
          </p>
        </div>
      </section>

      <AquaFreeDyeingSection />

      <AquaFreeTechnicalProcess />

      {/* Why this matters  */}
      <section className="bg-[#F9F7F3] py-20">
        <div className="container mx-auto max-w-6xl px-8">
          <div className="">
            <h2 className="text-4xl font-serif font-medium text-[var(--greenShade)]">
              Why This Matters
            </h2>
          </div>

          {/* Image Section */}
          <div className="mt-12 flex flex-row gap-12">
            <div className="relative w-[50%] h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/images/why-work-matters1.png"
                alt="Featured work portfolio"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* right section */}
            <div className="">
              <p className="text-xl font-open font-bold text-[var(--bodyContent)] leading-relaxed mb-8 border-b-2 border-gray-300">
                By condensing 12 - 14 baths into just a few, AquaFree achieves:
              </p>
              {workItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <BadgeIcon className="w-8 h-8 mb-2 text-[var(--greenShade)]" />

                    <h2 className="text-lg font-open font-medium text-[var(--bodyContent)] mb-2">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}

              <p className="text-xl font-open font-medium text-[var(--bodyContent)] leading-snug mt-8 border-t-2 border-gray-300">
                AquaFree is not just an improvement - it's a leap forward in
                sustainable textile processing.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Key Benefits of AquaFree™  */}
      <section className="bg-[var(--beige)]/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-medium text-[var(--greenShade)] leading-tight mb-12">
            Key Benefits of AquaFree™
          </h2>
          <div className="flex flex-row items-center">
            {/* --- left side */}
            <div className="w-[60%] px-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl shadow-lg border border-gray-100 font-open">
                  <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-3">
                    Water Conservation
                  </h3>
                  <p className="text-[var(--bodyContent)] font-medium text-base leading-relaxed">
                    Saves up to 70 - 80% of water compared to traditional
                    dyeing.
                  </p>
                </div>

                <div className="p-8 rounded-2xl shadow-lg border border-gray-100 font-open">
                  <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-3">
                    No Salt Dependency
                  </h3>
                  <p className="text-[var(--bodyContent)] font-medium text-base leading-relaxed">
                    Eliminates one of the most polluting aspects of cotton
                    dyeing.
                  </p>
                </div>

                <div className="p-8 rounded-2xl shadow-lg border border-gray-100 font-open">
                  <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-3">
                    Cost Efficiency
                  </h3>
                  <p className="text-[var(--bodyContent)] font-medium text-base leading-relaxed">
                    Reduced water and chemical usage lower effluent treatment
                    costs.
                  </p>
                </div>

                <div className="p-8 rounded-2xl shadow-lg border border-gray-100 font-open">
                  <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-3">
                    Vibrant Shades
                  </h3>
                  <p className="text-[var(--bodyContent)] font-medium text-base leading-relaxed">
                    Produces deeper, richer colors with improved shade
                    reproducibility.
                  </p>
                </div>

                <div className="col-span-2 items-center p-8 rounded-2xl shadow-lg border border-gray-100 font-open">
                  <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-3">
                    Eco-Friendly Footprint
                  </h3>
                  <p className="text-[var(--bodyContent)] font-medium text-base leading-relaxed">
                    Reduced load on effluent treatment plants and smaller
                    ecological impact.
                  </p>
                </div>
              </div>
            </div>

            {/* right side image section */}
            <div className="relative w-[40%] h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/key-benefits.jpg"
                alt="Colorful textile spools in a factory"
                fill
                style={{ objectFit: "cover" }}
                className="w-[80%] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <WhyThisMatters /> */}
    </div>
  );
};

export default page;
