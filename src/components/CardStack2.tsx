"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaHospital, FaTruck, FaCheck } from "react-icons/fa";

export default function CardStack2() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);

  return (
    <div className="relative h-auto">
      {/* Card 1 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-0 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold font-serif text-white">
          01. Defense & Military
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[30%]">
            {/* <Image
              src="/assets/images/Impact1.jpg"
              alt="Explore"
              width={600}
              height={400}
              className="rounded-lg mt-6"
            /> */}
            <FaShieldAlt className="text-white/50 w-full h-[12rem]" />
          </div>

          <div className="w-[50%] flex flex-col justify-center gap-4 mt-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Camouflage fabrics with advanced prints
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Flame-retardant blends for protective wear
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                High-tenacity fabrics for gear and equipment
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
          02. Medical & Healthcare
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[50%] flex flex-col justify-center gap-4 mt-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Antimicrobial bed linen and uniforms
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Anti-static fabrics for cleanroom applications
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Wash-durable textiles designed for hygiene
              </p>
            </div>
          </div>

          <div className="w-[30%]">
            <FaHospital className="text-white/50 w-full h-[12rem]" />
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-40 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold font-serif text-white">
          03. Workwear Fabrics
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[40%] h-[150px]">
            <Image
              src="/assets/images/thread3.png"
              width={200}
              height={400}
              alt="aquafree"
              className="h-full w-[100%]"
            ></Image>
          </div>

          <div className="w-[50%] flex flex-col justify-center gap-4 mt-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Oil- and chemical-repellent finishes
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Durable blends for mining, oil & gas, construction
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                High-visibility fabrics for safety compliance
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        style={{ y: y2 }}
        className="sticky top-40 mx-auto w-3/4 bg-[var(--deepOcean)] rounded-xl shadow-xl p-10"
      >
        <h2 className="text-4xl text-right font-bold font-serif text-white">
          04. Transport & Mobility
        </h2>

        <div className="flex flex-row gap-12">
          <div className="w-[50%] flex flex-col justify-center gap-4 mt-4">
            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Upholstery fabrics for buses, railways, and airlines
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Fire-retardant and abrasion-resistant properties
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-gray-100 text-lg font-open">
                Custom shades and branding for institutional buyers
              </p>
            </div>
          </div>

          <div className="w-[30%]">
            <FaTruck className="text-white/50 w-full h-[12rem]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
