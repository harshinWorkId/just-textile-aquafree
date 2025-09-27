"use client";


import React from "react";
import CardSwap, { Card } from "@/utils/CardSwap";

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

const ContentBlock2: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  description,
  description2,

}) => {
  return (
    <section className="relative py-24 mt-10">
      <div
        className={`max-w-7xl shadow-xl rounded-2xl mx-auto py-12 px-8 grid grid-cols-2 gap-12 items-center`}
      >
        {/* LEFT: Text */}
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

        {/* RIGHT: Image with fancy frame */}
        <div className="relative flex px-10">
          {/* Blue frame effect */}
          {/* <div className="absolute -top-6 left-10 w-[60%] mx-auto h-full border-6 border-sky-500 z-10"></div> */}

          <div className="h-[200px] w-[300px] mt-20">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={false}
            >
              <Card
                className="object-cover"
                style={{
                  backgroundImage: "url('/assets/images/ourvisioncard.png')",
                }}
              >
                <h3></h3>
                <p></p>
              </Card>
              <Card
                className="object-cover"
                style={{
                  backgroundImage: "url('/assets/images/ourmissioncard.png')",
                }}
              >
                <h3></h3>
                <p></p>
              </Card>
              <Card
                className="object-cover"
                style={{
                  backgroundImage: "url('/assets/images/ourpurposecard.png')",
                }}
              >
                <h3></h3>
                <p></p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock2;
