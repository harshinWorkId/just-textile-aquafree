"use client";

import Image from "next/image";
import React from "react";
import MagnetLines from "@/utils/MagnetLines";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  description2: string;
  author?: string;
  designation?: string;
  image: string;
  reverse?: boolean; // if true, swap text/image sides
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  description,
  description2,
  image,
  reverse = false,
}) => {
  return (
    <section className="relative py-12">
      <div
        className={`max-w-7xl shadow-xl rounded-2xl mx-auto py-12 px-8 grid reverse grid-cols-2 max-lg:grid-cols-1 gap-4 items-center overflow-hidden ${reverse ? "lg:flex-row-reverse" : ""
          }`}
      >
        {/* LEFT: Image with fancy frame */}

        <div className="relative flex px-10">
          {/* Blue frame effect */}
          <div className="absolute -top-6 left-10 w-[60%] max-md:w-[80%]  mx-auto h-full border-6 border-sky-500 z-10"></div>
          <Image
            src={`${image}`}
            alt={title}
            width={500}
            height={400}
            className="shadow-lg object-cover w-[80%] ml-10 h-[32rem] max-md:h-[16rem] max-md:w-[100%] relative z-20"
          />

          <div className="absolute -top-6 left-30 w-[80%] mx-auto h-full">
            <MagnetLines
              rows={9}
              columns={9}
              containerSize="60vmin"
              lineColor="black/60"
              lineWidth="0.2vmin"
              lineHeight="5vmin"
              baseAngle={0}
              style={{ margin: "2rem auto" }}
            />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="px-6 lg:px-0">
          <h2 className="text-4xl font-medium font-serif leading-tight text-[var(--greenShade)] mb-1">
            {title}
          </h2>
          {subtitle && (
            <div className="h-[3px] bg-[var(--greenShade)] w-20 mb-6"></div>
          )}
          <p className="textStyle2 text-justify font-open mb-8 leading-relaxed">
            {description}
          </p>

          <p className="textStyle2 text-justify font-open mb-8 leading-relaxed">
            {description2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
