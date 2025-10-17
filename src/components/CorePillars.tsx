
import React from 'react';
import { ScanLine, ScrollText, Waves } from 'lucide-react';


interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}


const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Fabric Treatment',
    description: 'We do execute stabilization including reweaving & stitch repair details.',
    icon: ScanLine,
  },
  {
    number: '02',
    title: 'Artistic Direction',
    description: 'Assist collection strategies, storage, application and pest production management.',
    icon: ScrollText,
  },
  {
    number: '03',
    title: 'Satin Weaving',
    description: 'Continuous weft yarn, with as few interruptions of warp as it possible.',
    icon: Waves,
  },

  {
    number: '01',
    title: 'Fabric Treatment',
    description: 'We do execute stabilization including reweaving & stitch repair details.',
    icon: ScanLine,
  },
  {
    number: '02',
    title: 'Artistic Direction',
    description: 'Assist collection strategies, storage, application and pest production management.',
    icon: ScrollText,
  },
  {
    number: '03',
    title: 'Satin Weaving',
    description: 'Continuous weft yarn, with as few interruptions of warp as it possible.',
    icon: Waves,
  },
];


const CorePillars = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">

              <div
                className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-2
                'top-0 -translate-y-[calc(100%+1rem)] flex-col-reverse' 
                `}
              >
                {/* Arrowhead */}
                <div className="h-3 w-3 rotate-45 border-gray-300 
                  ${index % 2 !== 0 ? 'border-b border-r' : 'border-t border-l'}"
                />


                {/* Numbered circle */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-gray-500">
                  {step.number}
                </div>
              </div>

              {/* Main content card */}
              <div className="flex h-full flex-col items-start bg-slate-50 p-8 text-left">
                <step.icon className="h-12 w-12 text-orange-500" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="mt-2 text-base text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;