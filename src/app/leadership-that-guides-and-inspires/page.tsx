import React from "react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
import LeadershipSection from "@/components/LeaderShipSection";
import TeamSection from "@/components/TeamSection";
import PandeyLeaderSection from "@/components/PandeyLeaderSection";
import TeamMemberCard from '@/components/TeamMemberCard'

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


interface TeamMember {
  name: string;
  role: string;
  desc: string;
  desc2: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Mr. Pradeep Modi",
    role: "Managing Director",
    desc: "The driving force behind Just Textiles' transformation from a modest operation into one of India's most respected integrated textile processors. Mr. Modi defines our strategic direction while balancing expansion, innovation, and sustainability.",
    desc2:
      "As both Managing Director and Head of Operations, he ensures our plans translate into action through hands-on leadership and meticulous attention to detail.",
    image: "/assets/images/leader1.jpg",
  },
  {
    name: "Mr. Durgesh Kumar Pandey",
    role: "Head of R&D",
    desc: "At the helm of Research and Development, Mr. Pandey leads with innovation and technical mastery. His focus is on developing processes that push the textile industry forward, particularly in revolutionary waterless dyeing technology.",
    desc2:
      "His vision extends beyond the laboratory - transforming experimental concepts into scalable solutions that meet both sustainability goals and market demands.",
    image: "/assets/images/leader3.jpg",
  },
  {
    name: "Ms. Manisha Chavan",
    role: "Head of Sustainability",
    desc: "Sustainability at Just Textiles is not an afterthought - it is central to how we operate. Leading this effort is Ms. Manisha Chavan, who ensures that our environmental commitments are upheld in every process, facility, and decision.",
    desc2:
      "Her leadership guarantees that sustainability is integrated at both strategic and operational levels, making environmental responsibility a competitive advantage rather than a compliance exercise.",
    image: "/assets/images/leader2.jpg",
  },
];

const page = () => {
  return (
    <div className="">
      <Navbar2 />
      <LeadershipSection />
      <TeamSection />



      <div className="h-auto bg-[#0a4833] pt-20 px-4 sm:px-6 lg:px-8 hidden max-xl:flex flex-col space-y-12 items-center justify-center">
        {/* <h2 className='text-gray-100 text-4xl max-md:text-3xl font-serif text-center'>Leadership That Drives Excellence
        </h2> */}

        <div>
          <h2 className="text-4xl font-medium text-center text-gray-100 mb-12">
            Meet Our Leadership Team
          </h2>

          <div className="text-gray-200 text-base text-center mb-12 max-w-4xl mx-auto font-open">
            <p>
              At Just Textiles, leadership isn't confined to corner offices. Our
              executive team takes an active role in daily operations, research
              initiatives, and sustainability efforts - ensuring our company values
              are reflected in every thread we produce.
            </p>

            <p>
              Together, Mr. Modi, Mr. Pandey, and Ms. Chavan form the backbone of
              Just Textiles' leadership, combining strategic vision with hands-on
              expertise to drive our company forward.
            </p>
          </div>
        </div>
        <div className="container w-[80%] max-md:w-[90%] max-xl:w-[100%] py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-30 max-md:gap-30">
          <TeamMemberCard
            imageSrc="/assets/images/leader1.jpg" // Placeholder
            name="Mr. Pradeep Modi"
            title="Managing Director"
            des="The driving force behind Just Textiles' transformation from a modest operation into one of India's most respected integrated textile processors. Mr. Modi defines our strategic direction while balancing expansion, innovation, and sustainability."
            des2="As both Managing Director and Head of Operations, he ensures our plans translate into action through hands-on leadership and meticulous attention to detail."
          />
          <TeamMemberCard
            imageSrc="/assets/images/leader3.jpg" // Placeholder
            name="Mr. Durgesh Kumar Pandey"
            title="Head of R&D"
            des="Pioneering waterless dyeing and advanced finishing processes. Ensuring innovations translate into practical, scalable solutions for global markets."
            des2="His vision extends beyond the laboratory - transforming experimental concepts into scalable solutions that meet both sustainability goals and market demands."
          />
          <TeamMemberCard
            imageSrc="/assets/images/leader2.jpg" // Placeholder
            name="Ms. Manisha Chavan"
            title="Head of Sustainability"
            des="Embedding environmental responsibility into every process, facility, and decision. Maintaining ZLD status and driving circular economy initiatives."
            des2="Her leadership guarantees that sustainability is integrated at both strategic and operational levels, making environmental responsibility a competitive advantage rather than a compliance exercise."
          />
        </div>
      </div>


      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-medium text-center text-[var(--greenShade)] mb-12">
            Meet Our Leadership Team
          </h2>

          <div className="text-[var(--bodyContent)] text-base text-center mb-12 max-w-4xl mx-auto font-open">
            <p>
              At Just Textiles, leadership isn't confined to corner offices. Our
              executive team takes an active role in daily operations, research
              initiatives, and sustainability efforts - ensuring our company values
              are reflected in every thread we produce.
            </p>

            <p>
              Together, Mr. Modi, Mr. Pandey, and Ms. Chavan form the backbone of
              Just Textiles' leadership, combining strategic vision with hands-on
              expertise to drive our company forward.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="relative  group overflow-hidden rounded-md shadow-lg"
              >

                <div className="relative w-full h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center 
                                    transform translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-in-out z-10"
                >
                  <h3 className="font-bold font-open text-lg text-[var(--bodyContent)]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-md font-open font-medium">
                    {member.role}
                  </p>
                </div>


                <div
                  className="absolute bottom-0 left-0 right-0 bg-white p-6 text-center 
                                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20"
                >
                  <h3 className="font-bold text-lg font-open text-[var(--greenShade)]">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 text-md font-medium font-open">
                    {member.role}
                  </p>
                  <p className="text-[var(--bodyContent)] font-open text-sm mt-2">
                    {member.desc}
                  </p>
                  <p className="text-[var(--bodyContent)] font-open text-sm mt-2">
                    {member.desc2}
                  </p>


                  <button className="mt-4 text-white rounded-2xl bg-[var(--deepOcean)] py-2 px-4">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="bg-white w-full overflow-hidden py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-[60%_40%] gap-12 px-6 max-lg:grid-cols-1 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex flex-row max-lg:justify-center gap-4">
              <h2 className="text-4xl max-lg:text-3xl max-lg:text-center font-medium font-srif text-[var(--greenShade)] mb-10 leading-snug">
                Mr. Modi's Leadership Focus
              </h2>
              <div className="relative w-[40px] max-md:w-[50px] h-[40px] overflow-hidden">
                {/* Use <img /> for GIF to preserve animation */}
                <Image
                  src="/assets/gifs/leadership-focus.gif" // replace with your GIF path
                  alt="Leadership Focus Animation"
                  fill
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
                    <p className="text-base font-medium max-w-[80%] max-md:max-w-[90%] text-justify">
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
            <div className="absolute w-[90%] -bottom-10 -left-30 max-md:left-0 max-lg:left-0 bg-white p-6 shadow-xl rounded-md ">
              <h3 className="text-2xl font-medium text-[var(--greenShade)] font-serif mb-4">
                "The Modi Approach
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
