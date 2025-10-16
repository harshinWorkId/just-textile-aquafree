import React from 'react'
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import { Waves } from 'lucide-react';

import { FaFire } from "react-icons/fa";
import { GiLayeredArmor } from "react-icons/gi";
import { BsStack } from "react-icons/bs";

import CountUp from "@/components/CountUp";
import { Check } from 'lucide-react';



interface FeatureItem {
    icon: React.ElementType;
    number: string;
    title: string;
    description: string;
    align: 'top' | 'bottom';
}


interface StatItem {
    title: string;
    description: string;
}




const featureData: FeatureItem[] = [
    {
        icon: FaFire,
        number: '01',
        title: 'Flame-Retardant Fabrics',
        description: 'Engineered for aviation, defense, and industrial uniforms where safety is non-negotiable. Meets stringent compliance standards while maintaining comfort and durability.',
        align: 'bottom',
    },
    {
        icon: Waves,
        number: '02',
        title: 'Moisture-Management',
        description: 'Advanced wicking technology for activewear and performance gear. Keeps athletes dry and comfortable during intense activity by rapidly moving perspiration away from skin.',
        align: 'top',
    },
    {
        icon: BsStack,
        number: '03',
        title: 'Antimicrobial Fabrics',
        description: 'Medical-grade textiles with built-in bacterial resistance. Essential for healthcare environments, surgical applications, and hygiene-critical products.',
        align: 'bottom',
    },
    {
        icon: GiLayeredArmor,
        number: '04',
        title: 'Coated & Laminated',
        description: 'Multi-layer construction for waterproofing and protective gear. Combines breathability with barrier protection for extreme weather and hazardous environments.',
        align: 'top',
    },
];


const statsData: StatItem[] = [
    {
        title: 'Capillary Action',
        description:
            'Engineered fiber structure pulls moisture from skin through hydrophilic channels',
    },
    {
        title: 'Rapid Transport',
        description:
            'Multi-layer construction spreads moisture across fabric surface for maximum evaporation area',
    },
    {
        title: 'Quick Dry',
        description:
            'Enhanced surface area accelerates evaporation, keeping athletes comfortable and focused',
    },
];





const visionItems: string[] = [
    'Our FR fabrics undergo rigorous testing to meet military, aviation, and industrial safety standards',
    'Self-extinguishing properties activate within seconds of flame contact',
    'Meets NFPA 2112 and ASTM F1506 standards',
    'Maintains breathability despite protective layers',
    'Durable through 50+ industrial wash cycles',
];

const missionItems: string[] = [
    'Military uniforms and tactical gear',
    'Aviation crew apparel for commercial and defense',
    'Industrial workwear for oil & gas, welding',
    'Emergency responder uniforms',

];


const FeatureList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <ul className="mt-4 space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-[var(--greenShade)]" />
                    <span className="">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);







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

const features = [
    "100% water elimination in dye process",
    "60% reduction in energy consumption",
    "Zero chemical wastewater discharge",
    "Shorter production cycles",
];

const page = () => {


    return (
        <div className='w-full mt-20'>
            <Navbar2></Navbar2>


            {/* Innovation Beyond Convention  */}
            <div className='flex w-[80%] mx-auto mt-20 py-20'>

                <div className='w-[40%]'>


                    <div className='w-[100%] mx-auto h-full relative'>

                        <Image width={600} height={400} src={`/assets/images/why-work-matters1.png`} alt="" className='w-[90%] mx-auto rounded-2xl'></Image>

                    </div>

                </div>



                <div className='w-[60%] px-12'>
                    <p className='text-black text-base font-semibold font-serif'>Specialty & Technical Textiles
                    </p>
                    <h2 className='text-[var(--greenShade)] text-4xl font-serif'>
                        Innovation Beyond Convention

                    </h2>

                    <p className='text-[var(--bodyContent)] font-open text-lg'>Engineered fabrics designed to perform where standard materials can't. Our specialty textiles deliver mission-critical functionality across demanding applications.
                    </p>


                    <div className='mt-6 space-y-4'>
                        <h3 className='text-[var(--deepOcean)] font-semibold text-2xl font-open'>From Everyday to Extraordinary</h3>

                        <div className='font-open text-[var(--bodyContent)] text-lg space-y-2'>
                            <h4 className='font-semibold'>The Evolution</h4>
                            <p>Traditional textiles serve basic needs-comfort, coverage, aesthetics. But when conditions demand more, that's where specialty textiles step in.
                            </p>

                            <p>Our R&D-driven approach transforms standard fibers into high-performance solutions engineered for extreme environments and specialized applications.
                            </p>
                        </div>


                    </div>

                </div>

            </div>

            {/* Core Technology Portfolio  */}
            <section className="bg-[var(--beige)]/30 font-open py-24 mt-10">
                <div className="container mx-auto px-8">

                    <div className="mb-16">


                        <h2 className="mt-2 text-4xl text-center font-serif text-[var(--greenShade)] font-medium">
                            Core Technology Portfolio
                        </h2>


                    </div>


                    <div className="grid grid-cols-4 gap-y-12 gap-x-8 font-open">
                        {featureData.map((feature) => (
                            <div
                                key={feature.number}
                                className={`flex flex-col text-center sm:text-left ${feature.align === 'top' ? 'justify-start' : 'justify-end'
                                    }`}
                            >

                                <div
                                    className={`flex flex-col ${feature.align === 'top' ? 'order-2' : 'order-1'
                                        }`}
                                >

                                    <span
                                        className={`mx-auto mb-4 text-2xl font-bold text-[var(--bodyContent)] ${feature.align === 'top' ? 'order-1 mt-6' : 'order-2'
                                            }`}
                                    >
                                        {feature.number}
                                    </span>


                                    <div
                                        className={`rounded-lg bg-gray-50 p-8 text-center ${feature.align === 'top' ? 'order-2' : 'order-1'
                                            }`}
                                    >
                                        <feature.icon className="mx-auto h-12 w-12 text-[var(--deepOcean)]" />
                                        <h3 className="mt-6 text-xl font-bold text-[var(--bodyContent)]">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-2 text-base text-[var(--bodyContent)]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flame-Retardant Excellence  */}
            <section className="bg-[#F8F7F9] py-16">
                <div className="mx-auto w-[90%] px-4">
                    <div className="grid grid-cols-2 items-center gap-16">

                        {/* Left Column: Image collage */}
                        <div className="relative flex items-center justify-center">

                            <div className="absolute left-0 top-0 z-0 h-[90%] w-[90%] translate-x-4 translate-y-4 rounded-2xl border-2 border-[var(--greenShade)]"></div>

                            {/* Main Image */}
                            <div className="relative z-10 w-full max-w-md">
                                <Image width={600} height={400} src={`/assets/images/why-work-matters1.png`} alt="" className='w-[90%] mx-auto rounded-2xl'></Image>
                            </div>

                            {/* Overlapping small image */}
                            <div className="absolute -bottom-12 -left-8 z-20 w-48 sm:-bottom-16 sm:-left-12 sm:w-56">
                                <Image width={600} height={400} src={`/assets/images/why-work-matters1.png`} alt="" className='w-[90%] mx-auto rounded-2xl'></Image>
                            </div>
                        </div>

                        {/* Right Column: Text content */}
                        <div className="mt-16 font-open">

                            <h2 className="mt-2 text-4xl font-medium text-[var(--greenShade)]">
                                Flame-Retardant Excellence
                            </h2>


                            <div className="mt-8 grid grid-cols-2 gap-6 text-[var(--bodyCotent)]">
                                <FeatureList title="Protection at Every Level" items={visionItems} />
                                <FeatureList title="Key Applications" items={missionItems} />
                            </div>

                            <div className="mt-10">
                                <button className="rounded-lg bg-[var(--greenShade)] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--greenShade)]/90">
                                    MORE ABOUT US
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Moisture Management Technology  */}
            <section className="bg-[var(--beige)]/30">
                <div className="container mx-auto px-4 py-24">
                    <div className="flex items-center gap-6">
                        {/* Left Column: Text Content */}
                        <div className="text-center w-[60%]">

                            <h2 className="mt-4 text-4xl font-medium font-seirf tracking-tight text-[var(--greenShade)]">
                                Moisture Management Technology

                            </h2>

                            {/* Statistics Card */}
                            <div className="w-[80%] mx-auto mt-12 rounded-2xl bg-white p-12 text-left shadow-xl font-open">
                                <div className="space-y-8">
                                    {statsData.map((stat, index) => (
                                        <div key={index}>
                                            <h3 className="text-xl font-bold text-[var(--bodyContent)]">
                                                {stat.title}
                                            </h3>
                                            <p className="mt-2 text-base text-[var(--bodyCOntent)]">
                                                {stat.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="h-full w-[40%] overflow-hidden rounded-2xl">
                            <div className='w-[100%] mx-auto h-full relative'>

                                <Image width={600} height={400} src={`/assets/images/why-work-matters1.png`} alt="" className='w-[90%] mx-auto rounded-2xl'></Image>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AquaFree™ Waterless Dyeing  */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column: Images */}
                        <div className="relative h-[550px] flex items-center justify-center">
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
                        <div>
                            <h2 className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4 tracking-tight">
                                AquaFree™ Waterless Dyeing

                            </h2>

                            <h3 className='text-[var(--deepOcean)] font-semibold text-2xl font-open'>Sustainable Innovation</h3>

                            <p className="textStyle2 font-open text-justify mb-2">
                                Traditional textile dyeing consumes up to 200 tons of water per ton of fabric. Our AquaFree™ technology eliminates water entirely from the dyeing process.

                            </p>


                            <p className="textStyle2 font-open text-justify mb-2">
                                Using supercritical CO₂ technology, we achieve vibrant, lasting colors while drastically reducing environmental impact. The closed-loop system recycles CO₂, creating zero wastewater discharge.


                            </p>


                            <div className="flex flex-col gap-2 mt-4">

                                <p className='text-[var(--bodyContent)] text-xl font-semibold font-open'>Environmental Benefits</p>


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


                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Meets Purpose  */}
            <div className="relative bg-gray-900 font-sans text-white">


                <div className="relative container mx-auto px-4 py-16">
                    <div className="grid grid-cols-2 items-center gap-16">

                        {/* Left Column: Text Content */}
                        <div className="z-10 text-center w-[100%] mx-auto">

                            <h2 className="mt-4 font-serif text-4xl font-medium text-white">
                                Performance Meets Purpose

                            </h2>




                            {/* Stats Section */}
                            <div className="mt-10 grid grid-cols-3 justify-center gap-12 font-open">

                                <div className="space-y-3">
                                    <div>

                                        <CountUp
                                            from={0}
                                            to={4}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text text-4xl text-white"
                                        />

                                        <span className='text-2xl'>

                                        </span>

                                    </div>
                                    <p className="mt-1 text-xl text-gray-400 font-semibold">Core Technologies</p>

                                    <p>Flame-retardant, moisture-management, antimicrobial, and coated fabrics
                                    </p>
                                </div>



                                <div className="space-y-3">
                                    <div>

                                        <CountUp
                                            from={0}
                                            to={100}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text text-4xl text-white"
                                        />

                                        <span className='text-2xl'>
                                            %
                                        </span>

                                    </div>



                                    <p className="mt-1 text-xl text-gray-400 font-semibold">Water Elimination</p>

                                    <p>AquaFree™ waterless dyeing technology</p>
                                </div>



                                <div className="space-y-3">
                                    <div>

                                        <CountUp
                                            from={0}
                                            to={50}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text text-4xl text-white"
                                        />

                                        <span className='text-2xl'>
                                            +
                                        </span>

                                    </div>

                                    <p className="mt-1 text-xl text-gray-400 font-semibold">Wash Durability</p>

                                    <p>Industrial-grade performance retention</p>
                                </div>

                            </div>



                            <p className="text-lg text-gray-400 mt-20">
                                From defense contractors to medical facilities, our specialty textiles deliver engineered solutions where conventional fabrics fail. Ready to specify high-performance textiles for your next project? Our technical team is prepared to discuss custom requirements and compliance certifications.

                            </p>


                        </div>

                        {/* Right Column: Image with Overlay */}
                        <div className="relative h-full w-[80%] mx-auto min-h-[30rem] order-first lg:order-last">
                            <Image
                                src="/assets/images/why-work-matters3.png"
                                alt="Textile worker cutting blue fabric"
                                layout="fill"
                                objectFit="cover"
                                className="shadow-md"
                            />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page