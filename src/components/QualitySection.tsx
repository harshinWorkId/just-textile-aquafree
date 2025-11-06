



"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaHandsHelping } from "react-icons/fa";
import { RiRepeatFill } from "react-icons/ri";
import SnakeLine from "./SnakeLine";
type Card = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "Consistency",
    description:
      "Delivering uniform quality across every batch, ensuring predictable results that brands can rely on for their collections.",
    icon: <RiRepeatFill className="w-8 h-8 text-sky-700" />,
  },
  {
    title: "Reliability",
    description:
      "Meeting commitments with precision timing and dependable service that keeps supply chains running smoothly.",
    icon: <FaHandsHelping className="w-8 h-8 text-sky-700" />,
  },
  {
    title: "Speed",
    description:
      "Rapid turnaround times without compromising quality, helping brands respond quickly to market demands.",
    icon: <FaBolt className="w-8 h-8 text-sky-700" />,
  },
];

// parent scale animation
const cardVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03 },
};

// icon spring animation
const iconVariants = {
  initial: { x: 0 },
  hover: { x: 40 },
};

const QualitySection: React.FC = () => {


  return (
    <section className="relative py-20 bg-[#f7f7f7] overflow-hidden">
      

      <SnakeLine/>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14 relative z-20">
        <h2 className="text-4xl max-lg:text-center max-lg:text-3xl text-[var(--greenShade)] font-medium font-serif">
          Industries & Production
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 
                      max-lg:grid-cols-2 max-md:grid-cols-1 relative z-20">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-white p-8 rounded-md shadow-md text-left overflow-hidden"
          >
            {/* Icon */}
            <motion.div
              variants={iconVariants}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100 mb-6"
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
              {card.title}
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {card.description}
            </p>

          
            <a
              href="#"
              className="mt-5 inline-block text-sm font-semibold text-sky-700 hover:underline underline-offset-4"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QualitySection;