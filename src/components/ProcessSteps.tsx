// components/ProcessSteps.tsx
import React from 'react';

// 1. Define the interface for a step's data
interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

// 2. Create an array with the content for each step
const steps: ProcessStep[] = [
    {
        number: '01',
        title: 'Protecting Ecosystems',
        description: 'Local rivers, lakes, and groundwater remain free of industrial contaminants.',
    },
    {
        number: '02',
        title: 'Conserving Resources',
        description: 'Millions of liters of water are saved annually, critical in a water-scarce country like India.',
    },
    {
        number: '03',
        title: 'Setting Industry Standards',
        description: 'By combining agro-based boilers, solar power, and ZLD, Just Textiles demonstrates that large-scale manufacturing can be both profitable and sustainable.',
    },
];

const ProcessSteps = () => {
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

export default ProcessSteps;