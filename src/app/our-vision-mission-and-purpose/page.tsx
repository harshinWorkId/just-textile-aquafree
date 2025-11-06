import ContentBlock from "@/components/ContentBlock";
import ContentBlock2 from "@/components/ContentBlock2";
import QualitySection from "@/components/QualitySection";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { FaRecycle } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { RiWaterFlashFill } from "react-icons/ri";

import { GiSewingNeedle } from "react-icons/gi";
import { FaCogs, FaClock } from "react-icons/fa";
import EmpowerSection from "@/components/EmpowerSection";
import WeavingTommorrow from "@/components/WeavingTommorrow";
type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Tailored Solutions",
    description:
      "We understand that every brand has unique requirements. Our team develops customized dyeing, finishing, and printing solutions that meet specific performance and aesthetic needs.",
    icon: <GiSewingNeedle className="w-8 h-8 text-[var(--deepOcean)]" />,
  },
  {
    title: "Technical Excellence",
    description:
      "Our technical expertise ensures optimal results across diverse fabric types and applications, from athletic wear to luxury textiles.",
    icon: <FaCogs className="w-8 h-8 text-[var(--deepOcean)]" />,
  },
  {
    title: "On‑Time Deliveries",
    description:
      "Reliable delivery schedules support your production timelines and launch dates, backed by robust supply chain management.",
    icon: <FaClock className="w-8 h-8 text-[var(--deepOcean)]" />,
  },
];

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Water Recycling Systems",
    description:
      "Advanced water treatment and recycling technologies that dramatically reduce freshwater consumption in our processes.",
    icon: <FaRecycle className="text-[var(--deepOcean)] w-8 h-8" />,
  },
  {
    title: "Chemical Load Reduction",
    description:
      "Innovative formulations and processes that minimize chemical usage while maintaining superior fabric quality.",
    icon: <BiTestTube className="text-[var(--deepOcean)] w-8 h-8" />,
  },
  {
    title: "AquaFree™ Technology",
    description:
      "Our pioneering salt-free dyeing innovation that eliminates traditional salt requirements, reducing environmental impact.",
    icon: <RiWaterFlashFill className="text-[var(--deepOcean)] w-8 h-8" />,
  },
];

const steps = [
  {
    number: "01/",
    title: "Redefine Textile Processing",
    description:
      "Blending performance with responsibility to create new standards for what textile manufacturing can achieve.",
  },
  {
    number: "02/",
    title: "Support Industries & Communities",
    description:
      "Providing reliable, sustainable fabric solutions that strengthen supply chains and support local communities.",
  },
  {
    number: "03/",
    title: "Environmental Protection",
    description:
      "Leading conservation efforts through water preservation, waste reduction, and breakthrough salt-free innovations.",
  },
  {
    number: "04/",
    title: "Inspire Trust",
    description:
      "Every meter of fabric reflects our unwavering promise of quality, sustainability, and integrity.",
  },
];

