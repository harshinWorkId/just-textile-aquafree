// components/FeatureCard.tsx
"use client";
import React, { useState } from 'react';

interface FeatureCardProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    

    return (
        <div
            className="relative h-[24rem] p-8 max-md:p-0 rounded-lg text-center font-open flex flex-col items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Number */}
            <div className="relative top-12 left-0 max-md:left-1/4 -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-gray-700 opacity-10 pointer-events-none z-0">
                {number}
            </div>



            <h3 className="relative z-10 text-2xl font-bold text-[var(--bodyContent)] mb-3">
                {title}
            </h3>
            <p className="relative z-10 text-[var(--bodyContent)] font-medium text-lg">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
