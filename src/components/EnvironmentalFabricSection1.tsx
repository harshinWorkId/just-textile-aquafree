'use client'

import Image from 'next/image'

export function Hero() {
    return (
        <section className="relative isolate bg-peach-gradient bg-[var(--beige)]/30 mt-20">

            <div className="pointer-events-none absolute right-8 top-8 hidden h-10 w-10 rotate-45 rounded-md border-2 border-black/10 max-lg:hidden" />

            <div className="mx-auto max-w-7xl px-10 py-24 max-xl:px-8 max-lg:py-16 max-md:px-6">


                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8">
                    <h2 className="text-4xl max-md:text-3xl max-md:text-center max-md:leading-tight font-medium font-serif text-[var(--greenShade)] mb-6 max-md:mb-0 leading-snug">
                        Environmental Fabric Processing

                    </h2>

                    <div className="text-justify font-semibold text-lg font-open text-[var(--bodyContent)]">
                        <p>
                            At Just Textiles, sustainability is not an afterthought or a marketing tagline-it is embedded into the very core of how we operate. Every meter of fabric that leaves our facility carries with it a story of responsibility, efficiency, and innovation. From the way we generate energy to how we treat water, our approach ensures that ecological impact is minimized while quality remains uncompromised.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-16 mt-6">

                    {/* Image side  */}
                    <div className="max-md:hidden">
                        <div className="relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/5">

                            <Image
                                src="/assets/images/why-work-matters1.png"
                                alt="Smiling team reviewing textile samples"
                                width={1200}
                                height={900}
                                priority
                                className="h-[560px] w-full object-cover max-xl:h-[520px] max-lg:h-[440px] max-md:h-[300px] rounded-3xl"
                            />
                            {/* subtle inner radius to match the mock */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
                        </div>
                    </div>


                    {/* Text side */}
                    <div className="">


                        <h2 className="mt-5 font-display text-4xl max-md:text-3xl max-md:leading-tight max-md:text-center font-medium font-serif text-[var(--greenShade)] leading-tight">
                            Agro-Based Boilers - Clean Energy from Waste
                        </h2>


                        <div className="hidden max-md:block relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/5">

                            <Image
                                src="/assets/images/why-work-matters1.png"
                                alt="Smiling team reviewing textile samples"
                                width={1200}
                                height={900}
                                priority
                                className="w-full object-cover max-md:h-[16rem] rounded-3xl"
                            />
                            {/* subtle inner radius to match the mock */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" />
                        </div>

                        <p className="mt-6 text-xl text-[var(--bodyContent)] font-open">
                            Instead of relying on conventional fossil fuels like coal or diesel, we have shifted to agro-based boilers that run on agricultural residue such as husk and biomass.
                        </p>

                        <ul className="mt-8 space-y-4">

                            <div className='flex flex-col font-open text-[var(--bodyContent)]'>

                                <li className="flex items-start gap-3">
                                    <span aria-hidden className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-orange ring-4 ring-[var(--greenShade)]"></span>
                                    <span className="font-bold text-xl ">Lower Carbon Footprint</span>
                                </li>

                                <p className='text-lg font-medium pl-6 max-md:text-justify'>
                                    By replacing fossil fuels, we cut down greenhouse gas emissions significantly.
                                </p>

                            </div>


                            <div className='flex flex-col font-open text-[var(--bodyContent)]'>

                                <li className="flex items-start gap-3">
                                    <span aria-hidden className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-orange ring-4 ring-[var(--greenShade)]"></span>
                                    <span className="font-bold text-xl ">Circular Economy in Action</span>
                                </li>

                                <p className='text-lg font-medium pl-6 max-md:text-justify'>
                                    Farmers benefit by selling agricultural byproducts, creating a revenue stream for local communities.
                                </p>

                            </div>


                            <div className='flex flex-col font-open text-[var(--bodyContent)]'>

                                <li className="flex items-start gap-3">
                                    <span aria-hidden className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-orange ring-4 ring-[var(--greenShade)]"></span>
                                    <span className="font-bold text-xl ">Sustainable Heat Source</span>
                                </li>

                                <p className='text-lg font-medium pl-6 max-md:text-justify'>
                                    The boilers provide consistent energy for dyeing and finishing operations while aligning with our commitment to renewable energy.
                                </p>

                            </div>


                        </ul>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Hero