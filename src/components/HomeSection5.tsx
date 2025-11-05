import React from 'react'
import Image from 'next/image';
const HomeSection5 = () => {

    interface ServiceStepProps {
        icon: React.ReactNode;
        title: string;
        description: string;
        isEven: boolean; // To alternate icon background colors
    }

    const ServiceStep: React.FC<ServiceStepProps> = ({ icon, title, description, isEven }) => {
        const iconBgClass = isEven ? 'bg-orange-400' : 'bg-gray-800'; // Adjusted to match the image
        const textColorClass = isEven ? 'text-gray-800' : 'text-gray-800'; // All text is dark in the image

        return (
            <div className="flex items-start mb-6 font-open">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconBgClass} mr-4`}>
                    {icon}
                </div>
                <div>
                    <h3 className={`font-semibold text-lg ${textColorClass}`}>{title}</h3>
                    <p className="text-gray-600 text-md max-md:text-md max-xl:text-lg">{description}</p>
                </div>
            </div>
        );
    };
    return (
        <div className="h-auto bg-[var(--grayish)]/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex max-md:flex-col max-xl:flex-col items-center gap-12 overflow-hidden">
                {/* Left Section - Image and Call to Action */}
                <div className='max-md:space-y-6 w-[40%] max-md:w-[100%] max-xl:w-[50%]'>

                    <h2 className="text-4xl max-md:text-3xl max-xl:text-center font-serif font-medium text-[var(--greenShade)] mb-8 leading-tight hidden max-xl:block">
                        Comprehensive Fabric Capabilities

                    </h2>

                    <div className="relative w-[100%] max-md:w-[80%] max-xl:w-[100%] max-md:mx-auto">
                        <div className="relative w-[100%] h-[30rem] max-md:h-[16rem] max-xl:h-[24rem]">
                            <Image fill src={`/assets/images/home4.jpg`} alt="" className="w-full h-full"></Image>
                        </div>

                    </div>
                </div>


                {/* Right Section - How It Works */}
                <div className="py-12 max-xl:py-0 px-8 max-md:px-0 w-[60%] max-md:w-[100%] max-xl:w-[100%] max-xl:px-0">

                    <h2 className="text-4xl max-md:text-3xl max-md:text-center font-serif font-medium text-[var(--greenShade)] mb-8 leading-tight max-xl:hidden">
                        Comprehensive Fabric Capabilities

                    </h2>


                    <div className="space-y-6 max-md:flex max-md:flex-col max-xl:grid max-xl:grid-cols-2 max-xl:gap-6">
                        <ServiceStep
                            icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                            title="Cotton & Natural Fibers"
                            description="Premium mercerized cotton with superior luster, enhanced dye affinity, and exceptional durability. Perfect for apparel, home textiles, and industrial applications."
                            isEven={false}
                        />
                        <ServiceStep
                            icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
                            title="Synthetics & Polyester"
                            description="High-performance polyester, viscose, and nylon up to 80 GSM. Specialized for sportswear, technical textiles, and fashion-forward applications."
                            isEven={false}
                        />
                        <ServiceStep
                            icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h10m-10 4h10M7 5h10M4 19v-11a2 2 0 012-2h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2z"></path></svg>}
                            title="Blends & Lycra"
                            description="Expert processing of poly-cotton Lycra, viscose blends, and stretch fabrics. Low-tension handling preserves elasticity while ensuring vibrant, uniform colors."
                            isEven={false}
                        />
                        <ServiceStep
                            icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                            title="Specialty & Technical"
                            description="Flame-retardant, antimicrobial, moisture-wicking, and coated fabrics. Advanced finishes for defense, medical, workwear, and performance applications."
                            isEven={false}
                        />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default HomeSection5