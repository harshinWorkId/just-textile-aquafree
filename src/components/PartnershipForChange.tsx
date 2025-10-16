
import React from 'react';


interface ProcessStep {
    number: string;
    title: string;
    description: string;
}


const steps: ProcessStep[] = [
    {
        number: '01',
        title: 'Brand Collaboration',
        description: 'We help global brands meet ambitious sustainability goals with certified, traceable fabrics',
    },
    {
        number: '02',
        title: 'Farmer Networks',
        description: 'Direct partnerships ensure fair prices, training, and support for sustainable agriculture practices',
    },
    {
        number: '03',
        title: 'Community Impact',
        description: 'Local employment, skills development, and social programs strengthen the communities where we operate',
    },
];

const PartnershipForChange = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative">

                    <div
                        className="absolute left-0 top-5 hidden h-px w-full"
                        aria-hidden="true"
                    />


                    <div className="relative grid grid-cols-3 gap-y-16 md:gap-x-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative pt-10">

                                <div
                                    className="absolute top-12 -left-5 flex h-10 w-10 items-center 
                             justify-center rounded-md bg-[var(--vibrantGreen)] text-lg 
                             font-bold text-white"

                                >
                                    {step.number}
                                </div>

                                {/* Card with title and description */}
                                <div className="rounded-md bg-white h-54 p-6 text-[var(--bodyContent)] font-open" style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}>
                                    <h3 className="text-xl font-semibold ">{step.title}</h3>
                                    <p className="mt-2 text-lg">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipForChange;