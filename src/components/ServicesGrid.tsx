// import React from "react";

// // --- SVG Icons ---
// // You can keep these SVG components here or move them to a separate file (e.g., `src/icons/index.tsx`)
// // and import them. I'm keeping them here for a self-contained example.

// const DropletOffIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 2.69L5.64 8.78a5 5 0 1 0 7.07 7.07l3.96-3.96M16 22l-4-4-4 4M21.5 16.5l-2-2m-2-2l-2-2m-2-2l-2-2m-2-2l-2-2" />
//     <line x1="1" y1="1" x2="23" y2="23" /> {/* Represents "off" or "reduced" */}
//   </svg>
// );

// const FlaskIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 1.5L20 8v8l-8 6-8-6V8l8-6z" />
//     <path d="M12 22v-6m-4-6l4 4 4-4m-4-4v4m4-4l-4 4m-4-4l4 4" />
//     <circle cx="12" cy="11" r="4" />
//     <path d="M12 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
//   </svg>
// );

// const ChartBarIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 20V10M18 20V4M6 20V16" />
//     <path d="M3 20h18" />
//   </svg>
// );

// const WaveIcon = ({ className }: { className?: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M2 12s3-3 6-3 6 6 12 0c-6-6-6 6-12 0s-6-3-6-3" />
//     <path d="M2 16s3-3 6-3 6 6 12 0c-6-6-6 6-12 0s-6-3-6-3" />
//   </svg>
// );

// // Define the type for a single service item
// interface ServiceItem {
//   IconComponent: React.ComponentType<{ className?: string }>; // Pass the SVG component directly
//   title: string;
//   description: string;
// }

// // Data for each service card, now using SVG components
// const services: ServiceItem[] = [
//   {
//     IconComponent: DropletOffIcon,
//     title: "Reduced Effluent Load",
//     description:
//       "Minimize the environmental impact and cost associated with wastewater treatment.",
//   },
//   {
//     IconComponent: FlaskIcon,
//     title: "Easier Treatment",
//     description:
//       "Simplify and streamline the effluent treatment process, saving time and resources.",
//   },
//   {
//     IconComponent: ChartBarIcon,
//     title: "Lower COD/BOD Values",
//     description:
//       "Achieve significant reductions in Chemical and Biological Oxygen Demand in discharge.",
//   },
//   {
//     IconComponent: WaveIcon,
//     title: "Salt-Free Dyeing",
//     description:
//       "Innovate with dyeing processes that eliminate the need for high salt concentrations.",
//   },
// ];

// const ServicesGrid: React.FC = () => {
//   return (
//     <section className="">
//       <div className="container mx-auto px-8 max-w-7xl">
//         {/* Section Title */}
//         <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center mb-12 leading-tight">
//           Sustainable Chemistry: Rethinking Formulations
//         </h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`relative bg-white rounded-lg shadow-xl p-8 pb-12 overflow-hidden
//                          hover:shadow-2xl transition-shadow duration-300 ${
//                            index % 2 == 0 ? "mt-8" : "mt-0"
//                          }`}
//             >
//               {/* Blue top border effect */}
//               <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--deepOcean)] rounded-t-lg"></div>

//               {/* Icon - Now using the passed SVG Component */}
//               <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 p-3">
//                 <service.IconComponent className="w-full h-full text-[var(--deepOcean)]" />
//               </div>

//               {/* Title */}
//               <h3 className="font-open textStyle2 font-semibold mb-4 leading-snug">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="font-open leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;



// ***********************************



import React from "react";

// --- SVG Icons ---
// (SVG components remain the same as before)
const DropletOffIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69L5.64 8.78a5 5 0 1 0 7.07 7.07l3.96-3.96M16 22l-4-4-4 4M21.5 16.5l-2-2m-2-2l-2-2m-2-2l-2-2m-2-2l-2-2" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const FlaskIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1.5L20 8v8l-8 6-8-6V8l8-6z" />
    <path d="M12 22v-6m-4-6l4 4 4-4m-4-4v4m4-4l-4 4m-4-4l4 4" />
    <circle cx="12" cy="11" r="4" />
    <path d="M12 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
  </svg>
);
const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10M18 20V4M6 20V16" />
    <path d="M3 20h18" />
  </svg>
);
const WaveIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-3 6-3 6 6 12 0c-6-6-6 6-12 0s-6-3-6-3" />
    <path d="M2 16s3-3 6-3 6 6 12 0c-6-6-6 6-12 0s-6-3-6-3" />
  </svg>
);

// Define the type for a single service item
interface ServiceItem {
  IconComponent: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Data for each service card
const services: ServiceItem[] = [
  { IconComponent: DropletOffIcon, title: "Reduced Effluent Load", description: "Minimize the environmental impact and cost associated with wastewater treatment." },
  { IconComponent: FlaskIcon, title: "Easier Treatment", description: "Simplify and streamline the effluent treatment process, saving time and resources." },
  { IconComponent: ChartBarIcon, title: "Lower COD/BOD Values", description: "Achieve significant reductions in Chemical and Biological Oxygen Demand in discharge." },
  { IconComponent: WaveIcon, title: "Salt-Free Dyeing", description: "Innovate with dyeing processes that eliminate the need for high salt concentrations." },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center mb-12 leading-tight">
          Sustainable Chemistry: Rethinking Formulations
        </h2>

        {/* --- Services Grid --- */}
        {/* Desktop-first: 4 columns by default, then adjusts down for smaller screens */}
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-lg shadow-xl p-8 overflow-hidden
                          transition-shadow duration-300 hover:shadow-2xl
                          ${ index % 2 === 0 ? "mt-8" : "" }
                          max-md:mt-0  /* NEW: Removes staggered effect on mobile */
                        `}
            >
              {/* --- NEW: Animating Background --- */}
              <div
                className="absolute inset-0 bg-[var(--deepOcean)] transition-transform duration-500 ease-in-out
                           transform -translate-y-[calc(100%-8px)] group-hover:translate-y-0"
              ></div>
              
              {/* --- NEW: Content container for z-index layering --- */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 p-3
                             transition-colors duration-300 group-hover:bg-white/20"
                >
                  <service.IconComponent
                    className="w-full h-full text-[var(--deepOcean)] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-open textStyle2 font-semibold mb-4 leading-snug
                             text-gray-900 transition-colors duration-300 group-hover:text-white"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-open leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;