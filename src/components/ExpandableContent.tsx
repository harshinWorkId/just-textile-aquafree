"use client";

import { useState, ReactNode } from "react";

interface ContentItem {
  jsx: ReactNode;       
  showInShort: boolean; // true => always visible, false => only on expand
}

interface ExpandableContentProps {
  title: string;
  description: string;
  content: ContentItem[]; 
  imageUrl: string;       
  imageAlt?: string;
}

export default function ExpandableContent({
  title,
  description,
  content,
  imageUrl,
  imageAlt = "Section image",
}: ExpandableContentProps) {
  const [expanded, setExpanded] = useState(false);

  const renderContent = (items: ContentItem[], expanded: boolean) =>
    items
      .filter((item) => expanded || item.showInShort)
      .map((item, idx) => (
        <div
          key={idx}
          className="flex flex-row items-start gap-3 font-open text-lg"
        >
          {item.jsx}
        </div>
      ));

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/* Left Image */}
      <div className="lg:w-1/2">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="rounded-xl shadow-lg object-cover w-full"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-6 leading-snug font-serif">
          {title}
        </h2>

        <p className="text-[var(--bodyContent)] font-open text-lg text-justify mb-6">
          {description}
        </p>

        <div
          className={`space-y-4 transition-all duration-500 ease-in-out overflow-hidden`}
          style={{ maxHeight: expanded ? "1000px" : "200px" }}
        >
          {renderContent(content, expanded)}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-500 font-semibold hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
