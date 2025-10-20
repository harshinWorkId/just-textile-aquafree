import Navbar from "@/components/Navbar2";
import ScrollToTop from "@/components/ScrollToTop";
import { cn } from "@/lib/utils";
import {
  BeakerIcon,
  ReceiptRefundIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  BarChart3Icon,
  Building2Icon,
  Droplets,
  Factory,
  FileTextIcon,
  FlaskConical,
  Leaf,
  MessageCircle,
  Recycle,
  ShieldCheck,
  ShieldCheckIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Core Pillars of Our Commitment",
};

// For Section-2
const sixPillars = [
  {
    title: "Zero Liquid Discharge",
    desc: "Complete wastewater treatment and reuse",
    icon: BeakerIcon,
  },
  {
    title: "Waterless Innovation",
    desc: "90% reduction in water consumption",
    icon: SparklesIcon,
  },
  {
    title: "Clean Energy",
    desc: "Renewable power sources",
    icon: BoltIcon,
  },
  {
    title: "Green Chemistry",
    desc: "Eco-certified materials only",
    icon: BeakerIcon,
  },
  {
    title: "Circularity",
    desc: "Waste minimization and recycling",
    icon: ReceiptRefundIcon,
  },
  {
    title: "Transparency",
    desc: "Verified impact reporting",
    icon: ChartBarSquareIcon,
  },
];

// For Section-3
const zldImpactMetrics = [
  "100% wastewater recycling rate",
  "Zero environmental discharge",
  "65% reduction in freshwater needs",
  "Elimination of groundwater contamination risk",
  "Recovery of valuable chemicals and salts",
];

// For Section-4
const processData = [
  {
    title: "Traditional Dyeing",
    desc: "200L water per kg fabric",
    icon: Droplets,
  },
  {
    title: "AquaFree™ Process",
    desc: "20L water per kg fabric",
    icon: FlaskConical,
  },
  {
    title: "Environmental Win",
    desc: "90% water savings + reduced chemical use",
    icon: Leaf,
  },
];

// For Section-5
const sustainabilityData = [
  {
    value: 45,
    title: "Renewable Energy Mix",
    desc: "Percentage of total energy from clean sources",
  },
  {
    value: 60,
    title: "Carbon Reduction",
    desc: "Decrease in CO₂ emissions vs. baseline",
  },
  {
    value: 2025,
    title: "Carbon Neutral Target",
    desc: "Year we achieve net-zero emissions",
  },
];

// For Section-6
const greenChemistryData = [
  {
    number: "01",
    title: "Eco-Certification Requirement",
    desc: "All dyes and auxiliaries must carry GOTS, OEKO-TEX, or bluesign® certification before procurement approval.",
  },
  {
    number: "02",
    title: "Hazardous Substance Elimination",
    desc: "Zero tolerance policy for ZDHC MRSL restricted chemicals including heavy metals, aromatic amines, and endocrine disruptors.",
  },
  {
    number: "03",
    title: "Continuous Innovation Partnerships",
    desc: "Collaboration with green chemistry companies to pilot bio-based dyes, enzymatic treatments, and plant-derived finishing agents.",
  },
  {
    number: "04",
    title: "Supply Chain Transparency",
    desc: "Complete chemical inventory disclosure and regular third-party testing to verify compliance and safety.",
  },
];

// For Section-8
const transparencyData = [
  {
    title: "Annual Sustainability Reports",
    desc: "Comprehensive public disclosures following GRI Standards, detailing environmental performance across water, energy, emissions, waste, and chemical management with year-over-year comparisons.",
    icon: FileTextIcon,
  },
  {
    title: "Measurable Impact Metrics",
    desc: "Science-based targets for water consumption, carbon emissions, renewable energy adoption, and waste diversion, tracked monthly and reported quarterly to stakeholders.",
    icon: BarChart3Icon,
  },
  {
    title: "Independent Validations",
    desc: "Third-party audits by accredited certification bodies including ISO 14001, Higg Index FEM assessments, and supply chain verification through recognized sustainability standards.",
    icon: ShieldCheckIcon,
  },
];

