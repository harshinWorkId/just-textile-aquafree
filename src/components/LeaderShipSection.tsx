"use client";

import React from "react";
import Image from "next/image";
import { FaRegLightbulb, FaLeaf } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { GiGearHammer } from "react-icons/gi";
import { motion, Variants } from "framer-motion";
// import CircularText from "@/utils/CircularText";

const cards = [
  {
    icon: (
      <FaRegLightbulb className="w-10 h-10 text-[var(--bodyContent)] mt-0" />
    ),
    title: "Strategic Vision",
    desc: "Planning for long-term growth while adapting to changing markets and customer needs.",
  },
  {
    icon: <GiGearHammer className="w-10 h-10 text-[var(--bodyContent)] mt-0" />,
    title: "Operational Discipline",
    desc: "Ensuring efficiency and reliability in every process, every day, without exception.",
  },
  {
    icon: (
      <MdOutlineVerified className="w-10 h-10 text-[var(--bodyContent)] mt-0" />
    ),
    title: "Innovative Spirit",
    desc: "Advancing technology and processes to stay ahead of industry trends.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-[var(--bodyContent)] mt-0" />,
    title: "Environmental Responsibility",
    desc: "Minimizing environmental impact while maximizing quality.",
  },
];

// Animation variants for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LeadershipSection: React.FC = () => {
  return (
    <section className="bg-[#fdfbf7] py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 px-6 max-lg:grid-cols-1 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative w-full h-[400px] lg:h-[500px] rounded-md overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/assets/images/our-leadership.png"
            alt="Leadership Philosophy"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif mb-4">
              Leadership that Guides and Inspires at Just Textiles
            </h2>
            <p className="text-[var(--bodyContent)] text-base font-open leading-relaxed mb-6">
              An organization's strength lies in the clarity of its vision and
              the discipline of its execution. At Just Textiles, our leadership
              team embodies both - growing the company responsibly, upholding
              uncompromising quality, and building trust with every stakeholder.
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-medium text-[var(--bodyContent)] font-open mb-4 flex flex-row gap-10"
          >
            <p>Our Leadership Philosophy</p>

            {/* <div className="-mt-20">
              <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div> */}
          </motion.h3>

          {/* Feature Cards with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6 -mt-4"
          >
            {cards.map((c, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-4 border border-gray-400 rounded-md flex gap-3 items-start bg-white shadow-sm hover:shadow-md transition"
              >
                {c.icon}
                <div className="mt-2">
                  <h4 className="font-semibold textStyle2 !leading-tight font-open">
                    {c.title}
                  </h4>
                  <p className="text-sm text-[var(--bodyContent)] font-open mt-2">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Box */}
          {/* <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black text-white px-8 py-8 rounded-md flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <h3 className="text-xl font-semibold">Have a project? Let&apos;s Talk!</h3>
            <button className="bg-white text-black px-6 py-3 rounded-sm hover:bg-gray-200 transition">
              Contact Us
            </button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
