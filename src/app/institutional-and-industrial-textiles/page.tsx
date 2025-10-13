import React from "react";
import Navbar2 from "@/components/Navbar2";
import CardStack2 from "@/components/CardStack2";
import { FaShieldAlt, FaIndustry, FaTools } from "react-icons/fa";
const page = () => {
  return (
    <div>
      <Navbar2 />

      <section className="container mx-auto py-20 bg-white mt-20">
        <div className="flex items-start gap-8">
          <div className="w-1/2 sticky top-40 self-start px-6">
            <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
              Built for Demanding Environments
            </h2>
            <p className="text-[var(--bodyContent)] font-open text-xl font-semibold text-center mt-4">
              Institutions and industries require fabrics that do more than look
              good-they must perform under pressure, comply with regulations,
              and last long under heavy usage.
            </p>

            <div className="font-open w-[80%] mx-auto mt-12 space-y-6">
              <h3 className="font-bold text-[var(--deepOcean)] text-2xl">
                Differentiation Points:
              </h3>

              <div className="space-y-6">
                <div className="text-[var(--bodyContent)] space-y-1">
                  <p className="flex gap-3 text-xl text-[var(--bodyContent)] font-semibold">
                    <FaShieldAlt className="mt-1 text-[var(--greenShade)] font-open" />{" "}
                    Compliance-First
                  </p>
                  <p className="text-lg pl-8">
                    Fabrics meet EN, ISO, and regional safety standards.
                  </p>
                </div>

                <div className="text-[var(--bodyContent)] space-y-1">
                  <p className="flex gap-3 text-xl text-[var(--bodyContent)] font-semibold">
                    <FaIndustry className="mt-1 text-[var(--greenShade)] font-open" />{" "}
                    Heavy-Duty Durability
                  </p>
                  <p className="text-lg pl-8">
                    Designed for hundreds of cycles in industrial laundry.
                  </p>
                </div>

                <div className="text-[var(--bodyContent)] space-y-1">
                  <p className="flex gap-3 text-xl text-[var(--bodyContent)] font-semibold">
                    <FaTools className="mt-1 text-[var(--greenShade)] font-open" />{" "}
                    Tailored Solutions
                  </p>
                  <p className="text-lg pl-8">
                  Custom specifications for defense, healthcare, and transport sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-auto -mt-40">
            <CardStack2 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
