"use client";

// components/HomeSectionPartner.tsx
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';


const timelineItems = [
    {
        title: 'Unmatched Scale & Consistency',
        description: 'Bulk orders with perfect shade matching across millions of meters',
        activePercent: 0, // When to activate this item (0%)
    },
    {
        title: 'Sustainable & Traceable',
        description: 'ZLD certified, renewable energy powered, and transparently reported',
        activePercent: 45, // When to activate this item (45%)
    },
    {
        title: 'Innovation Driven',
        description: 'AquaFree™ technology, plasma finishing research, and continuous R&D',
        activePercent: 80, // When to activate this item (90%)
    },
    {
        title: 'Global Standards',
        description: 'ISO, OEKO-TEX certified with proven export and defense capabilities',
        activePercent: 100, // When to activate this item (90%)
    },
];

const HomeSectionPartner: React.FC = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const containerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const ul = containerRef.current;
            if (!ul) return;

            const { top, height } = ul.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const startPoint = viewportHeight * 0.8;
            const endPoint = viewportHeight * 0.2;
            const totalScrollDistance = startPoint - endPoint;

            const distanceScrolled = startPoint - top;

            let progress = (distanceScrolled / totalScrollDistance) * 100;
            progress = Math.max(0, Math.min(100, progress));

            setScrollPercent(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="bg-[var(--beige)]/30 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto space-y-10'>
                <h2 className='text-4xl max-md:text-3xl text-center text-[var(--greenShade)] font-serif'>
                    Partner With Industry Leaders
                </h2>

                <div className='space-y-0'>
                    <h3 className='text-3xl font-semibold text-[var(--deepOcean)] max-md:mb-6'>
                        Why Choose Just Textiles?
                    </h3>


                    <Image
                        src="/assets/images/HomePartner.png"
                        alt="Abstract technology"
                        width={600}
                        height={700}
                        className="rounded-2xl h-[16rem] hidden mb-6 max-md:block object-cover w-[90%] mx-auto shadow-lg"
                    />

                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Timeline Content */}
                        <div className="relative">
                            <ul ref={containerRef} className="space-y-16">
                                <div className="absolute left-2 top-2 h-full w-0.5 bg-gray-200" />


                                <div
                                    className="absolute left-2 top-2 w-0.5 bg-[var(--greenShade)] transition-height duration-300 ease-linear"
                                    style={{ height: `${scrollPercent}%` }}
                                />


                                {timelineItems.map((item, index) => {
                                    const isActive = scrollPercent >= item.activePercent;

                                    return (
                                        <li key={item.title} className="relative pl-10">
                                            <div
                                                className={`absolute left-0 top-1 w-5 h-5 rounded-full transition-colors ${isActive ? 'bg-[var(--greenShade)]' : 'bg-gray-300'
                                                    }`}
                                            />
                                            <h3
                                                className={`text-2xl font-bold transition-colors ${isActive ? 'text-[var(--bodyContent)]' : 'text-gray-400'
                                                    }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-[var(--bodyContent)] mt-2 text-lg">
                                                {item.description}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full space-y-10">
                            <Image
                                src="/assets/images/HomePartner.png"
                                alt="Abstract technology"
                                width={600}
                                height={700}
                                className="rounded-2xl h-[24rem] max-md:hidden object-cover w-full shadow-lg"
                            />
                            <div className='space-y-10'>
                                <p className='border-l border-[var(--bodyContent)] font-open px-4 text-lg'>"At Just Textiles, every fabric tells a story of quality, innovation, and responsibility. Let's create yours together."
                                </p>

                                <div className='space-x-6'>
                                    <Button name={"Partner With Us"} color={"text-white"} bgColor={"bg-[var(--bodyContent)]"}></Button>
                                    <Button name={"Our Impact"} color={"text-[var(--deepOcean)]"} bgColor={"bg-gray-100"}></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionPartner;