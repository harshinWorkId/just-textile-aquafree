"use client";

import React from "react";
import Image from "next/image";

import { FaSolarPanel } from "react-icons/fa"; // wind waves + solar
import { MdAir } from "react-icons/md";
import { GiTurbine } from "react-icons/gi";



const HomeSection3: React.FC = () => {
    return (
        <section className="bg-[var(--beige)]/30 pb-12 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                {/* LEFT IMAGE */}
                {/* <div className="relative w-full h-[400px] lg:h-[500px]">
                    <Image
                        src="/assets/images/EnergyRecover.png"
                        alt="Our Story"
                        fill
                        className="object-cover rounded-md shadow-lg"
                    />

                </div> */}

                {/* RIGHT CONTENT */}
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-semibold text-center text-[var(--deepOcean)] mb-4 font-open">
                        Innovation at Industrial Scale

                    </h2>

                   

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 font-open">
                        <div className="p-6 border border-dashed border-gray-500 flex gap-4 items-start">
                            <GiTurbine className="w-8 h-8 text-[var(--forestGreen)]" />
                            <div>
                                <h3 className="font-semibold text-xl text-[var(--bodyContent)]">
                                    150,000+

                                </h3>
                                <p className="text-[var(--bodyContent)] text-lg">
                                    Meters processed daily with European continuous machinery

                                </p>
                            </div>
                        </div>

                        <div className="p-6 border border-dashed border-gray-500 flex gap-4 items-start">
                            <MdAir className="w-8 h-8 text-[var(--forestGreen)]" />
                            <div>
                                <h3 className="font-semibold text-xl text-[var(--bodyContent)]">
                                    Zero Discharge

                                </h3>
                                <p className="text-[var(--bodyContent)] text-lg">
                                    Complete water recycling through advanced ZLD systems

                                </p>
                            </div>
                        </div>

                        <div className="p-6 border border-dashed border-gray-500 flex gap-4 items-start">
                            <FaSolarPanel className="w-8 h-8 text-[var(--forestGreen)]" />
                            <div>
                                <h3 className="font-semibold text-xl text-[var(--bodyContent)]">
                                    42% Renewable

                                </h3>
                                <p className="text-[var(--bodyContent)] text-lg">
                                    Energy from solar and agro-based sources

                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="px-6 py-3 bg-[var(--deepOcean)] w-fit mx-auto text-white font-medium hover:opacity-90 transition rounded-sm">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSection3;
