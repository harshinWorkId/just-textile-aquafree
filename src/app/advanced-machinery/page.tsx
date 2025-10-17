import React from "react";
import Navbar2 from "@/components/Navbar2";
import ExpandableCard from "@/components/ExpandableCard";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Shirt, Globe, ShoppingCart } from 'lucide-react';


const page = () => {
  const steps = [
    {
      number: "01/",
      title: "Consistency at Scale",
      description:
        "Bulk orders processed with uniform results across every meter.",
    },
    {
      number: "02/",
      title: "Faster Turnarounds",
      description:
        "Reduced processing times allow us to meet tight global timelines.",
    },
    {
      number: "03/",
      title: "Sustainability Built-In",
      description:
        "Continuous machines consume fewer resources compared to batch processes.",
    },
    {
      number: "04/",
      title: "Real-Time Monitoring",
      description:
        "Integrated control systems detect and correct deviations instantly, reducing errors and wastage.",
    },
    {
      number: "05/",
      title: "Future-Ready",
      description:
        "Designed to integrate with upcoming innovations like waterless dyeing and digital monitoring systems.",
    },
  ];

  const features = [
    {
      icon: Shirt,
      step: '01',
      title: 'Global Export Buyers',
      description: 'Shade continuity and reliability across millions of meters.',
    },
    {
      icon: Globe,
      step: '02',
      title: 'Defense Orders',
      description: 'Guaranteed precision in bulk uniform requirements.',
    },
    {
      icon: ShoppingCart,
      step: '03',
      title: 'Fashion & Lifestyle Brands',
      description: 'Fabrics with vibrant colors and functional finishes.',
    },
    {
      icon: ShoppingCart,
      step: '04',
      title: 'Sustainability Partners',
      description: 'Access to environmentally responsible fabrics made with ZLD and renewable energy.',
    },
  ];
  return (
    <div>
      <Navbar2></Navbar2>

      <section className="bg-white mt-30">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-sm font-semibold font-open text-[var(--bodyContent)] uppercase tracking-wide">
              Technology & Innovation
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-medium font-serif leading-tight text-[var(--greenShade)]">
              Advanced Machinery
            </h2>

            {/* Subtext */}

            <div className="space-y-4 text-[var(--bodyContent)] text-lg font-medium font-open mt-4 text-justify">
              <p className="">
                In textiles, machinery is more than steel and electronics-it's
                the foundation of quality, speed, and sustainability. At Just
                Textiles, we have built our reputation on one clear principle:
                to deliver fabrics that match global expectations, you need
                machines that set global standards.
              </p>

              <p className="">
                That's why we've consistently invested in cutting-edge European
                textile machinery, each installation carefully chosen for its
                efficiency, precision, and eco-performance. This commitment
                allows us to deliver large-scale orders without compromise,
                whether it's for global fashion retailers, high-performance
                sportswear brands, or defense and institutional buyers where
                consistency is mission critical.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="px-6 py-3 rounded-full font-open bg-[var(--deepOcean)] text-white font-semibold shadow hover:bg-[var(--deepOcean)]/90 transition">
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Robot Image */}
            <Image
              src="/assets/images/advanced-european-machinery.png"
              alt="aquafree"
              width={450}
              height={500}
              className="object-contain"
            />

            {/* Experience Card */}
            <div className="absolute bottom-6 left-0 bg-[var(--deepOcean)] text-white px-6 py-10 rounded-lg shadow-lg w-[70%]">
              {/* <h3 className="text-4xl font-bold text-blue-400">12+</h3>
              <p className="font-semibold mt-1">Years Of Experience</p> */}
              <p className="text-xl mt-2 text-white flex gap-4">
                <span>
                  <FaQuoteLeft />
                </span>
                Every machine inside our plant is more than just equipment-it is
                part of a system that guarantees uniformity, savings on
                resources, and sustainable production at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-4xl font-medium text-[var(--greenShade)] group-hover:text-white font-serif text-center my-12">
        Our Key Installations
      </h2>

      <ExpandableCard
        id={1}
        title="Greige Fabric Preparation"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Before fabrics can undergo chemical or mechanical treatment, they
            must be opened, aligned, and prepared in a uniform way. Our batching
            machines, fabric openers, and handling systems ensure smooth
            preparation.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Before fabrics can undergo chemical or mechanical treatment, they
              must be opened, aligned, and prepared in a uniform way. Our
              batching machines, fabric openers, and handling systems ensure
              smooth preparation.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Batching machines unwind and rewind greige fabric rolls into
                  uniform lots, creating continuous batches that run seamlessly
                  on processing machines.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Fabric openers remove folds, creases, and entanglements,
                  preventing uneven absorption later.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Trolleys, A-frames, and horse-shoe carriers move heavy rolls
                  across departments without damage.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Pallet systems improve bulk storage, minimizing contamination
                  from the floor.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: A poorly prepared fabric at this stage can cause
              shade variation, defects, or rejections downstream. With our
              system, every batch enters pretreatment in perfect alignment,
              ready for consistent results.
            </p>
          </div>
        }
        extraContent={""}
      />

      <ExpandableCard
        id={2}
        title="Singeing + Desizing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Surface cleaning is achieved using Ostoff singeing machines with
            desizing compartments, along with Ashima's continuous pretreatment
            line.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Surface cleaning is achieved using Ostoff singeing machines with
              desizing compartments, along with Ashima's continuous pretreatment
              line.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Singeing exposes fabric to controlled flames, burning off
                  protruding fibers. This ensures a smooth surface, reducing
                  pilling and improving print sharpness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Desizing removes starch and chemicals applied during weaving.
                  Without desizing, dyes and finishes cannot penetrate properly.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Integrated singeing + desizing saves time, steam, and
                  manpower, while delivering a cleaner, more absorbent fabric.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  The Ashima continuous range combines singeing, desizing,
                  scouring, and bleaching into one streamlined operation.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Fabrics are cleaner, smoother, and more absorbent,
              resulting in brighter prints, even dyeing, and durable finishes —
              qualities that global buyers expect.
            </p>
          </div>
        }
        extraContent={""}
      />

      <ExpandableCard
        id={3}
        title="Scouring (Jet Scour)"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Scouring removes natural oils, waxes, and dirt that prevent uniform
            dyeing. Our system combines Menzel rope washing ranges with Monforts
            weight reduction machines for synthetics.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p className="flex flex-row gap-3">
              <FaCircleArrowRight className="font-open text-white text-4xl -mt-1" />
              Scouring removes natural oils, waxes, and dirt that prevent
              uniform dyeing. Our system combines Menzel rope washing ranges
              with Monforts weight reduction machines for synthetics.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Rope washing allows large batches to be washed continuously,
                  reducing creases and mechanical strain on fabrics.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Scouring agents break down natural impurities and residual
                  lubricants from weaving.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Weight reduction machines (WR) carefully hydrolyze polyester,
                  reducing GSM while giving fabrics a softer, silkier drape.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Continuous processing saves water and ensures reproducible
                  results lot after lot.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Fabrics become uniformly absorbent, clean, and
              bright. For synthetics, the WR machine allows us to deliver
              lighter, fashion-friendly polyester with premium feel, a key
              demand for lifestyle brands.
            </p>
          </div>
        }
        extraContent={
          <div className="space-y-4">
            <p className="text-white flex flex-row gap-3">
              <FaCircleArrowRight className="text-2xl" />
              Continuous Scouring & Bleaching Machine for Knits
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  We are proud to house the first-of-its-kind continuous
                  scouring and bleaching machine for knits in India.
                  Traditionally, knits were processed in batch systems,
                  consuming high volumes of water, steam, and energy. Our
                  continuous line has changed the game:
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Prepares knitted fabrics uniformly for subsequent dyeing and
                  finishing.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Cuts down processing time significantly compared to batch
                  systems.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Reduces water and energy usage while ensuring consistent
                  brightness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Delivers softer, cleaner knits that absorb dye more
                  effectively.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Knits processed on this system have superior
              whiteness, dye uptake, and hand feel, setting a new benchmark for
              both fashion and functional wear.
            </p>
          </div>
        }
      />

      <ExpandableCard
        id={4}
        title="Mercerizing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Our Swastik chainless merceriser chemically modifies cotton to
            improve its quality and performance.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Our Swastik chainless merceriser chemically modifies cotton to improve its quality and performance.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Caustic soda treatment under tension swells the cotton fibers, increasing dye affinity and luster.
                </p>
              </div>


              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Chainless technology eliminates stress marks and distortion
                  that older mercerising machines often caused..
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Fabrics gain silk-like sheen, improved tensile strength, and
                  dimensional stability.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Dye uptake improves, resulting in brighter shades with
                  superior fastness.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Mercerized cotton is a global benchmark of premium
              quality. It elevates shirtings, dress fabrics, and high-fashion
              cottons into the luxury category, meeting the expectations of
              international buyers.
            </p>
          </div>
        }
        extraContent={""}
      />

      <ExpandableCard
        id={5}
        title="Bleaching"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            We operate a combination of Benninger bleaching ranges, double steamers, and Menzel pad-steam machines to deliver brilliant whites.

          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              We operate a combination of Benninger bleaching ranges, double steamers, and Menzel pad-steam machines to deliver brilliant whites.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Bleaching agents remove natural pigments, increasing whiteness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Benninger CBR range integrates drying, reducing processing time and stabilizing results.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Double steamers ensure chemicals penetrate evenly across wide-width fabrics.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Pad-steam bleaching reduces chemical wastage and lowers water use while maintaining brightness.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: The fabrics emerge brilliantly white, consistent across meters, and perfectly prepared for vibrant dyeing or sharp, high-definition printing.
            </p>
          </div>
        }
        extraContent={""}
      />


      <ExpandableCard
        id={6}
        title="Dyeing (Softflow, Jet, Jigger, Padder, Thermosol)"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Dyeing is at the heart of Just Textiles. Our dyehouse is designed for flexibility - handling knits, wovens, small lots, and large defense orders with equal confidence.
          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p className="flex flex-row gap-3">
              {/* <FaCircleArrowRight className="font-open text-white text-4xl -mt-1" /> */}
              Dyeing is at the heart of Just Textiles. Our dyehouse is designed for flexibility - handling knits, wovens, small lots, and large defense orders with equal confidence.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Softflow dyeing machines (MCS, Thies, Then Airflow, Pranav, Deverekha) allow liquor to circulate smoothly around the fabric, avoiding crease marks. They achieve shade reproducibility and softness, ideal for fashion and activewear.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Jigger dyeing (Yamuna, Tepa, Calico) immerses woven fabrics in controlled liquor baths repeatedly, achieving deep shade penetration and high fastness.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Padders (Kuster, Menzel E-Control) apply dyes uniformly in continuous processes, reducing liquor ratios and increasing productivity.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Thermosol ranges (Monforts, Inautex) heat-fix disperse dyes on polyester and blends, ensuring shade stability even in heavy-duty applications.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Sample machines guarantee lab-to-bulk reproducibility.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Whether it's millions of meters of defense fabric, vibrant fashion shades, or delicate blends, our dyehouse ensures absolute consistency and speed.
            </p>
          </div>
        }
        extraContent={
          <div className="flex flex-col gap-6">

            <div className="space-y-4">
              <p className="text-white flex flex-row gap-3">
                <FaCircleArrowRight className="text-2xl" />
                Continuous Dyeing Machines for Cotton & Polyester
              </p>
              <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Color continuity is the single most critical requirement in bulk orders for exports and defense. Our continuous dyeing machines are designed to handle this challenge:
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Ensures bulk shade uniformity across millions of meters.
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Advanced control systems maintain temperature, pH, and dye dosage in real time.

                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Uses less steam and water compared to traditional dyeing machines.
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Highly efficient even for blends, guaranteeing precision in mixed fiber fabrics.
                  </p>
                </div>
              </div>
              <p className="mt-3">
                Why it matters: Whether it's defense uniforms requiring strict shade matching or fashion orders demanding exact color reproduction, our machines deliver perfectly matched fabrics every single time.

              </p>
            </div>


            <div className="space-y-4">
              <p className="text-white flex flex-row gap-3">
                <FaCircleArrowRight className="text-2xl" />
                Pad-Steam Dyeing Ranges for Cotton
              </p>
              <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Cotton remains one of the most widely used fibers globally, but achieving deep, vibrant, and even shades on cotton is not simple. Our pad-steam dyeing ranges bridge that gap:
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Uses a combination of padding (for even application) and steaming (for fixation).
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Delivers intense, brilliant shades with superior fastness to washing, rubbing, and light.

                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Eliminates streaks, patches, and shade variations that often occur in batch dyeing.
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                  <p className="text-gray-100">
                    Optimized to reduce chemical wastage and improve fabric handle.
                  </p>
                </div>
              </div>
              <p className="mt-3">
                Why it matters: Global buyers expect cotton fabrics that stand out in color vibrancy and durability-our pad-steam ranges make that possible at scale.

              </p>
            </div>

          </div>

        }
      />


      <ExpandableCard
        id={7}
        title="Printing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Our printing department combines digital, rotary, and flatbed technologies for maximum flexibility.

          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Our printing department combines digital, rotary, and flatbed technologies for maximum flexibility.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Digital printers (Colorjet Earth Max) enable small runs, sampling, and rapid design changes without screens.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Rotary machines (Laxmi 12-color) handle bulk export orders with high precision
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Loop agers fix printed colors under steam for lasting durability.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Screen preparation machines (Embee, CST) ensure sharp motifs, repeat accuracy, and design clarity.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Brands get the freedom of fashion-speed sampling and the reliability of bulk exports — all under one roof.
            </p>
          </div>
        }
        extraContent={""}
      />


      <ExpandableCard
        id={8}
        title="Soaping + Reducing Clearing"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            After dyeing, soaping and reducing clearing are essential to stabilize shades.

          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              After dyeing, soaping and reducing clearing are essential to stabilize shades.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Removes unfixed dyes that would otherwise bleed during washing.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Improves wash and rub fastness for longer fabric life.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Brightens shades and gives a softer finish.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Works across all dyeing machines (softflow, jet, jigger, padder).
                </p>
              </div>
            </div>
            <p className="mt-3">
              Why it matters: Fabrics retain their vibrancy, passing global fastness standards even after repeated consumer washes.
            </p>
          </div>
        }
        extraContent={""}
      />


      <ExpandableCard
        id={9}
        title="Neutralizing (RFF 2)"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Neutralization stabilizes fabric pH after alkaline or oxidative treatments.

          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Neutralization stabilizes fabric pH after alkaline or oxidative treatments.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Neutralizes alkali residues from mercerizing or bleaching.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Balances fabric pH to safe, skin-friendly levels.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  Improves softness and avoids shade shifts during storage.
                </p>
              </div>


            </div>
            <p className="mt-3">
              Why it matters: Ensures fabrics are safe for the skin, stable during export journeys, and ready for advanced finishes.
            </p>
          </div>
        }
        extraContent={""}
      />


      <ExpandableCard
        id={10}
        title="Finishing (Wovens & Knits)"
        image="/assets/images/why-work-matters1.png"
        shortContent={
          <p className="">
            Our finishing section adds performance, look, and feel to fabrics.

          </p>
        }
        fullContent={
          <div className="space-y-4">
            <p>
              Our finishing section adds performance, look, and feel to fabrics.
            </p>
            <div className="flex flex-col text-base w-[95%] mx-auto gap-4">
              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Stenters (Yamuna, 8–10 chambers):</span> Heat-set fabrics, control width, and apply functional finishes.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Zero-Zero shrinking machines (Dhall, Monforts):</span> Stabilize shrinkage in cottons and blends.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Calenders (Kleinwefers, Kuster, Ramish, Prabhat):</span> Add gloss, smoothness, or technical compression.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Surface finishers (Lafer raising, shearing, peach machines):</span> Create warmth, texture, and peach-skin effects.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Biancalani air-finishing:</span> Adds softness and bulk without chemicals.
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Relax dryers and compactors (Santex, TubeTex):</span> Stabilize knits, improving garment life.

                </p>
              </div>

              <div className="flex flex-row gap-4">
                <FaCheck className="mt-1 h-4 w-4 flex-shrink-0 text-white" />
                <p className="text-gray-100">
                  <span className="font-bold">Inspection machines:</span> Ensure final quality consistency.
                </p>
              </div>


            </div>
            <p className="mt-3">
              Why it matters: This stage transforms raw textiles into high-performance fabrics ready for fashion, uniforms, or technical applications.
            </p>
          </div>
        }
        extraContent={""}
      />

      <section className="bg-white py-16 sm:py-24 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-row gap-12">
            <p className="w-full text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
              Special Finishing Lines
            </p>

            <h3 className="text-xl font-boldfont-open text-[var(--bodyContent)] leading-tight sm:leading-tight mb-8">
              Today's textiles are more than just fabrics-they are performance
              materials. At Just Textiles, we've invested in special finishing
              lines that transform ordinary fabrics into value-added products
              tailored to end-use requirements.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-16 items-center relative">
            {/* left side */}
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-l-[250px] rounded-t-[250px] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/why-work-matters1.png"
                  alt="Engineer working with a robotic arm in a modern facility"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* right side */}
            <div className="text-left">
              {/* <p className="text-4xl font-medium font-serif text-[var(--greenShade)] mb-4">
                Special Finishing Lines
              </p>

              <h3 className="text-xl font-boldfont-open text-[var(--bodyContent)] leading-tight sm:leading-tight mb-8">
                Today's textiles are more than just fabrics-they are performance
                materials. At Just Textiles, we've invested in special finishing
                lines that transform ordinary fabrics into value-added products
                tailored to end-use requirements.
              </h3> */}

              <div className="">
                <p className="text-[var(--deepOcean)] text-2xl font-open font-semibold leading-relaxed">
                  Our capabilities include:
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8 font-open text-justify">
                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif">01</span>
                    Antimicrobial Finishes
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Fabrics that stay fresh for longer, ideal for healthcare,
                    sportswear, and uniforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">02</span>
                    Flame-Retardant Treatments
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Critical safety requirement for defense, industrial, and
                    workwear applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">03</span>
                    Moisture Management (Wicking) Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Perfect for sportswear and active lifestyles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif -mt-6">04</span>
                    Water & Stain Repellent Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Everyday convenience for shirtings, suiting, and casual
                    wear.
                  </p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-lg text-left font-semibold text-[var(--bodyContent)] mb-3 flex flex-row gap-3 items-center">
                    <span className="text-2xl font-serif">05</span>
                    Wrinkle-Free & Easy-Care Fabrics
                  </h3>
                  <p className="text-[var(--bodyContent)] leading-snug">
                    Meeting the demands of modern, low-maintenance clothing.
                  </p>
                </div>
              </div>

              <div className="-ml-6 pl-4 border-l-2 border-l-[var(--deepOcean)] border-gray-300 mt-10">
                <p className="text-[var(--bodyContent)] text-xl font-openleading-relaxed">
                  <span className="font-semibold font-open text-[var(--bodyContent)]">
                    Why it matters:{" "}
                  </span>
                  These advanced finishes make our fabrics not just
                  aesthetically superior, but also functional and
                  high-performing, giving global buyers the edge they need in
                  competitive markets.
                </p>
              </div>
            </div>
          </div>

          {/* Folding & Packing  */}
          <div className="relative w-full flex flex-row mt-12">
            <div className="w-[100%] flex justify-center max-lg:w-full">
              <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-2xl max-md:p-6">
                {/* Arrow pointing to image (hidden on mobile) */}
                <div
                  className="absolute bg-white top-1/2 -translate-y-1/2 -left-4 w-0 h-0 
              border-t-[20px] border-t-transparent
              border-b-[20px] border-b-transparent
              border-r-[20px] border-r-white
              max-lg:hidden"
                ></div>

                {/* Heading */}
                <h3 className="text-2xl font-semibold font-open text-[var(--deepOcean)] mb-4">
                  Folding & Packing
                </h3>

                <p className="font-semibold text-lg font-open text-[var(--bodyContent)] mb-2">
                  Final presentation matters. Our folding and packing lines
                  ensure fabrics are delivered in perfect condition.
                </p>

                {/* Bullet points */}
                <ul className="list-disc text-base list-inside space-y-2 font-open text-[var(--bodyContent)]">
                  <li>
                    Enhanced wettability and absorbency for superior dye uptake
                    efficiency
                  </li>
                  <li>
                    Functional properties: antimicrobial resistance, water
                    repellency, flame retardancy
                  </li>
                  <li>
                    Dramatic energy savings by eliminating water-based finishing
                    steps
                  </li>
                  <li>
                    Compatible with cotton, polyester, viscose, and nylon fibers
                  </li>
                </ul>
              </div>
            </div>

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
          </div>
        </div>
      </section>


      {/* Utilities & Sustainability  */}
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
              Utilities & Sustainability
            </h2>

            {/* Description */}
            <p className="text-[var(--bodyContent)] text-lg font-semibold font-open mb-2 max-w-xl">
              Our utilities are designed to support scale while meeting strict sustainability commitments.
            </p>

            {/* Check list */}
            <ul className="space-y-3 mb-8 font-open text-lg">
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Boilers and thermopacs provide consistent steam for processing.
              </li>
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Air compressors ensure reliable pneumatic support for machinery.
              </li>
              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                DG sets and steam turbines guarantee uninterrupted operations.
              </li>

              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                <span><span className="font-semibold">Zero Liquid Discharge (ZLD): </span>
                  Multi-effect evaporators, ATFD, CRP plants, and RO systems recycle all water used in processing.</span>
              </li>


              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Solar power and heat recovery systems reduce carbon footprint.
              </li>

              <li className="flex items-center text-gray-800">
                <span className="text-[var(--bodyContent)] mr-2">✔</span>
                Safety systems (fire pumps, transformers, breaker panels) ensure compliance and reliability.
              </li>
            </ul>

            <p className="text-[var(--bodyContent)] text-lg font-medium font-open mb-6 max-w-xl">
              <span className="font-semibold">Why it matters:</span> We deliver large volumes without environmental compromise, meeting global buyer's sustainability benchmarks.
            </p>




          </div>
        </div>
      </section >


      {/* Why These Machines Matter */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center px-6">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-medium text-[var(--greenShade)] mb-8 font-serif">
              Why These Machines Matter
            </h2>

            <p className="text-[var(--bodyContent)] font-open text-lg mb-8">At Just Textiles, machinery is more than infrastructure-it's an enabler of trust and sustainability.</p>

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

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[550px] max-lg:h-[400px]">
            <Image
              src="/assets/images/beyond-manufacturing.png"
              alt="Textile Work"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </section>


      {/* What It Means for Our Clients  */}
      <section className="bg-[var(--beige)]/30">
        <div className="container mx-auto px-12 py-24">
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <div className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
              What It Means for Our Clients
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-16 mt-20 relative">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center z-10">

                <div className="flex flex-col w-full items-center">

                  <div className="flex-shrink-0 rounded-lg bg-gray-300 p-5">
                    <feature.icon className="h-10 w-10 text-[var(--deepOcean)]" />
                  </div>

                  {/* Step Number */}
                  <span className="text-3xl font-bold font-serif text-[var(--deepOcean)]">
                    {feature.step}
                  </span>

                </div>


                <div className="mt-6 md:mt-8">
                  <h3 className="text-xl font-open font-bold text-[var(--bodyContent)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-open text-lg text-[var(--bodyContent)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <div className='h-[10px] border-gray-400 rounded-4xl border w-[100%] mx-auto top-10 absolute z-0'>

            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default page;
