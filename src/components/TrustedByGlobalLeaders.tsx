import React from "react";
import FuzzyText from "@/utils/FuzzyText";
import Image from "next/image";

const AquaFreeTechnicalProcess = () => {
    return (
        <section className="bg-[var(--beige)]/20 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto py-12 px-6">
                {/* heading and description  */}
                <div className="w-full">
                    <h2 className="text-4xl text-center font-medium font-serif text-[var(--greenShade)] mb-6 leading-snug">
                        Trusted by Global Leaders
                    </h2>
                </div>


                {/* Fashion & Lifestyle Brands  */}
                <div className="flex flex-col gap-14 my-8 ">

                    <div className="w-full flex flex-row gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 px-10 mt-6 relative h-[400px] py-10">
                        <div className="w-[40%] relative h-[100%]">
                            <div className="relative h-full w-[80%] mx-auto">
                                <Image
                                    fill
                                    src={`/assets/images/step1.jpg`}
                                    alt=""
                                    className="object-cover rounded-full"
                                ></Image>
                            </div>
                        </div>

                        <div className="w-[50%] my-12 z-20">
                            <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                                Fashion & Lifestyle Brands
                            </h3>


                            <div className="w-full">
                                <ul className="space-y-4 mb-8 w-full">
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Consistent bulk supplies with exceptional color accuracy

                                    </li>
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Specialty finishes: antimicrobial, moisture-wicking, easy-care

                                    </li>
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Faster lead times through continuous processing

                                    </li>
                                </ul>
                            </div>


                        </div>





                    </div>

                </div>

                {/* Defense & Industrial  */}
                <div className="flex flex-col gap-14 my-8 ">

                    <div className="w-full flex flex-row-reverse gap-6 group rounded-r-[180px] font-open rounded-l-[180px] bg-[var(--grayish)]/30 px-10 mt-6 relative h-[400px] py-10">
                        <div className="w-[40%] relative h-[100%]">
                            <div className="relative h-full w-[80%] mx-auto">
                                <Image
                                    fill
                                    src={`/assets/images/step1.jpg`}
                                    alt=""
                                    className="object-cover rounded-full"
                                ></Image>
                            </div>
                        </div>

                        <div className="w-[50%] my-12 z-20">
                            <h3 className="text-2xl text-[var(--bodyContent)] font-semibold mb-6">
                                Defense & Industrial
                            </h3>


                            <div className="w-full">
                                <ul className="space-y-4 mb-8 w-full">
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Camouflage fabrics with advanced printing


                                    </li>
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Flame-retardant and high-tenacity materials

                                    </li>
                                    <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                        <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                        Perfect shade matching across millions of meters


                                    </li>
                                </ul>
                            </div>


                        </div>

                    </div>

                </div>

                <p className="max-w-4xl mx-auto text-[var(--bodyContent)] text-lg font-open text-center">From international fashion houses to government defense programs, our clients trust us for reliability, sustainability, and unwavering quality standards.
                </p>
            </div>
        </section>
    );
};

export default AquaFreeTechnicalProcess;