// For Section-8
const commitmentData = [
  {
    title: "Proven Results",
    desc: "90% water reduction, 60% carbon decrease, zero harmful discharge-achievements that demonstrate the viability of sustainable manufacturing.",
  },
  {
    title: "Continuous Innovation",
    desc: "Investment in emerging technologies, partnerships with sustainability pioneers, and a commitment to staying at the industry's leading edge.",
  },
  {
    title: "Transparent Reporting",
    desc: "Measurable metrics, independent verification, and public accountability ensure our claims are backed by evidence.",
  },
];

// For Section-9
const sdgGoals = [
  {
    img: "/assets/images/why-work-matters1.png",
    title: "SDG 6: Clean Water & Sanitation",
    desc: "Zero discharge systems and water recycling protect freshwater resources and aquatic ecosystems.",
  },
  {
    img: "/assets/images/why-work-matters1.png",
    title: "SDG 7: Affordable & Clean Energy",
    desc: "Solar and biomass energy transition reduces fossil fuel dependence and carbon emissions.",
  },
  {
    img: "/assets/images/why-work-matters1.png",
    title: "SDG 12: Responsible Consumption",
    desc: "Circular economy practices minimize waste and maximize resource efficiency.",
  },
  {
    img: "/assets/images/why-work-matters1.png",
    title: "SDG 13: Climate Action",
    desc: "Carbon reduction strategies and renewable energy combat climate change.",
  },
  {
    img: "/assets/images/why-work-matters1.png",
    title: "SDG 15: Life on Land",
    desc: "Pollution prevention and green chemistry protect terrestrial ecosystems and biodiversity.",
  },
];

export const paraStyle =
  "text-lg font-medium font-open text-[var(--bodyContent)] text-justify";

