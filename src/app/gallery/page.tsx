import React from 'react'
import Navbar2 from '@/components/Navbar2'
import GalleryComponent from "@/components/GalleryComponent"
const page = () => {
    return (
        <div>
            <Navbar2 />

            <section className='mt-20 py-20'>

                <h2 className='text-center text-4xl text-[var(--greenShade)] font-serif'>Gallery</h2>

                <div>
                    <GalleryComponent />
                </div>


            </section>



        </div>
    )
}

export default page