"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const SpecialtyFabrics: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl bg-white/80 py-12 rounded-2xl mx-auto grid grid-cols-[45%_55%] px-6 max-lg:grid-cols-1 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-[90%] mx-auto h-[450px] rounded-md overflow-hidden">
          <Image
            src="/assets/images/why-work-matters1.png" // replace with your actual image
            alt="Specialty Fabrics"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-6">
          <h2 className="text-4xl w-full font-medium text-[var(--greenShade)] mb-6 font-serif">
            Mastering Specialty Fabrics: Blends and Lycra Expertise
          </h2>

          <p className="text-[var(--bodyContent)] text-lg mb-4 leading-relaxed">
            The rise of performance wear and premium shirting created
            unprecedented demand for blended fabrics, particularly those
            containing Lycra. Processing these advanced materials requires
            absolute precision - small deviations can significantly impact
            stretch, comfort, and durability.
          </p>

          <p className="text-[var(--bodyContent)] text-lg mb-6 leading-relaxed">
            Our dedicated R&D and operations teams developed specialized
            expertise in handling Lycra and blended fabrics, ensuring buyers
            receive products that exceed both technical specifications and
            aesthetic standards.
          </p>

          {/* Key Market Applications */}
          <h3 className="text-xl font-semibold text-[var(--bodyContent)] mb-4">
            Key Market Applications:
          </h3>
          <ul className="space-y-3">
            {[
              "Premium formalwear requiring superior drape and comfort",
              "High-performance sportswear demanding flexibility and durability",
              "Defense textiles where performance cannot be compromised",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-[var(--greenShade)] mt-1 w-5 h-5" />
                <span className="text-[var(--bodyContent)] text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyFabrics;
