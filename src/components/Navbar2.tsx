// // components/Navbar.tsx
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const navLinks = [
//   {
//     name: "Home",
//     href: "#",
//   },

//   {
//     name: "About Us",
//     href: "#",
//     dropdown: [
//       { name: "Who We Are", href: "/who-we-are" },
//       { name: "Why Our Work Matters", href: "/why-our-work-matters" },
//       {
//         name: "Our Vision, Mission and Purpose",
//         href: "/our-vision-mission-and-purpose",
//       },
//       {
//         name: "Leadership that Guides and Inspires",
//         href: "/leadership-that-guides-and-inspires",
//       },
//       {
//         name: "Our History",
//         href: "/our-history",
//       },
//     ],
//   },

//   {
//     name: "Capabilities",
//     href: "#",
//     dropdown: [
//       { name: "Fabrics & Processes", href: "/fabrics-and-processes" },
//       { name: "Manufacturing Capacity", href: "/manufacturing-capacity" },
//     ],
//   },

//   {
//     name: "Technologies & Innovation",
//     href: "#",
//     dropdown: [
//       { name: "AquaFree™ Waterless Dyeing", href: "/aquafree-waterless-dyeing" },
//       { name: "Innovation with Responsibility", href: "/innovation-with-responsibility" },
//       { name: "Advanced European Machinery", href: "/advanced-european-machinery" },
//       { name: "Institutional & Industrial Textiles", href: "/institutional-and-industrial-textiles" },
//       { name: "Home Furnishing Fabrics", href: "/home-furnishing-fabrics" },
//       { name: "Specialty & Technical Textiles", href: "/specialty-and-technical-textiles" },





//     ],
//   },

//   {
//     name: "Sustainability",
//     href: "#",
//     dropdown: [
//       { name: "Our Responsibility in Action", href: "/our-responsibility-in-action" },
//       { name: "Core Pillars of Our Commitment", href: "/core-pillars-of-our-commitment" },
//       { name: "Environmental Fabric Processing", href: "/environmental-fabric-processing" },

//     ],
//   },

//   {
//     name: "Insights",
//     href: "#",
//     dropdown: [
//       { name: "Recognition", href: "/recognition" },
//       { name: "Certificates", href: "/certificates" },
//       { name: "Patents", href: "/patents" },
//       { name: "Gallery", href: "/gallery" },


//     ],
//   },
// ];

// const Navbar: React.FC = () => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   return (
//     <nav className="bg-white shadow-sm fixed top-0 w-full z-100">
//       <div className="w-full flex items-center justify-between px-6 py-4 lg:px-8">
//         {/* Left Section: Logo */}

//         <div className="relative">
//           <div className="flex flex-row relative">
//             <div className="flex items-center">
//               <Link href="/" className="flex items-center">
//                 <Image
//                   src="/assets/images/logo4.png"
//                   alt="AquaFree Logo"
//                   width={80}
//                   height={45}
//                 />
//               </Link>
//             </div>
//             {/* <div className="flex flex-col leading-tight justify-center">
//             <h1 className="font-medium font-serif">
//               <span className="text-[var(--deepOcean)] text-xl">Just </span>
//               <br />
//               <span className="text-[var(--skyBlue)] text-sm -mt-20">
//                 Aquafree
//               </span>
//               <sup className="text-[10px] text-gray-800">®</sup>
//             </h1>

//             <p className="-mt-1 text-[12px] italic text-[var(--bodyContent)]">
//               Waterless by Innovation. Trusted for Quality.
//             </p>
//           </div> */}

//             <div className="absolute top-0 -right-20">
//               <Image
//                 src="/assets/images/just-aquafree-name.png"
//                 alt="AquaFree Logo"
//                 width={90}
//                 height={45}
//               />
//             </div>

//             <p className="absolute bottom-0 w-[120px] leading-tight -right-28 mt-6 text-[10px] italic text-[var(--bodyContent)]">
//               Waterless by Innovation. Trusted for Quality.
//             </p>
//           </div>

//           <div className="absolute top-1/5 -right-70 flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/assets/images/logo3.png"
//                 alt="AquaFree Logo"
//                 width={150}
//                 height={40}
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Middle Section: Navigation Links (Desktop) */}
//         <div className="flex gap-4">
//           {/* <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/assets/images/logo3.png"
//                 alt="AquaFree Logo"
//                 width={150}
//                 height={40}
//               />
//             </Link>
//           </div> */}
//           {navLinks.map((link) => (
//             // CHANGED: Added padding to the bottom (pb-4) to create the "invisible bridge"
//             <div
//               key={link.name}
//               className="relative py-2" // py-2 to maintain vertical alignment
//               onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
//               onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
//             >
//               <Link
//                 href={link.href}
//                 className="flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
//               >
//                 {link.name}
//                 {link.dropdown && (
//                   <ChevronDownIcon
//                     className={`ml-1 h-4 w-4 text-gray-400 transition-transform ${openDropdown === link.name ? "rotate-180" : ""
//                       }`}
//                   />
//                 )}
//               </Link>
//               {link.dropdown && openDropdown === link.name && (
//                 // CHANGED: Positioned relative to the new padded container using 'top-full'
//                 <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
//                   <div className="w-[250px] rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
//                     {link.dropdown.map((dropdownItem) => (
//                       <Link
//                         key={dropdownItem.name}
//                         href={dropdownItem.href}
//                         className="block rounded-md px-3 py-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
//                       >
//                         {dropdownItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right Section: Icons and Button */}
//         <div className="flex items-center w-fit gap-x-4">
//           <button
//             type="button"
//             className="rounded-full bg-[var(--deepOcean)] px-6 py-2 text-base font-semibold text-white shadow-lg hover:bg-[var(--deepOcean)]/90 transition-all duration-300"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// *********************************************



// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, Variants } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },

  {
    name: "About Us",
    href: "#",
    dropdown: [
      { name: "Who We Are", href: "/who-we-are" },
      { name: "Why Our Work Matters", href: "/why-our-work-matters" },
      {
        name: "Our Vision, Mission and Purpose",
        href: "/our-vision-mission-and-purpose",
      },
      {
        name: "Leadership that Guides and Inspires",
        href: "/leadership-that-guides-and-inspires",
      },
      {
        name: "Our History",
        href: "/our-history",
      },
    ],
  },

  {
    name: "Capabilities",
    href: "#",
    dropdown: [
      { name: "Fabrics & Processes", href: "/fabrics-and-processes" },
      { name: "Manufacturing Capacity", href: "/manufacturing-capacity" },
    ],
  },

  {
    name: "Technologies & Innovation",
    href: "#",
    dropdown: [
      {
        name: "AquaFree™ Waterless Dyeing",
        href: "/aquafree-waterless-dyeing",
      },
      {
        name: "Innovation with Responsibility",
        href: "/innovation-with-responsibility",
      },
      {
        name: "Advanced Machinery",
        href: "/advanced-machinery",
      },
      // { name: "Why These Machines Matter", href: "/why-these-machines-matter" },
      {
        name: "Institutional & Industrial Textiles",
        href: "/institutional-and-industrial-textiles",
      },
    ],
  },

  {
    name: "Sustainability",
    href: "#",
    dropdown: [
      {
        name: "Our Responsibility in Action",
        href: "/our-responsibility-in-action",
      },
      {
        name: "Core Pillars of Our Commitment",
        href: "/core-pillars-of-our-commitment",
      },
      {
        name: "Environmental Fabric Processing",
        href: "/environmental-fabric-processing",
      },
    ],
  },

  {
    name: "Insights",
    href: "#",
    dropdown: [
      {
        name: "Recognition",
        href: "/recognition",
      },
      {
        name: "Certificates",
        href: "/certificates",
      },
      {
        name: "Patents",
        href: "/patents",
      },
       {
        name: "Gallery",
        href: "/gallery",
      },
    ],
  },
];

