import React from 'react'
import Navbar2 from '@/components/Navbar2'

import { FaTint } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import PartnershipForChange from "@/components/PartnershipForChange"
import BehindTheScenes from '@/components/BehindTheScenes';
import Image from 'next/image';





import { DraftingCompass, User } from 'lucide-react';


type Service = {
    title: string;
    description: string;
    icon: React.ReactElement;
    listItem?: string[];
    highlight?: boolean;
};

const services: Service[] = [
    {
        title: "Planet",
        description:
            "Protecting natural resources through measurable action",
        icon: (
            <DraftingCompass className="w-12 h-12 transition-colors duration-500 group-hover:text-emerald-300 text-[var(--deepOcean)]" />
        ),
        listItem: ["Reducing carbon emissions", "Conserving water supplies", "Eliminating hazardous waste", "Restoring biodiversity"
        ]
    },
    {
        title: "People",
        description:
            "Creating positive change in communities",
        icon: (
            <User className="w-12 h-12 transition-colors duration-500 group-hover:text-emerald-300 text-[var(--deepOcean)]" />
        ),
        listItem: ["Ensuring safe employment", "Supporting education programs", "Building resilient livelihoods", "Creating positive change in communities"
        ]
    },
    {
        title: "Performance",
        description:
            "Delivering excellence without compromise",
        icon: <User className="w-12 h-12 text-emerald-500" />,
        highlight: true,
        listItem: ["Premium fabric quality", "Certified sustainability standards", "Supply chain transparency", "Measurable brand impact"
        ]
    },
];


interface WorkStep {
    icon: React.ElementType;
    title: string;
    description: string;
}


