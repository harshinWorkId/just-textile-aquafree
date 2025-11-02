import { Shirt, Globe, ShoppingCart } from 'lucide-react';
import React from 'react';


interface Feature {
    icon: React.ElementType;
    step: string;
    title: string;
    description: string;
}


const features: Feature[] = [
    {
        icon: Shirt,
        step: '01',
        title: 'Innovation Lab',
        description: 'Breakthrough technologies in dyeing, finishing, and resource recovery',
    },
    {
        icon: Globe,
        step: '02',
        title: 'Verification Systems',
        description: 'Third-party audits and transparent reporting at every stage',
    },
    {
        icon: ShoppingCart,
        step: '03',
        title: 'Continuous Improvement',
        description: 'Setting new benchmarks year after year across all impact areas',
    },
];

// The main component
const BehindTheScenes: React.FC = () => {
    return (
        <section className="">
            <div className="container mx-auto px-4 py-24">
                <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                    <div className="text-4xl max-md:text-3xl font-medium font-serif text-[var(--greenShade)] text-center">
                        Behind the Scenes

                    </div>

                    <p className="font-open text-xl max-md:text-lg font-semibold text-[var(--bodyContent)] text-center">
                        This section takes you deeper into our sustainability story-exploring the real actions, detailed case studies, and verified metrics that define our commitment to Environmental Fabric Processing.


                    </p>
                </div>
                <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-20 gap-x-16 mt-20 relative">
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

                               
                                {/* {index < features.length - 1 && (
                                    <div className="ml-4 hidden h-px flex-grow bg-gray-700 md:block"></div>
                                )} */}
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

                    <div className='h-[10px] border-gray-400 rounded-4xl border w-[100%] max-md:hidden mx-auto top-10 absolute z-0'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BehindTheScenes;
