import React from 'react'
import Image from 'next/image'
import ProgressSection from './ProgressSection';
const CheckIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const HomeSection4 = () => {
    const features = [
        "Up to 90% water savings",
        "70% reduction in processing time",
        "Superior shade consistency and vibrancy",
        "Dramatically lower environmental impact",
    ];
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Images */}
                    <div className="relative h-[550px] max-md:hidden flex items-center justify-center">
                        {/* Background Image */}
                        <div className="absolute left-0 top-0 w-[60%] h-[100%]">
                            <Image
                                src="/assets/images/why-work-matters3.png"
                                alt="Textile worker cutting blue fabric"
                                layout="fill"
                                objectFit="cover"
                                className="shadow-md"
                            />
                        </div>
                        {/* Foreground Image */}
                        <div className="absolute right-0 bottom-5 w-[70%] h-[85%] bg-white p-3">
                            <div className="relative w-[95%] mx-auto h-[95%] mt-3">
                                <Image
                                    src="/assets/images/why-work-matters-2.png"
                                    alt="Hands operating a sewing machine"
                                    layout="fill"
                                    objectFit="cover"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-3">
                        <h2 className="text-4xl max-md:text-3xl max-md:text-center max-md:mb-10 font-medium font-serif text-[var(--greenShade)] mb-4 tracking-tight">
                            Our Pioneering AquaFree™ Technology
                        </h2>

                        <div className="hidden  relative h-[450px] max-md:flex max-md:mb-10  items-center justify-center">
                            {/* Background Image */}
                            <div className="absolute left-0 top-0 w-[60%] h-[100%]">
                                <Image
                                    src="/assets/images/why-work-matters3.png"
                                    alt="Textile worker cutting blue fabric"
                                    layout="fill"
                                    objectFit="cover"
                                    className="shadow-md"
                                />
                            </div>
                            {/* Foreground Image */}
                            <div className="absolute right-0 bottom-5 w-[70%] h-[85%] bg-white p-3">
                                <div className="relative w-[95%] mx-auto h-[95%] mt-3">
                                    <Image
                                        src="/assets/images/why-work-matters-2.png"
                                        alt="Hands operating a sewing machine"
                                        layout="fill"
                                        objectFit="cover"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-4'>


                            <p className="textStyle2 font-open text-justify mb-0">
                                Traditional cotton dyeing consumes thousands of liters per ton and creates highly saline wastewater. Our revolutionary AquaFree™ process changes everything.

                            </p>

                            <p className="textStyle2 font-open text-justify mb-0">
                                By eliminating salt dependency and reducing the conventional 12-14 bath steps to just a few, we've achieved:


                            </p>
                        </div>


                        <div className="flex flex-col md:flex-row gap-8 mb-8">


                            {/* Features List */}
                            <ul className="flex-1 space-y-3">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <div className="bg-[var(--greenShade)] rounded-full p-1 mr-3 flex-shrink-0">
                                            <CheckIcon className="w-4 h-4 text-gray-200" />
                                        </div>
                                        <span className="textStyle2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div>
                            <ProgressSection></ProgressSection>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection4