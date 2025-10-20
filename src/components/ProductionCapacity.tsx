// components/ProductionCapacity.tsx
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Define the structure for our card data with TypeScript
type CapacityCardProps = {
  value: number;
  suffix?: string;
  title: string;
  description: string;
  decimals?: number;
};

// Array holding the content for the three cards
const capacityData: CapacityCardProps[] = [
  {
    value: 150000,
    title: "Meters Per Day",
    description:
      "Our facilities are powered by the latest European continuous processing machines, enabling massive daily fabric throughput.",
  },
  {
    value: 4.5,
    suffix: "M",
    title: "Woven Meters Monthly",
    description:
      "Consistent, high-quality production of woven fabrics serving diverse client needs across markets.",
    decimals: 1,
  },
  {
    value: 250,
    title: "Tons of Knits Monthly",
    description:
      "Specialized processing of knitted textiles, meeting exacting standards for domestic and international markets.",
  },
];

// A single card component that contains the animation logic
const CapacityCard: React.FC<{ card: CapacityCardProps }> = ({ card }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}

      className="relative overflow-hidden rounded-lg bg-white p-8 text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1"
    >

      <div className="absolute top-0 left-0 h-1.5 w-full bg-[var(--deepOcean)] rounded-b-md"></div>
      <div className="text-5xl font-bold text-gray-900 mb-2">
        {" "}

        {inView && (
          <CountUp
            end={card.value}
            duration={2.75}
            separator=","
            suffix={card.suffix}
            decimals={card.decimals}
            className="font-open"
          />
        )}
      </div>
      <p className="mb-4 font-semibold text-[var(--bodyContent)] font-open max-md:text-xl">{card.title}</p>{" "}

      <p className="text-[var(--bodyContent))] text-sm max-md:text-lg leading-relaxed">
        {card.description}
      </p>{" "}

    </div>
  );
};

// The main component that lays out the section
const ProductionCapacity = () => {
  return (
    // style={{ backgroundImage: "url('/assets/images/bg1.png')" }}
    <section className="py-10" >
      {" "}
      {/* Changed overall section bg to a very light gray for subtle contrast */}
      <div className="mx-auto max-w-7xl bg-white/80 py-12 px-6 lg:px-8 relative rounded-2xl ">
        <div className="text-center">
          <h2 className="text-4xl font-medium font-serif tracking-tight text-[var(--greenShade)] max-md:text-2xl">
            Our Production Capacity
          </h2>
        </div>

        <div className="absolute right-0 -top-5 max-md">
          <div className="relative w-[240px] h-[180px] max-md:h-34 max-md:w-44">
            <Image
              src="/assets/images/thread2.png"
              alt="Thread"
              fill
              objectFit="cover"
              className="h-full w-full opacity-20 overflow-hidden"
            />
          </div>
        </div>

        <div className="absolute left-10 bottom-0 max-md:-bottom-10">
          <div className="relative w-[100px] h-[100px]">
            <Image
              fill
              src="/assets/images/knitting.png"
              alt=""
              className="h-full w-full object-cover opacity-20"
            ></Image>
          </div>
        </div>

        {/* Grid for the three cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {capacityData.map((card) => (
            <CapacityCard key={card.title} card={card} />
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-[var(--bodyContent))] max-w-3xl mx-auto leading-relaxed">
          {" "}
          {/* Adjusted text color, max-width, and line-height */}
          This significant capacity makes us one of the most productive textile
          manufacturers in the region, allowing us to serve large-scale clients
          with consistent quality and reliability.
        </p>
      </div>
    </section>
  );
};

export default ProductionCapacity;
