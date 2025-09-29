import React from "react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
import LeadershipSection from "@/components/LeaderShipSection";
import TeamSection from "@/components/TeamSection";
import PandeyLeaderSection from "@/components/PandeyLeaderSection";
import {
  FaTasks,
  FaBalanceScale,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const focuses = [
  {
    icon: <FaTasks className="w-6 h-6 text-[var(--bodyContent)]" />,
    title: "Operational Discipline",
    desc: "Overseeing day-to-day management and ensuring adherence to Standard Operating Procedures (SOPs) across all departments.",
  },
  {
    icon: <FaBalanceScale className="w-6 h-6 text-[var(--bodyContent)]" />,
    title: "Cost Control",
    desc: "Monitoring expenses against budgets, preventing inefficiencies, and safeguarding profitability in every business unit.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-[var(--bodyContent)]" />,
    title: "Performance Tracking",
    desc: "Reviewing plan-versus-actual performance daily, identifying deviations, and driving corrective actions.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-[var(--bodyContent)]" />,
    title: "Customer Commitments",
    desc: "Ensuring productivity, quality, and on-time delivery remain uncompromised through every challenge.",
  },
];
const page = () => {
  return (
    <div>
      <Navbar2 />
      <LeadershipSection />
      <TeamSection />
      <section className="bg-white w-full overflow-hidden py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-[60%_40%] gap-12 px-6 max-lg:grid-cols-1 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex flex-row gap-4">
              <h2 className="text-4xl font-medium font-srif text-[var(--greenShade)] mb-10 leading-snug">
                Mr. Modi's Leadership Focus
              </h2>
              <div className="relative w-[40px] h-[40px] overflow-hidden">
                {/* Use <img /> for GIF to preserve animation */}
                <img
                  src="/assets/gifs/leadership-focus.gif" // replace with your GIF path
                  alt="Leadership Focus Animation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* <div className="font-open text-[var(--bodyContent)]">
              <h3 className="text-2xl font-semibold">Mr. Pradeep Modi</h3>

              <p className="text-sm tracking-widest text-[var(--greenShade)] font-semibold uppercase mb-2">
                The driving force behind Just Textiles' transformation from a
                modest operation into one of India's most respected integrated
                textile processors. Mr. Modi defines our strategic direction
                while balancing expansion, innovation, and sustainability.
              </p>

              <p className="text-sm tracking-widest text-[var(--greenShade)] font-semibold uppercase mb-2">
                As both Managing Director and Head of Operations, he ensures our
                plans translate into action through hands-on leadership and
                meticulous attention to detail.
              </p>
            </div> */}

            <div className="space-y-8">
              {focuses.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{f.icon}</div>
                  <div className="text-[var(--bodyContent)] font-open">
                    <h3 className="text-lg font-semibold  mb-1">{f.title}</h3>
                    <p className="text-base font-medium max-w-[80%] text-justify">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE + GOOGLE REVIEW CARD */}
          <div className="relative">
            <div className="relative w-[80%] mx-auto h-[500px] rounded-md overflow-hidden">
              <Image
                src="/assets/images/modi-leadership-focus.png" // replace with your image
                alt="Leadership Focus"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Card - like Google Review */}
            <div className="absolute w-[90%] -bottom-10 -left-30 bg-white p-6 shadow-xl rounded-md ">
              <h3 className="text-2xl font-medium text-[var(--greenShade)] font-serif mb-4">
                " The Modi Approach
              </h3>
              <p className="text-base font-semibold mb-4 border-l-2 border-[var(--deepOcean)] pl-4 text-[var(--bodyContent)] font-open">
                Leadership in textiles isn't about corner offices - it's about
                factory floors, customer conversations, and relentless attention
                to quality.
              </p>
              <p className="text-sm leading-relaxed mb-3 text-[var(--bodyContent)] font-open">
                Mr. Modi's leadership style combines strategic foresight with
                operational rigor, creating an environment where innovation
                thrives without losing sight of discipline and reliability.
              </p>
              <p className="text-sm leading-relaxed text-[var(--bodyContent)] font-open">
                His hands-on approach ensures that department heads understand
                both the
                <span className="italic"> "what" </span>
                and the
                <span className="italic"> "why" </span>
                behind efficient resource utilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PandeyLeaderSection />
    </div>
  );
};

export default page;
