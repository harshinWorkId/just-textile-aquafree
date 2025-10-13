import React from 'react'
import Navbar2 from '@/components/Navbar2'
import EnvironmentalFabricSection1 from '@/components/EnvironmentalFabricSection1'
import EnvironmentalFabricSection2 from '@/components/EnvironmentalFabricSection2'
import ZeroLiquidDischarge2 from '@/components/ZeroLiquidDischarge2';
import ProcessSteps from '@/components/ProcessSteps';
import CardStack3 from '@/components/CardStack3';

import { FaHandHoldingWater, FaUserTie } from "react-icons/fa";


import { FaLeaf } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { BsLightningCharge } from "react-icons/bs";

import { LiaAwardSolid } from "react-icons/lia";



import CountUp from '@/components/CountUp';

const page = () => {
  return (
    <div>
      <Navbar2></Navbar2>

      <section className='w-full'>

        <div className="max-w-7xl">

        </div>

      </section>

      <EnvironmentalFabricSection1 />

      <EnvironmentalFabricSection2 />


      <ZeroLiquidDischarge2 />


      {/* Why it matters  */}
      <div className='h-[24rem] w-full relative'>

        <div className="w-full h-[50%] relative top-10">
          <h3 className='text-center font-serif font-semibold text-2xl text-[var(--deepOcean)]'>Why it Matters</h3>
        </div>


        <div className='w-full h-[50%] bg-[var(--grayish)]'></div>

        <div className='absolute top-[20%] w-full'>
          <ProcessSteps />

        </div>



      </div>

      {/* Case Studies & Impact Stories  */}
      <div className='w-full bg-[var(--beige)]/30'>

        <div className='max-w-7xl mx-auto py-30 space-y-12'>

          <h2 className='font-serif text-4xl text-center font-medium text-[var(--greenShade)]'>
            Case Studies & Impact Stories

          </h2>

          <CardStack3></CardStack3>


        </div>

      </div>




      {/* Success Metrics & Infographics  */}
      <div className='bg-[var(--grayish)]'>

        <div className='max-w-7xl mx-auto py-20'>
          <h2 className='text-white text-center text-4xl font-serif font-medium'>Success Metrics & Infographics</h2>
          <p className='text-gray-200 text-xl font-semibold font-open mt-10 text-center'>Our sustainability journey is backed by measurable results.</p>

          <div className='mt-10 grid grid-cols-3 gap-8 w-[80%] mx-auto'>

            {/* Water Saved  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <FaHandHoldingWater className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                Water Saved
              </h3>



              <CountUp
                from={0}
                to={215}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />

              <p className='text-[var(--bodyContent)] font-semibold'>
                million liters (2019-2024).
              </p>







            </div>


            {/* CO₂ Reduction  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <FaLeaf className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                CO₂ Reduction
              </h3>



              <CountUp
                from={0}
                to={22500}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />

              <p className='text-[var(--bodyContent)] font-semibold'>
                tons.
              </p>







            </div>


            {/* Renewable Energy Share  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <BsLightningCharge className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                Renewable Energy Share
              </h3>


              <div className='text-[var(--bodyContent)] text-3xl font-bold'>

                <CountUp
                  from={0}
                  to={42}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className=''>%</span>

              </div>


              <p className='text-[var(--bodyContent)] font-semibold'>
                of operations.
              </p>







            </div>



            {/* Farmers Supported  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <GiFarmer className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                Farmers Supported
              </h3>



              <CountUp
                from={0}
                to={2500}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
              />





              <p className='text-[var(--bodyContent)] font-semibold'>
                annually.
              </p>







            </div>


            {/* Direct Employment  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <FaUserTie className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                Direct Employment
              </h3>

              <div className='text-[var(--bodyContent)] text-3xl font-bold'>


                <CountUp
                  from={0}
                  to={1200}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className=''>+</span>


              </div>





              <p className='text-[var(--bodyContent)] font-semibold'>
                jobs in safe, compliant conditions.
              </p>

            </div>



            {/* Awards  */}
            <div className='bg-white rounded-xl p-6 flex flex-col justify-center items-center font-open'>
              <div>

                <LiaAwardSolid className='text-3xl text-[var(--deepOcean)]' />
              </div>

              <h3 className='text-xl font-semibold text-[var(--deepOcean)]'>
                Awards
              </h3>

              <div className='text-[var(--bodyContent)] text-3xl font-bold'>


                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl font-bold text-[var(--bodyContent)]"
                />

                <span className=''>+</span>


              </div>





              <p className='text-[var(--bodyContent)] font-semibold'>
                national & international recognitions.
              </p>

            </div>



          </div>
        </div>

      </div>






















    </div>
  )
}

export default page