// components/TeamMemberCard.tsx
import React from 'react';
import Image from 'next/image';
interface TeamMemberCardProps {
    imageSrc: string;
    name: string;
    title: string;
    des: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, name, title, des }) => {
    return (
        <div className="relative bg-white pt-20 pb-8 px-6 shadow-sm text-center group">
            {/* Absolute positioning for the background pattern if needed, for now just a border */}
            <div className="absolute inset-0 border border-gray-200 rounded-lg -z-10"></div>

            {/* Placeholder for the abstract background pattern - adjust as needed */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-50 z-0"></div>

            {/* Circle for image and teal border */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-white p-1 flex items-center justify-center z-10">
                <div className="relative h-full w-full">
                    <Image
                        fill
                        src={imageSrc}
                        alt=""
                        className="object-cover rounded-full"
                    ></Image>
                </div>
            </div>

            <div className="relative z-20 mt-8 font-open"> {/* Adjusted margin-top to account for image */}
                <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wide mb-1">
                    {name}
                </h3>
                <p className="text-gray-600 text-base mb-6">
                    {title}
                </p>

                <p className='text-gray-700 mb-6'>{des}</p>
                <button className="inline-flex items-center justify-center px-6 py-2 border border-blue-400 text-sm font-medium rounded-full text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    READ MORE
                </button>
            </div>
        </div>
    );
};

export default TeamMemberCard;