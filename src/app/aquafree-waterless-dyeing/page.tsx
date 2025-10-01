import React from "react";
import Navbar2 from "@/components/Navbar2";
import AquaFreeDyeingSection from "@/components/AquaFreeDyeingSection";
import AquaFreeTechnicalProcess from "@/components/AquaFreeTechnicalProcess";

const page = () => {
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


      <AquaFreeDyeingSection/>

      <AquaFreeTechnicalProcess/>




   
    </div>
  );
};

export default page;