const itemVarients: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (idx: number) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: idx * 0.2,
        damping: 1,
      },
    };
  },
};
const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow-sm fixed top-0 w-full z-100">
        <div className="w-full flex items-center justify-between px-3 sm:px-6 py-4 lg:px-8">
          {/* Left Section: Logo */}
          <div className="flex">
            <Link href="/" className="flex relative">
              <Image
                src="/assets/images/logo4.png"
                alt="AquaFree Logo"
                width={80}
                height={45}
              />
              {/* <div className="flex flex-col leading-tight justify-center">
            <h1 className="font-medium font-serif">
              <span className="text-[var(--deepOcean)] text-xl">Just </span>
              <br />
              <span className="text-[var(--skyBlue)] text-sm -mt-20">
                Aquafree
              </span>
              <sup className="text-[10px] text-gray-800">®</sup>
            </h1>

            <p className="-mt-1 text-[12px] italic text-[var(--bodyContent)]">
              Waterless by Innovation. Trusted for Quality.
            </p>
          </div> */}

              <section className="flex flex-col">
                <Image
                  src="/assets/images/just-aquafree-name.png"
                  alt="AquaFree Logo"
                  className="-ml-1"
                  width={90}
                  height={45}
                />

                <p className=" w-[120px] leading-tight text-[10px] italic text-[var(--bodyContent)]">
                  Waterless by Innovation. Trusted for Quality.
                </p>
              </section>
            </Link>

            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/logo3.png"
                  alt="AquaFree Logo"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
          </div>

          {/* Middle Section: Navigation Links (Desktop) */}
          <div className="hidden xl:flex gap-4">
            {/* <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo3.png"
                alt="AquaFree Logo"
                width={150}
                height={40}
              />
            </Link>
          </div> */}
            {navLinks.map((link) => (
              // CHANGED: Added padding to the bottom (pb-4) to create the "invisible bridge"
              <div
                key={link.name}
                className="relative py-2" // py-2 to maintain vertical alignment
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDownIcon
                      className={`ml-1 h-4 w-4 text-gray-400 transition-transform ${openDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>
                {link.dropdown && openDropdown === link.name && (
                  // CHANGED: Positioned relative to the new padded container using 'top-full'
                  <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
                    <div className="w-[250px] rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block rounded-md px-3 py-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section: Icons and Button */}
          <div className="hidden xl:flex items-center w-fit gap-x-4">
            <button
              type="button"
              className="rounded-full cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Moblie only menu button */}
          <div className="block xl:hidden cursor-pointer" onClick={toggleMenu}>
            {!isOpen ? (
              <Bars3Icon className="w-10" />
            ) : (
              <XMarkIcon className="w-10" />
            )}
          </div>
        </div>
      </nav>
      {/* Middle Section: Navigation Links (Mobile) */}

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex xl:hidden flex-col gap-6 fixed top-24 border-t border-slate-300 z-100 py-12 px-8 min-h-screen w-full bg-white"
          >
            {navLinks.map((link, idx) => (
              // CHANGED: Added padding to the bottom (pb-4) to create the "invisible bridge"
              <motion.li
                key={link.name}
                variants={itemVarients}
                initial="hidden"
                animate="visible"
                custom={idx}
              >
                <Link
                  href={link.href}
                  className="flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => {
                    if (link.dropdown) {
                      setOpenDropdown((prev) =>
                        prev !== link.name ? link.name : null
                      );
                    }
                  }}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDownIcon
                      className={`ml-1 h-4 w-4 text-gray-400 transition-transform ${openDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>
                {link.dropdown && openDropdown === link.name && (
                  // CHANGED: Positioned relative to the new padded container using 'top-full'

                  <motion.ul
                    initial={{ opacity: 0, height: 50 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="p-2 mt-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                  >
                    {link.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <Link
                          onClick={closeMenu}
                          href={dropdownItem.href}
                          className="block rounded-md px-3 py-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

