"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisiblity = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisiblity);
    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-50 rounded-full p-3 shadow-md bg-[var(--deepOcean)] text-white hover:bg-[var(--deepOcean)]/80 focus:outline-none focus:ring-2 focus:ring-[var(--deepOcean)]/40 cursor-pointer"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
