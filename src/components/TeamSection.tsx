"use client";

import React from "react";
import Image from "next/image";


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

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 max-xl:hidden">
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

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="relative  group overflow-hidden rounded-md shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Default Card (Name + Role) */}
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

              {/* Hover Card (Expanded Info) */}
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

                {/* Social Links */}
                {/* <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800 text-white text-sm"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white text-sm"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white text-sm"
                  >
                    <FaInstagram />
                  </a>
                  </div> */}
                <button className="mt-4 text-white rounded-2xl bg-[var(--deepOcean)] py-2 px-4">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
