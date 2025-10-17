"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function CardStack() {
  const { scrollYProgress } = useScroll();
  // const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);

  return (
    <div className="relative h-[200vh]">
      {/* Card 1 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-40 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold font-serif text-white">
          01. For Clients
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[50%]">
            <Image
              src="/assets/images/Impact1.jpg"
              alt="Explore"
              width={600}
              height={400}
              className="rounded-lg mt-6"
            />
          </div>

          <div className="w-[50%] flex flex-col justify-center gap-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Consistent quality at scale
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Fabrics aligned with sustainability roadmaps of global brands
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Faster lead times through continuous processing
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-40 mx-auto w-3/4 bg-[var(--deepOcean)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl text-right font-bold font-serif text-white">
          02. For Communities
        </h2>

        <div className="flex flex-row-reverse gap-12">
          <div className="w-[50%]">
            <Image
              src="/assets/images/Impact2.jpg"
              alt="Explore"
              width={600}
              height={400}
              className="rounded-lg mt-6"
            />
          </div>

          <div className="w-[50%] flex flex-col justify-center gap-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Freshwater conservation safeguards local needs
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Agro-based boilers create revenue streams for farmers
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Jobs in a fully compliant and responsible industry
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-40 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold font-serif text-white">
          03. For the Planet
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[50%]">
            <Image
              src="/assets/images/Impact3.jpg"
              alt="Explore"
              width={600}
              height={400}
              className="rounded-lg mt-6"
            />
          </div>

          <div className="w-[50%] flex flex-col justify-center gap-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Reduced carbon footprint through renewable energy
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Minimal water use via AquaFree™ and ZLD
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                No untreated effluent discharge - ever
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
