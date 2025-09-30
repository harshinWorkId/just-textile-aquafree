import React from "react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
import { MdFactory } from "react-icons/md";
import CountUp from "@/components/CountUp";

const page = () => {
  const BadgeIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );
  return (
    <div>
      <Navbar2></Navbar2>
      {/* Daily Processing Capacity: 150,000+ Meters  */}
      <section className="w-full bg-[var(--beige)]/30 mx-auto">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-12 items-center mt-20 relative">
          {/* Left Column - Image */}
          <div className="absolute top-10 left-10 w-[35%] mx-auto h-[540px] border-6 border-sky-500 z-0"></div>

          <div className="relative w-[80%] mx-auto h-[500px]">
            <Image
              src="/assets/images/why-work-matters1.png"
              alt="Factory Robot"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Big Heading */}
            <h2 className="text-4xl font-medium text-[var(--greenShade)] font-serif leading-snug mb-6">
              Daily Processing Capacity: 150,000+ Meters
            </h2>

            {/* Description */}
            <p className="text-[var(--bodyContent)] text-lg font-semibold font-open mb-2 max-w-xl">
              Our operations are designed for continuous, high-volume
              processing.
            </p>

            {/* Check list */}
            <ul className="space-y-3 mb-8 font-open text-lg">
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Over 150,000 meters of fabric processed every single day.
              </li>
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Advanced European dyeing and finishing machines ensure precision
                at speed.
              </li>
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Capacity buffers built into the system to meet urgent orders
                without delay.
              </li>
            </ul>

            <p className="text-[var(--bodyContent)] text-lg font-semibold font-open mb-6 max-w-xl">
              This means your business benefits from on-time, uninterrupted
              supply chains, even for the largest and most complex orders.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              {/* Stats Card */}
              <div className="flex items-center gap-4 border p-6 shadow-sm font-open">
                <div className="text-[var(--bodyContent)] text-4xl">
                  <MdFactory />
                </div>
                <div>
                  <div className="flex flex-row gap-4">
                    <CountUp
                      from={0}
                      to={150000}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                    />
                    <p className="text-3xl font-bold text-[var(--bodyContent)]">
                      +
                    </p>
                  </div>

                  <p className="text-[var(--bodyContent)] text-xl font-semibold">
                    Meters.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="absolute bottom-0 -right-30 w-[40%] mx-auto h-[200px]">
              <Image
                src="/assets/images/textile.png"
                alt="Factory"
                fill
                className="object-cover rounded-md"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Monthly Output: Woven Fabrics  */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-row gap-12 items-center">
        {/* Left Image with Blue Frame */}
        <div className="flex flex-col justify-center w-[60%]">
          {/* Heading */}
          <h2 className="text-4xl font-medium  text-[var(--greenShade)] font-serif leading-snug mb-6">
            Monthly Output: Woven Fabrics
          </h2>

          {/* Description */}
          <p className="text-[var(--bodyContent)] font-semibold text-xl font-open mb-2">
            We process more than 4.5 million meters of woven fabric every month.
          </p>

          <div className="flex flex-row gap-8 mt-4">
            <div className="bg-gray-800 text-white rounded-lg p-8 text-center flex flex-col items-center justify-center shadow-lg min-w-[200px] font-open">
              <BadgeIcon className="w-12 h-12 mb-2 text-teal-400" />
              <p className="text-5xl font-bold">
                <CountUp
                  from={0}
                  to={4.5}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text font-open"
                />

                <br />
              </p>
              <span className="text-2xl">million</span>
              <p className="text-gray-300 font-semibold">meters</p>
            </div>
            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                Serving industries from apparel and uniforms to industrial and
                defense textiles.
              </li>
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                Perfect shade reproducibility across huge volumes.
              </li>
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                Strict quality control to ensure the first 100 meters look the
                same as the last 100 meters.
              </li>
            </ul>
          </div>

          <p className="text-[var(--bodyContent)] text-lg font-semibold font-open mt-6 max-w-xl">
            For international brands and government agencies, this level of
            scale and consistency makes all the difference.
          </p>
        </div>

        {/* Right Content */}
        <div className="relative w-[40%] h-[400px] flex justify-center">
          {/* Blue Frame */}
          <div className="absolute top-6 left-6 w-full h-full bg-[var(--deepOcean)] rounded-md -z-10" />

          {/* Main Image */}
          <Image
            src="/assets/images/why-work-matters1.png"
            alt="Business Meeting"
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Monthly Output: Knit Fabrics  */}
      <section className="w-full bg-[var(--grayish)]/30 mx-auto overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-12 items-center">
          {/* Left Image with Blue Frame */}
          <div className="relative w-full h-[400px] flex justify-center">
            {/* Blue Frame */}
            <div className="absolute top-6 left-6 w-full h-full bg-[var(--deepOcean)] rounded-md -z-10" />

            {/* Main Image */}
            <Image
              src="/assets/images/why-work-matters1.png"
              alt="Business Meeting"
              fill
              className="object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-4xl font-medium  text-[var(--greenShade)] font-serif leading-snug mb-6">
              Monthly Output: Knit Fabrics
            </h2>

            {/* Description */}
            <p className="text-[var(--bodyContent)] font-semibold text-xl font-open mb-2">
              Knitted fabrics demand extra care - and we deliver it with
              precision.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                Capacity: 250 tons of knit fabrics every month.
              </li>
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                Specialized for sportswear, athleisure, intimate wear, and
                activewear.
              </li>
              <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                India's first continuous scouring and bleaching line for knits,
                guaranteeing uniformity.
              </li>
            </ul>

            <p className="text-[var(--bodyContent)] text-lg font-semibold font-open mb-6 max-w-xl">
              The result? Performance-driven fabrics that meet the global demand
              for stretch, comfort, and durability.
            </p>

            <div className="absolute -top-16 -right-30 w-[200px] h-[200px] rounded-md -z-10 overflow-hidden opacity-50">
              <Image
                src="/assets/images/blackStrip.png"
                alt="Business Meeting"
                fill
                className="object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
