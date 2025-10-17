"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";

export default function CardStack3() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);

    return (
        <div className="relative h-auto">
            {/* Card 1 */}
            <motion.div
                style={{ y: y2 }}
                className="sticky top-40 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
            >
                <h2 className="text-2xl font-bold font-open text-white">
                    01. AquaFree™ - Revolutionizing Dyeing with Less Water
                </h2>

                <div className="flex flex-row gap-12 mt-6">

                    <div className="w-[50%] flex flex-col gap-4">


                        <p className="font-medium text-lg font-open text-white mb-2">
                            Conventional dyeing requires 80-120 liters of water per kilogram of fabric. Multiply that across millions of meters, and the scale of water depletion is staggering.
                        </p>

                        <div>


                            <p className="font-medium text-lg font-open text-white mb-2">
                                <span className="font-semibold underline underline-offset-2">Our answer:</span> AquaFree™ - our proprietary waterless dyeing technology.
                            </p>


                            <div className="w-full flex flex-col justify-center gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Water Savings:</span> Up to 90% less water usage.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Lower Chemical Load:</span> Uses 30% fewer auxiliaries.
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Superior Results:</span> Uniform shade penetration, improved fastness, reduced re-dyeing.
                                    </p>
                                </div>


                            </div>

                        </div>





                    </div>



                    <div className="w-[50%]">

                        {/* section 2 */}

                        <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">

                            <div className="absolute top-2/5 -left-5 -rotate-90">
                                <IoTriangleSharp className="text-6xl text-white" />
                            </div>


                            {/* Heading */}
                            <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                                Impact (2019-2024):
                            </h3>


                            {/* Bullet points */}
                            <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                                <li>
                                    120+ million liters of water saved.
                                </li>
                                <li>
                                    30% reduction in effluent volume.
                                </li>
                                <li>
                                    Equivalent to supplying safe drinking water to 50,000 people for an entire year.
                                </li>

                            </ul>
                        </div>






                    </div>
                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                    <p className="text-white text-xl font-openleading-relaxed">

                        This is not just a technology - it's a lifeline for water-scarce regions.

                    </p>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                style={{ y: y2 }}
                className="sticky top-40 mx-auto w-3/4 bg-[var(--deepOcean)] rounded-xl shadow-xl p-10"
            >
                <h2 className="text-2xl font-bold font-open text-white text-right">
                    02. Zero Liquid Discharge (ZLD) - Closing the Water Loop

                </h2>

                <div className="flex flex-row gap-12 mt-6">

                    <div className="w-[50%]">

                        {/* section 1 */}

                        <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">

                            <div className="absolute top-2/5 -right-5 rotate-90">
                                <IoTriangleSharp className="text-6xl text-white" />
                            </div>


                            {/* Heading */}
                            <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                                Impact (2024):
                            </h3>


                            {/* Bullet points */}
                            <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                                <li>
                                    95 million liters of water recycled annually.
                                </li>
                                <li>
                                    100% effluents treated before reuse.
                                </li>
                                <li>
                                    Zero discharge into natural water bodies.
                                </li>

                            </ul>
                        </div>






                    </div>

                    <div className="w-[50%] flex flex-col gap-4">


                        <p className="font-medium text-lg font-open text-white mb-2">
                            Across India, rivers have turned black or red due to textile effluents. Communities downstream suffer.
                        </p>

                        <div>


                            <p className="font-medium text-lg font-open text-white mb-2">
                                At Just Textiles, we invested in a complete ZLD ecosystem, including:
                            </p>


                            <div className="w-full flex flex-col justify-center gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Reverse Osmosis (RO):</span> Recovers 85-90% of process water.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Multi-Effect Evaporator (MEE):</span> Concentrates effluents, reducing waste volume.
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Agitated Thin Film Dryer (ATFD):</span> Converts effluent salts into reusable solid form.

                                    </p>
                                </div>


                            </div>

                        </div>





                    </div>




                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                    <p className="text-white text-xl font-openleading-relaxed">

                        We became one of the few units in Maharashtra to receive formal MPCB consent for ZLD, setting a benchmark for the industry.

                    </p>
                </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                style={{ y: y2 }}
                className="sticky top-40 mx-auto w-3/4 bg-[var(--greenShade)] rounded-xl shadow-xl p-10"
            >
                <h2 className="text-2xl font-bold font-open text-white">
                    03. Renewable Energy - Powering Progress Responsibly
                </h2>

                <div className="flex flex-row gap-12 mt-6">

                    <div className="w-[50%] flex flex-col gap-4">




                        <div>


                            <p className="font-medium text-lg font-open text-white mb-2">
                                The textile sector has traditionally run on coal and heavy oils. We wanted to change that.
                            </p>


                            <div className="w-full flex flex-col justify-center gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Solar Installations:</span> Panels across factory rooftops now generate 25% of our electricity.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">Agro-Based Boilers:</span> Instead of coal, we use rice husk, groundnut shells, and other residues.
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        <span className="font-semibold">CO₂ Reduction:</span> Our switch to renewable sources has cut 18,000 tons of CO₂ emissions annually.
                                    </p>
                                </div>


                            </div>

                        </div>





                    </div>



                    <div className="w-[50%]">

                        {/* section 2 */}

                        <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">

                            <div className="absolute top-2/5 -left-5 -rotate-90">
                                <IoTriangleSharp className="text-6xl text-white" />
                            </div>


                            {/* Heading */}
                            <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                                Impact Equivalent:
                            </h3>


                            {/* Bullet points */}
                            <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                                <li>
                                    That's like planting 300,000 trees every year.
                                </li>


                            </ul>
                        </div>






                    </div>
                </div>

                <div className="pl-4 border-l-2 border-gray-300 mt-10">
                    <p className="text-white text-xl font-openleading-relaxed">

                        This shift not only reduces our footprint but also creates a market for agricultural waste — putting extra income in farmer's hands.


                    </p>
                </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
                style={{ y: y1 }}
                className="sticky top-40 mx-auto w-3/4 bg-[var(--deepOcean)] rounded-xl shadow-xl p-10"
            >
                <h2 className="text-2xl font-bold font-open text-white text-right">
                    04. Supporting Farmers & Communities

                </h2>

                <div className="flex flex-row gap-12 mt-6">

                    <div className="w-[50%]">

                        {/* section 1 */}

                        <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">

                            <div className="absolute top-2/5 -right-5 rotate-90">
                                <IoTriangleSharp className="text-6xl text-white" />
                            </div>


                            {/* Heading */}
                            <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                                Impact (2024):
                            </h3>


                            {/* Bullet points */}
                            <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                                <li>
                                    2,500 farmers supported through agro-waste procurement.
                                </li>
                                <li>
                                    Reduced regional air pollution load by cutting open burning.
                                </li>


                            </ul>
                        </div>






                    </div>

                    <div className="w-[50%] flex flex-col gap-4">


                        <p className="font-medium text-lg font-open text-white mb-2">
                            When farmers harvest crops, residues like husks and shells are often burned, adding to India's air pollution crisis. We decided to put that waste to use.
                        </p>

                        <div>


                            <p className="font-medium text-lg font-open text-white mb-2">
                                By sourcing agro-residues for our boilers, we:
                            </p>


                            <div className="w-full flex flex-col justify-center gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Prevent stubble burning.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Provide farmers with extra income.
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Keep energy costs stable.

                                    </p>
                                </div>


                            </div>

                        </div>





                    </div>




                </div>


                <div className="mt-4">


                    <div className="w-[50%] flex flex-col gap-4">

                        <div className="space-y-2">

                            <h3 className="text-xl font-semibold text-white font-open">Towards Circularity & Recycling</h3>

                            <p className="font-medium text-lg font-open text-white mb-2">
                                We believe the future of textiles is circular - fabrics must be designed for reuse, recycling, and regeneration.
                            </p>
                        </div>


                        <div>


                            <p className="font-medium text-lg font-open text-white mb-2">
                                Our initiatives include:
                            </p>


                            <div className="w-full flex flex-col justify-center gap-2 pl-4">

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Recycling cutting waste into usable fibers.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Pilots with recycled polyester (rPET) blends.
                                    </p>
                                </div>


                                <div className="flex flex-row gap-4">
                                    <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                                    <p className="font-medium text-base font-open text-white leading-snug">
                                        Research into bio-based fabrics and natural dyes.

                                    </p>
                                </div>


                            </div>

                        </div>





                    </div>


                    <div className="pl-4 border-l-2 border-gray-300 mt-10">
                        <p className="text-white text-xl font-openleading-relaxed">

                            Our circular vision ensures we're not just reducing impact but actively closing the loop.

                        </p>
                    </div>


                </div>

            </motion.div>
        </div>
    );
}
