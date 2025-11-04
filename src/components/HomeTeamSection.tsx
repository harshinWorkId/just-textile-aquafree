import React from 'react'
import TeamMemberCard from './TeamMemberCard'
const HomeTeamSection = () => {
    return (
        <div className="h-auto bg-[#0a4833] pt-20 px-4 sm:px-6 lg:px-8 flex flex-col space-y-12 items-center justify-center">
            <h2 className='text-gray-100 text-4xl font-serif text-center'>Leadership That Drives Excellence
            </h2>
            <div className="container w-[80%] py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TeamMemberCard
                    imageSrc="/assets/images/leader1.jpg" // Placeholder
                    name="Mr. Pradeep Modi"
                    title="Managing Director"
                    des="Strategic vision combined with operational rigor. Oversees daily operations, cost control, and ensures every commitment is met with precision."
                />
                <TeamMemberCard
                    imageSrc="/assets/images/leader3.jpg" // Placeholder
                    name="Mr. Durgesh Kumar Pandey"
                    title="Head of R&D"
                    des="Pioneering waterless dyeing and advanced finishing processes. Ensuring innovations translate into practical, scalable solutions for global markets."
                />
                <TeamMemberCard
                    imageSrc="/assets/images/leader2.jpg" // Placeholder
                    name="Ms. Manisha Chavan"
                    title="Head of Sustainability"
                    des="Embedding environmental responsibility into every process, facility, and decision. Maintaining ZLD status and driving circular economy initiatives."
                />
            </div>
        </div>
    )
}

export default HomeTeamSection