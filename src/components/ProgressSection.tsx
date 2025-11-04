"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ProgressBarProps = {
  label: string;
  value: number | string;  // supports numbers or text (e.g. "215M")
  percent?: number;        // optional: for percentage-based bars
  full?: boolean;          // if true → full bar width
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, percent, full }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        if (full) setWidth(100);
        else if (percent) setWidth(percent);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [inView, full, percent]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between text-white font-open font-medium mb-1">
        <span>{label}</span>
        <span>{typeof value === "number" ? `${value}%` : value}</span>
      </div>

      <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-2 bg-green-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProgressSection = () => {
  const skills = [
    { label: "Less water than conventional dyeing", value: 89, percent: 89 },
    { label: "Liters saved since 2019", value: "215M", full: true }, // full width + custom value
  ];

  return (
    <div className="bg-[#0B3A47] p-6 w-[100%] rounded-xl text-white mx-auto my-10">
      {skills.map((skill) => (
        <ProgressBar
          key={skill.label}
          label={skill.label}
          value={skill.value}
          percent={skill.percent}
          full={skill.full}
        />
      ))}
    </div>
  );
};

export default ProgressSection;
