"use client";
import React from 'react'
import Image from 'next/image'
import Button from "@/components/Button";
import { motion } from "framer-motion"

const HomeSection1 = () => {
    return (
        <div className='w-full bg-[var(--forestGreen)] px-12'>

            <section className="max-w-[1536px] mx-auto h-auto mt-20">

              

                    <div className="w-full flex flex-row py-30">

                        <div className="flex flex-col w-[30%] relative">
                            <div className="relative w-[80%] h-[28rem]">
                                <Image fill src={`/assets/images/home4.jpg`} alt="" className="w-full h-full"></Image>
                            </div>

                            <div className="absolute bottom-10 -right-0 w-[60%] h-[20rem]">
                                <Image fill src={`/assets/images/home3.jpg`} alt="" className="w-full h-full"></Image>
                            </div>
                        </div>

                        <div className="flex w-[40%] mt-20">

                            <div className="w-[70%] mx-auto flex flex-col gap-6">


                                <h2 className="text-white font-serif text-6xl">Just Textiles Ltd</h2>

                                <div className="text-white text-xl font-open space-y-6">
                                    <p>Where innovation meets responsibility in textile manufacturing
                                    </p>

                                    <div className="space-x-5">

                                        <Button name={"Partner With Us"} color={"text-white"} bgColor={"bg-[var(--bodyContent)]"}></Button>
                                        <Button name={"Our Impact"} color={"text-[var(--deepOcean)]"} bgColor={"bg-gray-100"}></Button>

                                    </div>

                                </div>

                            </div>


                        </div>


                        <div className="flex flex-col w-[30%] relative">

                            <div className="relative w-[80%] h-[28rem]">
                                <Image fill src={`/assets/images/home2.jpg`} alt="" className="w-full h-full"></Image>
                            </div>


                            <div className="absolute -bottom-10 -right-0 w-[60%] h-[20rem]">
                                <Image fill src={`/assets/images/home5.jpg`} alt="" className="w-full h-full"></Image>
                            </div>

                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity }} className="absolute -left-10 -bottom-10 w-[160px] h-[10rem]">
                                <Image fill src={`/assets/images/home1.png`} alt="" className="w-full h-full"></Image>
                            </motion.div>
                        </div>

                    </div>





            </section>
        </div>

    )
}

export default HomeSection1