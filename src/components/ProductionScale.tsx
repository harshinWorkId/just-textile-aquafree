
import React from 'react';
import CountUp from "./CountUp";


interface ProcessStep {
    number: string;
    title: string;
    description: string;
    countNo: number;
    countString: string;
    enable: boolean
}


const steps: ProcessStep[] = [
    {
        number: '01',
        title: 'Woven Fabrics',
        description: 'meters per month with perfect shade reproducibility across massive volumes',
        countNo: 4.5,
        countString: "M",
        enable: true,

    },
    {
        number: '02',
        title: 'Knit Processing',
        description: "tons monthly using India's first continuous scouring line for knits",
        countNo: 250,
        countString: "M",
        enable: false,

    },
    {
        number: '03',
        title: 'Daily Capacity',
        description: 'meters processed with European continuous machinery',
        countNo: 150,
        countString: "K +",
        enable: true,

    },
];

const ProductionScale = () => {
    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative max-md:w-[90%] max-md:mx-auto">

                    {/* <div
                        className="absolute left-0 top-0 hidden h-px w-full"
                        aria-hidden="true"
                    /> */}


                    <div className="relative grid grid-cols-3 max-md:grid-cols-1 gap-y-16 max-md:gap-y-10 md:gap-x-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative pt-10 max-md:pt-0">

                                <div
                                    className="absolute top-12 -left-5 flex h-10 w-10 items-center 
                             justify-center rounded-md bg-[var(--vibrantGreen)] text-lg 
                             font-bold text-white"

                                >
                                    {step.number}
                                </div>

                                {/* Card with title and description */}
                                <div className="flex flex-col gap-0 rounded-md bg-white max-md:bg-gray-100 h-54 p-6 text-[var(--bodyContent)] font-open" style={{ boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)" }}>
                                    <h3 className="text-2xl font-bold font-open text-center text-[var(--bodyContent)]">{step.title}</h3>
                                    <div className='text-center text-3xl font-bold text-[var(--bodyContent)] font-open mt-2'>
                                        <CountUp
                                            from={0}
                                            to={step.countNo}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                            className="count-up-text"
                                        />
                                        {
                                            step.enable && <span>{step.countString}</span>

                                        }
                                    </div>
                                    <p className="mt-0 text-lg text-center">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionScale;