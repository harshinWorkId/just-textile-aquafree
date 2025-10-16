import React from 'react'
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import HomeFurnishingFabrics from '@/components/HomeFurnishingFabrics'
const page = () => {
    const BadgeIcon = ({ className }: { className?: string }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
        </svg>
    );
    return (
        <div>

            <Navbar2 />

            <section className='bg-[var(--beige)]/30 w-full mt-20 py-20'>

                <div className='max-w-7xl mx-auto'>

                    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                        <div className="text-4xl font-medium font-serif text-[var(--greenShade)] text-center">
                            <span className='text-[var(--bodyContent)] text-left text-base font-semibold font-serif'>Home Furnishing Fabrics</span><br />
                            Designed for Living Spaces
                        </div>

                        <p className="font-open text-xl font-semibold text-[var(--bodyContent)] text-center">
                            Home is where textiles create ambiance. Our home furnishing collection blends aesthetic appeal with practical durability.

                        </p>
                    </div>

                    {/* Product Range:  */}
                    <div className='mt-20'>
                        <p className='text-[var(--bodyContent)] text-2xl font-semibold font-open text-center'>Product Range:</p>

                        <div className='w-[80%] mx-auto relative space-y-12 mt-20'>




                            <HomeFurnishingFabrics imgSrc={`/assets/images/Curtains-&-Drapes.png`} listItem={["Light-filtering and blackout fabrics", "Flame-retardant materials for safety compliance", "Textured jacquards and prints for decor impact"]} title={"Curtains & Drapes"} direction={"flex-row"} />


                            <HomeFurnishingFabrics imgSrc={`/assets/images/Upholstery-Fabrics.png`} listItem={["High Martindale test fabrics for abrasion resistance", "Leather-touch and suede finishes for premium appeal", "Stain-resistant coatings for easy maintenance"]} title={"Upholstery Fabrics"} direction={"flex-row-reverse"} />


                            <HomeFurnishingFabrics imgSrc={`/assets/images/Table-&-Dining-Linen.png`} listItem={["Spill-proof finishes for stain resistance", "Quick-dry fabrics for household and commercial dining", "Jacquard and dobby designs for luxury appeal"]} title={"Table & Dining Linen"} direction={"flex-row"} />


                            <HomeFurnishingFabrics imgSrc={`/assets/images/Decorative-Fabrics.png`} listItem={["Woven jacquards, embroidered fabrics, and digital prints", "Custom shades and patterns for designers and retailers"]} title={"Decorative Fabrics"} direction={"flex-row-reverse"} />






                        </div>

                    </div>


                    {/* Why It Excels:  */}
                    <div className="w-full px-6 py-16 grid grid-cols-2 gap-12 items-center mt-20">
                        {/* Left Image with Blue Frame */}
                        <div className="relative w-[80%] mx-auto h-[400px] flex justify-center">
                            {/* Blue Frame */}
                            <div className="absolute top-6 left-6 w-full h-full bg-[var(--deepOcean)] rounded-md -z-10" />

                            {/* Main Image */}
                            <Image
                                src="/assets/images/why-work-matters1.png"
                                alt="Business Meeting"
                                fill
                                className="object-cover rounded-md shadow-lg"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="relative flex flex-col justify-center">
                            {/* Heading */}
                            <h2 className="text-4xl font-medium  text-[var(--greenShade)] font-serif leading-snug mb-6">
                                Why It Excels:
                            </h2>



                            {/* Checklist */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-[var(--bodyContent)] text-xl font-open gap-3">
                                    <span className="text-[var(--greenShade)] text-xl mt-1">✔</span>
                                    <span>
                                        <span className='font-semibold'>Design Meets Durability:</span> Fabrics that stay fresh despite heavy use.
                                    </span>
                                </li>


                                <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                    <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                    <span>
                                        <span className='font-semibold'>Custom Finishes:</span>  Flame-retardant, antimicrobial, and water-repellent coatings available.</span>
                                </li>


                                <li className="flex items-start text-[var(--bodyContent)] text-xl font-open">
                                    <span className="text-[var(--greenShade)] text-xl mr-3">✔</span>
                                    <span>
                                        <span className='font-semibold'>Market Ready:</span>  Serves both retail and wholesale furnishing clients.</span>
                                </li>

                            </ul>



                            <div className="absolute -top-26 -right-30 w-[200px] h-[200px] rounded-md -z-10 overflow-hidden opacity-50">
                                <Image
                                    src="/assets/images/blackStrip.png"
                                    alt="Business Meeting"
                                    fill
                                    className="object-cover overflow-hidden"
                                />
                            </div>
                        </div>
                    </div>


                </div>

            </section>


        </div>
    )
}

export default page