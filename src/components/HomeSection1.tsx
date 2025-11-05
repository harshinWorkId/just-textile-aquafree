"use client";
import React from 'react'
import Image from 'next/image'
import Button from "@/components/Button";
import { motion } from "framer-motion"

const HomeSection1 = () => {
    return (
        <div className='w-full bg-[var(--forestGreen)] px-12 max-xl:px-4 max-md:px-4'>

            <section className="max-w-[1536px] mx-auto h-auto mt-20">

                <div className="w-full flex flex-row max-md:flex max-md:flex-col-reverse py-30 max-md:py-20">

                    <div className="flex flex-col w-[30%] max-md:w-[90%] max-md:mx-auto relative max-md:hidden">
                        <div className="relative w-[80%] max-md:w-[80%] max-xl:h-[16rem] h-[28rem]">
                            <Image fill src={`/assets/images/home4.jpg`} alt="" className="w-full h-full"></Image>
                        </div>

                        <div className="absolute bottom-10 max-xl:top-30 -right-0 w-[60%] max-md:w-[80%] h-[20rem] max-xl:h-[10rem]">
                            <Image fill src={`/assets/images/home3.jpg`} alt="" className="w-full h-full"></Image>
                        </div>
                    </div>

                    <div className="flex w-[40%] max-md:w-full mt-20">

                        <div className="w-[70%] max-md:w-full max-xl:w-[100%] max-md:px-0 mx-auto flex flex-col gap-6">


                            <h2 className="text-white font-serif text-6xl max-md:text-4xl max-xl:text-4xl max-md:text-center">Just Textiles Ltd.</h2>

                            <div className="text-white text-xl font-open space-y-6 max-xl:text-center">
                                <p>Where innovation meets responsibility in textile manufacturing
                                </p>

                                <div className="space-x-5 max-xl:space-x-4">

                                    <Button name={"Partner With Us"} color={"text-white"} bgColor={"bg-[var(--bodyContent)]"}></Button>
                                    <Button name={"Our Impact"} color={"text-[var(--deepOcean)]"} bgColor={"bg-gray-100"}></Button>

                                </div>

                            </div>

                        </div>


                    </div>


                    <div className="flex flex-col w-[30%] max-md:w-[90%] max-md:mx-auto relative">

                        <div className="relative w-[80%] max-md:w-[90%] h-[28rem] max-xl:h-[16rem]">
                            <Image fill src={`/assets/images/home2.jpg`} alt="" className="w-full h-full"></Image>
                        </div>


                        <div className="absolute -bottom-10 -right-0 w-[60%] max-md:w-[80%] h-[20rem] max-xl:h-[10rem] max-xl:top-30">
                            <Image fill src={`/assets/images/home5.jpg`} alt="" className="w-full h-full"></Image>
                        </div>

                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity }} className="absolute -left-10 max-md:left-0 -bottom-10 max-xl:top-60 max-xl:left-10 w-[160px] max-xl:w-[130px] max-xl:h-[8rem] h-[10rem]">
                            <Image fill src={`/assets/images/home1.png`} alt="" className="w-full h-full"></Image>
                        </motion.div>
                    </div>

                </div>





            </section>
        </div>

    )
}

export default HomeSection1