export default function Page() {
  return (
    <main>
      <Navbar />


      {/* Building a Sustainable Future in Textile Manufacturing */}
      <section
        id="section-1"
        className="mt-24 bg-[var(--beige)]/30 py-16 sm:py-20 "
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-10 relative">
          <div className="max-w-[80%] justify-self-center relative">
            {/* <div className="absolute rounded-md w-[110%] h-[90%] top-[5%] left-[-5%] -z-10 bg-[var(--deepOcean)]"></div> */}
            <Image
              src="/assets/images/textile-manufacturing.png"
              alt="Business meeting"
              width={500}
              height={500}
              className="object-cover w-full rounded-md hover:scale-105 transition-all"
            />
          </div>


          {/* <div className="absolute w-3/5 h-[14rem] top-4/5 -left-30  opacity-20">
            <Image src={`/assets/images/thread4.png`} fill alt="Building a Sustainable Future in Textile Manufacturing"></Image>

          </div> */}

          <div className="flex flex-col gap-8">
            <h2 className="heading">
              Building a Sustainable Future in Textile Manufacturing
            </h2>
            <p className={paraStyle}>
              Our commitment to environmental stewardship goes beyond
              compliance - it's woven into every fiber of our operations. Through
              innovative technologies and transparent practices, we're
              transforming the textile industry's environmental footprint while
              maintaining the quality and efficiency that our partners expect.
            </p>
          </div>
        </div>


        {/* <div id="section-2" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

            <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
              <h1 className="heading">Six Pillars of Environmental Excellence</h1>
              <p className={cn(paraStyle, "text-center")}>
                Our comprehensive sustainability strategy rests on six
                interconnected pillars, each addressing critical environmental
                challenges in textile manufacturing.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
              {sixPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col items-start rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--greenShade)]/10 text-[var(--greenShade)] mb-5">
                    <pillar.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="subHeading mb-2">{pillar.title}</h3>
                  <p className={cn(`${paraStyle} text-left`)}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </section>


      {/* Six Pillars of Environmental Excellence  */}
      <section id="section-2" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col gap-10">

          <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
            <h2 className="heading">Six Pillars of Environmental Excellence</h2>
            <p className={cn(paraStyle, "text-center")}>
              Our comprehensive sustainability strategy rests on six
              interconnected pillars, each addressing critical environmental
              challenges in textile manufacturing.
            </p>
          </div>


          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
            {sixPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--greenShade)]/10 text-[var(--greenShade)] mb-5 font-open">
                  <pillar.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="subHeading mb-2">{pillar.title}</h3>
                <p className={cn(`${paraStyle} text-center`)}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Zero Liquid Discharge: Not a Drop Wasted  */}
      <section id="section-3" className="bg-[var(--grayish)]/30 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 items-start gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="heading">
              Zero Liquid Discharge: Not a Drop Wasted
            </h2>

            <p className={paraStyle}>
              A Closed-Loop Water System Traditional textile dyeing and
              finishing operations are among the most water-intensive industrial
              processes, often discharging contaminated wastewater into local
              ecosystems. Our Zero Liquid Discharge system represents a
              fundamental reimagining of water management. Through advanced
              multi-stage treatment combining biological, chemical, and membrane
              technologies, we capture, purify, and recycle 100% of process
              water.
            </p>
            <p className={paraStyle}>
              <strong>The result:</strong> Zero harmful effluent, reduced
              operating costs, and complete regulatory compliance that exceeds
              even the strictest international standards.
            </p>
          </div>

          <div className="flex flex-col bg-gray-100 gap-6 rounded-2xl p-8 shadow-md">
            <h2 className="subHeading">ZLD Impact Metrics</h2>
            <ul className="space-y-4">
              {zldImpactMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-[var(--greenShade)]/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-[var(--greenShade)]" />
                  </div>
                  <p className="text-[var(--bodyContent)] font-open leading-relaxed">
                    {metric}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AquaFree™: Revolutionary Waterless Technology  */}
      <section id="section-4" className="py-16 sm:py-20 bg-[var(--beige)]/30">
        <div className="container mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Icon List */}
          <div className="flex flex-col justify-center gap-5">
            {processData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 shadow-md rounded-md"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-[var(--greenShade)]/10 text-[var(--greenShade)]">
                  <item.icon size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-medium font-serif text-[var(--deepOcean)] mb-0">{item.title}</h4>
                  <p className={paraStyle}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Heading + Description */}
          <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
            <h2 className="heading">
              AquaFree™: Revolutionary Waterless Technology
            </h2>
            <p className={paraStyle}>
              Water scarcity is one of the defining challenges of our century.
              The textile industry's conventional dyeing processes consume
              approximately 200 liters of water per kilogram of fabric-an
              unsustainable burden on global freshwater resources.
            </p>
            <p className={paraStyle}>
              Our proprietary <strong>AquaFree™ technology</strong> leverages
              breakthrough innovations in supercritical CO₂ dyeing, air-dye
              methods, and digital pigment application to achieve vibrant,
              durable coloration with up to{" "}
              <strong>
                90% less water
              </strong>{" "}
              than traditional methods.
            </p>
            <p className={paraStyle}>
              Beyond water conservation, AquaFree™ reduces energy consumption,
              eliminates wastewater treatment needs, and produces textiles with
              superior colorfastness and hand feel.
            </p>
          </div>
        </div>
      </section>


      {/* Powering Operations with Clean Energy  */}
      <section id="section-5" className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-10">


          <div className="flex flex-col gap-8">
            <h2 className="heading">Powering Operations with Clean Energy</h2>
            <div>
              <h3 className="subHeading">A Two-Pronged Energy Strategy</h3>
              <p className={paraStyle}>
                Textile manufacturing is energy-intensive, and our carbon
                footprint depends largely on our energy sources. We've
                implemented a comprehensive clean energy transition focused on
                two primary technologies:
              </p>
              <p className={paraStyle}>
                <strong>Solar Power Infrastructure:</strong> Our facilities now
                feature extensive rooftop and ground-mounted photovoltaic arrays
                generating renewable electricity. These systems provide
                consistent daytime power for lighting, machinery, and cooling
                systems
              </p>
              <p className={paraStyle}>
                <strong> Agro-Based Boilers:</strong> For process heat and steam
                generation, we've transitioned to biomass boilers fueled by
                agricultural residues—rice husks, cotton stalks, and other
                locally-sourced organic waste. This creates a circular economy
                while avoiding fossil fuel combustion.
              </p>
            </div>
          </div>

          <div className="w-[80%] h-[100%] justify-self-center relative">

            <Image
              src="/assets/images/Powering-Operations.png"
              alt="Business meeting"
              width={500}
              height={500}
              className="object-cover w-full h-[100%] rounded-md hover:scale-105 duration-500 transition-all"
            />
          </div>

          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {sustainabilityData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                {/* Circular Progress Ring */}
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      className="stroke-[var(--beige)]/30"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      className="stroke-[var(--deepOcean)] transition-all duration-700"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 64}
                      strokeDashoffset={
                        item.value <= 100
                          ? 2 * Math.PI * 64 * (1 - item.value / 100)
                          : 0
                      }
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[var(--deepOcean)] font-open">
                    {item.value}
                    {item.value <= 100 ? "%" : ""}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="subHeading !mb-2">{item.title}</h3>
                  <p className={paraStyle}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Green Chemistry: Safer Materials, Healthier Planet  */}
      <section id="section-6" className="py-16 sm:py-24 bg-[var(--grayish)]/30">
        <div className="container mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          <div className="sm:col-span-2 flex flex-col gap-6">
            <h2 className="heading">
              Green Chemistry: Safer Materials, Healthier Planet
            </h2>
            <p className={cn(paraStyle, "max-w-5xl mx-auto text-center")}>
              The chemicals used in textile processing-dyes, fixatives,
              softeners, and finishing agents-have historically included
              substances harmful to ecosystems and human health. We're changing
              that narrative through strategic partnerships with chemistry
              innovators and strict material standards.
            </p>
          </div>
          {/* Left Image */}
          <div className="relative justify-self-center">
            <div className="absolute rounded-md w-[110%] h-[90%] top-[5%] left-[-5%] -z-10 bg-[var(--deepOcean)]"></div>
            <Image
              src="/assets/images/why-work-matters1.png"
              alt="Green chemistry lab"
              width={500}
              height={500}
              className="object-cover w-full h-[26rem] rounded-md hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            <ul className="space-y-6">
              {greenChemistryData.map((item) => (
                <li
                  key={item.number}
                  className="border-t border-[var(--deepOcean)] pt-4"
                >
                  <h3 className="text-[var(--deepOcean)] text-2xl font-open font-semibold flex gap-x-3 mb-2 items-center">
                    <span>{item.number}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className={paraStyle}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Embracing Circularity: From Waste to Resource */}
      <section id="section-7" className="bg-[var(--beige)]/30 py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-20 grid grid-cols-1 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="heading">
              Embracing Circularity: From Waste to Resource
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 text-[var(--bodyContent)]">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <h3 className="subHeading">
                  Closing the Loop on Textile Waste
                </h3>
                <p className={paraStyle}>
                  The linear “take-make-dispose” model is incompatible with
                  planetary boundaries. Our circularity initiatives transform
                  textile waste from a disposal problem into a valuable resource
                  stream.
                </p>
                <p className={paraStyle}>
                  <strong>Waste Minimization:</strong> Precision cutting
                  technologies and zero-defect quality systems reduce fabric
                  waste during production by 40% compared to industry averages.
                </p>
                <p className={paraStyle}>
                  <strong>Recycling Programs:</strong> Post-industrial textile
                  scraps are mechanically and chemically recycled into new
                  fibers, keeping materials in productive use rather than
                  landfills.
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="subHeading">Pioneering Bio-Based Materials</h3>
                <p className={paraStyle}>
                  We’re actively trialing next-generation sustainable fabrics
                  including:
                </p>
                <ul
                  className={cn("list-disc list-inside space-y-1", paraStyle)}
                >
                  <li>Lyocell from sustainably harvested wood pulp</li>
                  <li>Recycled polyester from post-consumer plastic bottles</li>
                  <li>Hemp and organic cotton blends</li>
                  <li>Mushroom leather and algae-based textiles</li>
                  <li>
                    Regenerated cellulose fibers with closed-loop processing
                  </li>
                </ul>
                <p className={paraStyle}>
                  These materials reduce dependence on petroleum-based
                  synthetics and virgin cotton cultivation, both
                  resource-intensive processes with significant environmental
                  footprints.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Transparency: Accountability Through Measurement  */}
      <section id="section-8" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col gap-6">
            <h2 className="heading">
              Transparency: Accountability Through Measurement
            </h2>
            <p className={cn(paraStyle, "text-center")}>
              Sustainability claims without verification are simply marketing.
              We believe meaningful environmental progress requires rigorous
              measurement, public disclosure, and independent validation of our
              impact.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
            {transparencyData.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 relative border-t-8 border-[var(--deepOcean)]"
              >
                {/* Top Divider + Icon */}
                <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--deepOcean)] text-white">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>

                <h3 className="subHeading">{item.title}</h3>
                <p className={paraStyle}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Commitment Box */}
          <div className="bg-[var(--deepOcean)]/10 border-l-4 border-[var(--deepOcean)] rounded-md p-6 flex items-start gap-3">
            <MessageCircle className="w-10 text-[var(--deepOcean)] mt-1" />
            <p className={paraStyle}>
              <strong className="subHeading">Our commitment:</strong> If we
              can't measure it, we can't manage it. And if we can't prove it, we
              won't claim it. Transparency builds trust with customers,
              investors, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Aligned with Global Sustainability Goals  */}
      <section id="section-9" className="bg-[var(--grayish)]/30 py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-10 flex flex-col gap-10 text-center">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <h2 className="heading">
              Aligned with Global Sustainability Goals
            </h2>
            <p className={cn(paraStyle, "max-w-7xl mx-auto")}>
              Our environmental initiatives directly support the United Nations
              Sustainable Development Goals-a universal framework for addressing
              humanity's most pressing challenges. By aligning our operations
              with these globally-recognized targets, we ensure our efforts
              contribute to systemic, meaningful change.
            </p>
          </div>

          {/* SDG Cards */}
          {/* SDG Cards */}
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
            {/* First 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full justify-items-center">
              {sdgGoals.slice(0, 3).map((goal, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm w-full overflow-hidden"
                >
                  <div className="flex flex-col gap-4 p-6">
                    <h3 className="subHeading text-lg font-semibold text-[var(--deepOcean)] leading-snug !mb-0">
                      {goal.title}
                    </h3>
                    <div className="w-28 mx-auto rounded-md shadow-md overflow-hidden">
                      <img
                        src={goal.img}
                        alt={goal.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-[var(--bodyContent)] leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last 2 cards centered */}
            <div className="flex justify-center flex-wrap gap-10 w-full">
              {sdgGoals.slice(3).map((goal, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center bg-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm w-full sm:w-auto overflow-hidden"
                >
                  <div className="flex flex-col gap-4 p-6">
                    <h3 className="subHeading text-lg font-semibold text-[var(--deepOcean)] leading-snug !mb-0">
                      {goal.title}
                    </h3>
                    <div className="w-28 mx-auto rounded-md shadow-md overflow-hidden">
                      <img
                        src={goal.img}
                        alt={goal.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-[var(--bodyContent)] leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Our Commitment: Action, Impact, Accountability  */}
      <section id="section-10" className="py-16 sm:py-24 bg-[var(--beige)]/30">
        <div className="container mx-auto px-6 sm:px-10 flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col gap-6">
            <h2 className="heading">
              Our Commitment: Action, Impact, Accountability
            </h2>
            <p className={cn(paraStyle, "text-center max-w-7xl mx-auto")}>
              Sustainability isn't a destination-it's a continuous journey of
              improvement, innovation, and integrity. Our six core pillars
              represent more than environmental initiatives; they embody our
              fundamental belief that profitable business and planetary health
              are not just compatible, but interdependent.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 max-w-7xl mx-auto">
            {commitmentData.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-gray-100 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <h3 className="text-[var(--deepOcean)] text-2xl font-semibold font-open mb-4">{item.title}</h3>
                <p className={paraStyle}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p className={cn(paraStyle, "max-w-7xl mx-auto")}>
            We invite partners, investors, and industry peers to join us in
            transforming textile manufacturing. Together, we can prove that
            environmental responsibility and business excellence are not
            competing priorities-they're the same goal
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="font-open cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--deepOcean)] text-white font-semibold hover:bg-[var(--deepOcean)]/80 transition-all">
              <FileTextIcon className="w-5 h-5" />
              Download Full Sustainability Report
            </button>
            <button className="font-open cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--lightBlue)] text-[var(--deepOcean)] font-semibold hover:bg-[var(--deepOcean)] hover:text-white transition-all">
              <Building2Icon className="w-5 h-5" />
              Schedule Facility Tour
            </button>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
}
