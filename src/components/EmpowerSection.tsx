"use client";

import { motion, Variants, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaUsers } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { GiLightBulb } from "react-icons/gi";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactElement;
};

const features: Feature[] = [
  {
    title: "Knowledge",
    description:
      "Continuous learning and development programs that keep our team at the forefront of textile technology and sustainable practices.",
    icon: <FaUsers className="w-10 h-10 text-[var(--deepOcean)]" />,
  },
  {
    title: "Responsibility",
    description:
      "Empowering every team member to take ownership of quality, sustainability, and customer satisfaction in their daily work.",
    icon: <MdAssignmentTurnedIn className="w-10 h-10 text-[var(--deepOcean)]" />,
  },
  {
    title: "Innovation Culture",
    description:
      "Fostering an environment where creative thinking and problem-solving drive continuous improvement across all operations.",
    icon: <GiLightBulb className="w-10 h-10 text-[var(--deepOcean)]" />,
  },
];

// Framer variants
const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }
  },
};

export default function EmpowerSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" }); // bar expand
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="bg-white py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl max-lg:text-3xl max-lg:text-center font-medium text-[var(--greenShade)] font-serif">
          Empowering Our People
        </h2>
      </div>

      {/* Main container */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Expanding green background bar */}
        <motion.div
          initial={{ width: "33%" }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 right-0 mx-auto h-32 bg-[var(--deepOcean)] top-1/2 -translate-y-1/2 rounded-md"
        />

        {/* Cards with stagger */}
        <motion.div
          className="grid grid-cols-3 gap-8 relative z-10 max-lg:grid-cols-2 max-md:grid-cols-1"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardItem}
              className={`bg-white shadow-lg p-8 flex flex-col items-center text-center min-h-[300px] rounded-md`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="textStyle2 font-open font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--bodyContent)] text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}