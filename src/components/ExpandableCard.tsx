"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";

type CardProps = {
  id: number;
  title: string;
  image: string;
  shortContent: ReactNode;
  fullContent: ReactNode;
  extraContent: ReactNode;
};

export default function ExpandableCard({
  id,
  title,
  image,
  shortContent,
  fullContent,
  extraContent,
}: CardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      onMouseLeave={() => setExpanded(false)}
      className={`relative overflow-hidden transition-all duration-500 cursor-pointer
        border border-gray-400 rounded-lg bg-[var(--beige)]/30 group
        hover:bg-[var(--greenShade)]
      `}
      style={{
        height: expanded ? "auto" : "240px",
      }}
    >
      <div>
        <div
          className={`container max-w-7xl mx-auto flex flex-row ${
            expanded ? "items-center" : "items-start"
          } justify- gap-6 p-6 group-hover:p-0`}
        >
          {/* Circular Image */}
          <div
            className={`hidden ${
              expanded ? "w-64 h-64" : "w-44 h-44 mt-6"
            } rounded-full overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:block`}
          >
            <Image
              src={image}
              alt={title}
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content on Right */}
          <div className="flex-1 font-open group-hover:my-12 ml-10 mt-10">
            <h3 className="text-[var(--bodyContent)] text-2xl font-semibold mb-2 group-hover:text-gray-100 font-open">
              {String(id).padStart(2, "0")} - {title}
            </h3>
            <div className="text-[var(--bodyContent)] group-hover:text-gray-200 font-open text-lg font-medium leading-relaxed">
              {expanded ? fullContent : shortContent}
            </div>

            <div className="text-gray-200 font-open text-lg leading-relaxed mt-10">
              {expanded && extraContent}
            </div>

            <button className="mt-2 hidden group-hover:block text-[var(--bodyContent)] font-semibold group-hover:text-gray-200 group-hover:underline">
              {expanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* {extraContent != null && extraContent != undefined && (
          <div>{extraContent}</div>
        )} */}
      </div>
    </div>
  );
}