const steps: WorkStep[] = [
    {
        icon: FaTint,
        title: 'Water Stewardship',
        description: 'Advanced recycling systems and closed-loop processes dramatically reduce consumption',
    },
    {
        icon: FaBolt,
        title: 'Clean Energy',
        description: 'Renewable power sources replace fossil fuel dependency across operations',
    },
    {
        icon: FaRecycle,
        title: 'Waste Elimination',
        description: 'Circular systems transform byproducts into valuable resources',
    },

];
const page = () => {

    return (
        <div>
            <Navbar2 />

            {/* Our Responsibility in Action  */}
            <section className="w-full mt-20 py-20 bg-[var(--beige)]/30">
                <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                    <div className="text-4xl max-md:text-3xl font-medium font-serif text-[var(--greenShade)] text-center">
                        [Our Responsibility in Action]
                    </div>

                    <p className="font-open max-md:px-4 text-xl font-semibold text-[var(--bodyContent)] text-center">
                        At Just Textiles, sustainability isn't a marketing line-it's our foundation. Every meter of fabric represents industrial excellence that protects, not harms, the environment.

                    </p>
                </div>
            </section>

            {/* The Challenge We're Solving && Environmental fabric processing  */}
            <section className="relative overflow-hidden bg-[var(--beige)]/30 pb-20 mt-0">


                <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-20 items-center gap-y-16">

                        {/* left Column: Text Content */}


                        <div className='flex flex-col'>
                            <div>

                                <h2 className="mt-4 text-4xl max-md:text-3xl max-md:text-center font-medium text-[var(--greenShade)] font-serif">
                                    The Challenge We're Solving
                                </h2>


                                <div className="relative overflow-hidden rounded-3xl shadow-soft mt-4">

                                    <Image
                                        src="/assets/images/challenges-we-are-facing.png"
                                        alt="Smiling team reviewing textile samples"
                                        width={400}
                                        height={800}
                                        priority
                                        className="w-full h-[400px] max-md:h-[18rem] object-fill rounded-3xl"
                                    />


                                </div>
                                <p className="mt-6 text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                                    The global textile industry is one of the most resource-intensive sectors on Earth. Conventional dyeing and finishing consume massive amounts of water, release untreated effluents into waterways, and rely heavily on fossil fuels for energy.


                                </p>
                                <p className="mt-4 text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                                    Left unchecked, industrial textile production drains rivers, pollutes fragile ecosystems, and pushes vulnerable communities into environmental crisis. We recognized this threat early-and chose a radically different path forward.


                                </p>



                            </div>

                        </div>



                        <div className="flex flex-col space-y-4">

                            <h2 className='text-[var(--greenShade)] font-medium font-serif text-4xl max-md:text-3xl max-md:text-center'>
                                Environmental Fabric Processing

                            </h2>

                            <p className='text-[var(--bodyContent)] text-lg font-open'>
                                We pioneered a holistic approach that balances scale with sustainability, efficiency with empathy, and business growth with biodiversity protection.

                            </p>
                            {steps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className={`flex items-start gap-6 p-6 
                    ${index === 0 ? 'border-0' : 'border-t-1'}

                  `}
                                >
                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md border-2 border-[var(--deepOcean)] font-open">
                                        <step.icon className="h-8 w-8 text-[var(--deepOcean)] font-open" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--bodyContent)]">{step.title}</h3>
                                        <p className="mt-2 text-lg text-[var(--bodyContent)]">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>



            {/* Three pillers of Impact  */}

            <section className="bg-[#f7f7f7] py-16 px-6 lg:px-24 relative">
                {/* Header */}
                <div className="max-w-6xl mx-auto flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-8">


                    <h2 className="text-4xl text-center font-medium text-[var(--greenShade)] font-serif leading-snug">
                        Three Pillars of Impact

                    </h2>


                </div>

                {/* Cards Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden p-8 font-open shadow-sm transition-colors duration-500 ${service.highlight
                                ? "bg-slate-900 text-white"
                                : "bg-white text-gray-800"
                                }`}
                        >
                            {/* Dynamic hover background for non-highlight cards */}
                            {!service.highlight && (
                                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
                            )}

                            {/* Content */}
                            <div className="relative z-10">
                                <div>{service.icon}</div>

                                <h3
                                    className={`mt-4 text-xl font-semibold transition-colors duration-500 ${service.highlight
                                        ? "text-white"
                                        : "textStyle2 group-hover:text-white"
                                        }`}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className={`mt-3 text-lg transition-colors duration-500 ${service.highlight
                                        ? "!text-gray-300"
                                        : "group-hover:text-gray-300"
                                        }`}
                                >
                                    {service.description}
                                </p>

                                <ul className='mt-4 text-lg'>
                                    {service?.listItem?.map((item, index) => (
                                        <li key={index} className={`list-disc list-inside ${service.highlight
                                            ? "text-white"
                                            : "text-lg group-hover:text-gray-300"
                                            }`}>
                                            {item}
                                        </li>

                                    ))

                                    }

                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Real Actions, Measurable Results */}

            <section className="py-12 mt-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-12">



                        {/* Content Column */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl max-md:text-3xl max-md:text-center max-md:leading-tight font-medium text-[var(--greenShade)] font-serif leading-snug">
                                Real Actions, Measurable Results

                            </h2>

                            <div className="relative hidden h-[100%] w-full max-md:flex flex-col max-md:mt-6">
                                <Image
                                    src="/assets/images/zld-water-system.png" // Replace with your image path
                                    alt="Sewing machine in a textile factory"
                                    width={300}
                                    height={600}
                                    className="h-[100%] w-full object-fill"
                                />





                            </div>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                                Our commitment goes beyond promises. Every initiative is tracked, verified, and reported with complete transparency. We work with third-party certifiers, invest in cutting-edge technology, and continuously improve our processes.

                            </p>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--bodyContent)] font-open text-justify">
                                From regenerative farming partnerships to zero-liquid discharge systems, we're proving that responsible manufacturing can scale-and that global brands don't have to choose between quality and conscience.


                            </p>


                        </div>



                        {/* Image Column */}
                        <div className="relative max-md:hidden h-[100%] w-full flex flex-col">
                            <Image
                                src="/assets/images/zld-water-system.png" // Replace with your image path
                                alt="Sewing machine in a textile factory"
                                width={300}
                                height={600}
                                className="h-[100%] w-full object-fill"
                            />





                        </div>




                    </div>

                </div>
            </section>


            {/* Partnership for Change  */}
            <div className='h-[24rem] max-md:h-full w-full relative max-md:mb-10'>

                <div className="max-w-7xl mx-auto h-[50%] relative top-10 max-md:top-0 max-md:mb-6">
                    <h3 className='text-center font-serif font-semibold text-2xl text-[var(--deepOcean)]'>Partnership for Change
                    </h3>
                </div>


                <div className='w-full h-[50%] max-md:hidden bg-[var(--grayish)]'></div>

                <div className='absolute max-md:hidden top-[20%] max-md:h-full w-full'>
                    <PartnershipForChange />

                </div>

                <div className='hidden max-md:block'>

                    <PartnershipForChange />
                </div>



            </div>


            <section className='bg-[var(--beige)]/30 w-full'>

                <div className='max-w-7xl mx-auto'>
                    <BehindTheScenes />
                </div>

            </section>












        </div>
    )
}

export default page