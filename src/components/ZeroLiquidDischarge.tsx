import React from "react";
import { Cog6ToothIcon, FireIcon, BeakerIcon } from "@heroicons/react/24/solid";

type Service = {
  title: string;
  description: string;
  icon: React.ReactElement;
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Reverse Osmosis Plants",
    description:
      "Advanced filtration to remove contaminants and recover clean water",
    icon: (
      <BeakerIcon className="w-12 h-12 transition-colors duration-500 group-hover:text-emerald-300 text-[var(--deepOcean)]" />
    ),
  },
  {
    title: "Multi-Effect Evaporators",
    description:
      "Concentration of wastewater to minimize volume and recover additional water",
    icon: (
      <FireIcon className="w-12 h-12 transition-colors duration-500 group-hover:text-emerald-300 text-[var(--deepOcean)]" />
    ),
  },
  {
    title: "Agitated Thin Film Dryers",
    description:
      "Final processing of concentrated waste into solid form for proper disposal",
    icon: <Cog6ToothIcon className="w-12 h-12 text-emerald-500" />,
    highlight: true,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-24 relative">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-8">
        {/* Left */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif leading-snug">
            Zero Liquid Discharge: Closing the Water Loop
          </h2>
        </div>
        {/* Right */}
        <div className="max-w-md">
          <div className="py-3 px-4 border-l-2 border-[var(--skyBlue)] text-[var(--forestGreen)] font-open textStyle mb-4">
            "Not a drop of untreated water leaves the factory."
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden p-8 font-open shadow-sm transition-colors duration-500 ${
              service.highlight
                ? "bg-slate-900 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {/* Dynamic hover background for non-highlight cards */}
            {!service.highlight && (
              <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <div>{service.icon}</div>

              <h3
                className={`mt-4 text-xl font-semibold transition-colors duration-500 ${
                  service.highlight
                    ? "text-white"
                    : "textStyle2 group-hover:text-white"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`mt-3 textStyle2 transition-colors duration-500 ${
                  service.highlight
                    ? "!text-gray-300"
                    : "group-hover:text-gray-300"
                }`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