export default function Page() {
  return (
    <main className="">
      <Navbar2></Navbar2>

      {/* Our vision, mission and purpose  */}
      <ContentBlock2
        title="Our Vision, Mission and Purpose"
        subtitle="line"
        description={`At Just Textiles Ltd, we're not just processing fabrics - we're weaving the future of sustainable textile manufacturing. Our commitment extends beyond quality to environmental stewardship and industry leadership. `}
        description2="Through continuous innovation, we integrate eco-friendly technologies and responsible sourcing practices to reduce our environmental footprint. Every fabric we create is designed to meet global standards of durability, comfort, and style, while minimizing waste and energy consumption."
        image="/assets/images/OurVision1.png"
      />

      <ContentBlock
        title="Our Vision"
        subtitle="line"
        description={`To be a global leader in textile processing by combining innovation, scale, and sustainability - delivering fabrics that not only meet the highest standards of quality but also preserve resources for future generations.`}
        description2="We envision a textile industry where excellence and environmental responsibility go hand in hand, setting new standards that benefit both business and planet. Our vision drives every decision, from technology investments to process innovations."
        image="/assets/images/OurVision1.png"
      />

      <QualitySection />

      {/* Industry-Leading Sustainability */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto px-6 text-justify !leading-snug">
            <h2 className="text-4xl max-lg:text-3xl max-lg:text-center font-medium text-[var(--greenShade)] font-serif leading-tight mb-6">
              Cutting-Edge Technology & R&D
            </h2>

            <div className="flex flex-row w-full gap-10 text-[var(--bodyContent)] text-base !leading-snug font-open">
              <div className="w-[50%]">
                Our commitment to innovation drives continuous investment in
                cutting-edge technologies and research & development
                initiatives. We create value-added fabrics and finishes that set
                new industry standards.
              </div>

              <div className="w-[50%]">
                Through strategic R&D partnerships and state-of-the-art
                facilities, we develop solutions that enhance fabric performance
                while reducing environmental impact. Our technical expertise
                translates market needs into tangible innovations that give our
                clients competitive advantages.
              </div>
            </div>
          </div>

          <div className="h-[0.5px] w-full bg-[var(--greenShade)] mt-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 items-center gap-12 max-lg:grid-cols-1 max-lg:gap-10 px-6">
            {/* LEFT SIDE */}
            <div>
              {/* Image */}
              <div className="relative mt-10 w-full h-[400px]   rounded-lg overflow-hidden max-lg:w-full">
                <Image
                  src="/assets/images/Research.jpg" // replace with your image
                  alt="Automation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Features */}
            <div className="space-y-8 mt-6">
              <h2 className="text-4xl max-lg:text-3xl max-lg:text-center text-[var(--greenShade)] font-medium font-serif mb-10">
                Industry-Leading Sustainability
              </h2>

              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="textStyle2 font-open font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--bodyContent)] text-base font-open">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Lasting Partnerships */}
      <section className="bg-[#fdf6ec] py-16">
        <div className="max-w-7xl mx-auto flex flex-row gap-12 px-6 max-lg:flex-col-reverse">
          {/* LEFT TEXT + CARDS */}
          <div className="w-[70%] max-lg:flex max-lg:flex-col max-lg:w-[100%]">
            <h2 className="text-4xl max-lg:text-3xl max-lg:text-center font-medium text-[var(--greenShade)] mb-6 font-serif leading-tight">
              Building Lasting Partnerships
            </h2>

            {/* Services grid  */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 font-open">
              {services.map((s, idx) => (
                <div
                  key={idx}
                  className="group border border-dashed border-gray-300 p-6 rounded-sm 
                           flex flex-col justify-between shadow-lg hover:shadow-2xl bg-white transition"
                >
                  <div>
                    <h3 className="textStyle2 !leading-snug font-semibold mb-4 font-open">
                      {s.title}
                    </h3>
                    <p className="text-[var(--bodyContent)] text-base text-justify">
                      {s.description}
                    </p>
                  </div>
                  <div
                    className="mt-4 transform transition-transform duration-500 ease-in-out 
                         group-hover:translate-x-[160px] flex justify-start px-2"
                  >
                    {s.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE + PROGRESS BAR */}
          <div className="w-[30%] max-md:w-[80%] max-lg:w-[80%] max-lg:rounded-xl mx-auto flex flex-col justify-between">
            <div className="relative w-full h-[500px] max-md:h-[16rem] max-lg:h-[400px]">
              <Image
                src="/assets/images/quality-textile.png" // replace with your textile image
                alt="Tailored Suit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <EmpowerSection />



      {/* Our Purpose: Beyond Manufacturing */}
      <section className="bg-[#fdf6ec] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 px-6 max-lg:grid-cols-1">
          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center max-lg:order-2">
            <h2 className="text-4xl max-lg:text-3xl max-lg:text-center font-medium text-[var(--greenShade)] mb-8 font-serif">
              Our Purpose: Beyond Manufacturing
            </h2>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group border-b border-gray-300 pb-4 flex gap-6 items-start"
                >
                  <div className="text-4xl group-hover:scale-[2] transform transition-transform duration-500 ease-in-out font-bold text-[var(--bodyContent)] font-serif min-w-[70px]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="textStyle2 font-open font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[var(--bodyContent))] text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT IMAGE */}
          <div className="relative w-full max-lg:w-[80%] mx-auto h-[550px] max-md:h-[16rem] max-lg:h-[400px] max-lg:order-1">
            <Image
              src="/assets/images/beyond-manufacturing.png" // replace with your image path
              alt="Textile Work"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </section>



      {/* Weaving Tommorrow  */}
      <WeavingTommorrow />






    </main>
  );
}
