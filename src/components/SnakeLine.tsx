"use client";

import { motion } from "framer-motion";

export default function SnakeLine() {
  return (
    <div className="absolute -rotate-10 top-30 left-0 w-full h-[300px] pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="300"
        viewBox="0 0 1800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <motion.path
          d="
            M 0 150
            C 300 50, 600 250, 900 150
            S 1500 250, 1800 150
          "
          stroke="#10b981"   // Tailwind emerald-500 (greenish)
          strokeWidth="3"
          strokeDasharray="12 12"   // makes it dashed
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }} // makes it move forever
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}