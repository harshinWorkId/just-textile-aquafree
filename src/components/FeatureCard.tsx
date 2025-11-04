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

    // Clone the icon to apply hover color if it's an SVG or a compatible component
    //   const coloredIcon = React.cloneElement(icon as React.ReactElement, {
    //     className: `w-16 h-16 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-orange-500'}`,
    //   });

    return (
        <div
            className="relative h-[24rem] p-8 rounded-lg text-center font-open flex flex-col items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Number */}
            <div className="relative top-12 left-0 -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-gray-700 opacity-10 pointer-events-none z-0">
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
