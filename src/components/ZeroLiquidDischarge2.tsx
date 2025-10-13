// components/ZeroLiquidDischarge2.tsx
import React from 'react';
import Image from 'next/image';
import { GiWaterRecycling } from "react-icons/gi";
import { GiSteam } from "react-icons/gi";
import { GiRotaryPhone } from "react-icons/gi";
const ZeroLiquidDischarge2 = () => {
    return (
        <section className="py-12 mt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 items-center gap-12">



                    {/* Content Column */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif leading-snug">
                            Zero Liquid Discharge (ZLD) - Closed-Loop Water System
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                            Water pollution is one of the textile industry's biggest environmental challenges. At Just Textiles, we've taken bold steps to ensure no untreated wastewater leaves our premises.
                        </p>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                            We are proud to be among the very few textile units in India to have secured Zero Liquid Discharge (ZLD) certification from the Maharashtra Pollution Control Board (MPCB). Our advanced ZLD ecosystem ensures that every drop of water is either recycled or recovered.

                        </p>

                        {/* Testimonial/Quote Block */}
                        {/* <div className="mt-10 rounded-lg bg-gray-50 p-6">
                            <p className="text-2xl font-serif text-gray-400">&ldquo;</p>
                            <p className="mt-2 text-lg italic text-gray-700">
                                No Matter What Problem You Face You Have Found An
                                Investigation Agency That Can Help You.
                            </p>
                        </div> */}


                        <div className='flex flex-col gap-6 mt-6'>

                            {/* Reverse Osmosis (RO):  */}
                            <div className='space-y-3'>

                                <div className='flex flex-row gap-2 font-semibold text-xl font-open text-[var(--bodyContent)]'>
                                    <GiWaterRecycling className='mt-1' />
                                    <h4>Reverse Osmosis (RO):</h4>
                                </div>

                                <div className='flex flex-col gap-0 pl-8'>

                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Recovers up to 87% of process water for reuse.
                                        </p>

                                    </div>


                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Minimizes dependence on freshwater sources.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Multi-Effect Evaporator (MEE)  */}
                            <div className='space-y-3'>

                                <div className='flex flex-row gap-2 font-semibold text-xl font-open text-[var(--bodyContent)]'>
                                    <GiSteam className='mt-1' />
                                    <h4>Multi-Effect Evaporator (MEE):</h4>
                                </div>

                                <div className='flex flex-col gap-0 pl-8'>

                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Concentrates the remaining wastewater.
                                        </p>

                                    </div>


                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Reduces overall effluent volume with optimized energy use.
                                        </p>

                                    </div>

                                </div>

                            </div>



                            {/* Agitated Thin Film Dryer (ATFD):  */}
                            <div className='space-y-3'>

                                <div className='flex flex-row gap-2 font-semibold text-xl font-open text-[var(--bodyContent)]'>
                                    <GiRotaryPhone className='mt-1' />
                                    <h4>Agitated Thin Film Dryer (ATFD):</h4>
                                </div>

                                <div className='flex flex-col gap-0 pl-8'>

                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Converts concentrated effluent into solid salts.
                                        </p>

                                    </div>


                                    <div className='flex flex-row gap-2 font-open text-lg'>
                                        <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--bodyContent)]"></span>
                                        <p>
                                            Ensures safe reuse or disposal without harming the environment.
                                        </p>

                                    </div>

                                </div>

                            </div>



                        </div>


                    </div>



                    {/* Image Column */}
                    <div className="relative h-[100%] w-full flex flex-col">
                        <Image
                            src="/assets/images/zld-water-system.png" // Replace with your image path
                            alt="Sewing machine in a textile factory"
                            width={700}
                            height={500}
                            className="h-[65%] w-full object-fill"
                        />


                        <div className="relative w-full flex flex-row mt-12">
                            <div className="w-[100%] flex justify-center max-lg:w-full">
                                <div className="relative bg-[#f9fafb] p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">


                                    {/* Heading */}
                                    <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                                        The Result:
                                    </h3>



                                    {/* Bullet points */}
                                    <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                                        <li>
                                            0% untreated wastewater discharge.
                                        </li>
                                        <li>
                                            Over 85% water recovery for reuse in production.
                                        </li>
                                        <li>
                                            Complete compliance with environmental standards, ensuring protection of local water bodies and ecosystems.
                                        </li>

                                    </ul>
                                </div>
                            </div>


                        </div>


                    </div>




                </div>

            </div>
        </section>
    );
};

export default ZeroLiquidDischarge2;