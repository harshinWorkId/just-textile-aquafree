// import AboutNavbar from "@/components/AboutNavbar";
import Navbar2 from "@/components/Navbar2";
// import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {



  return (
    <div className="relative bg-fixed bg-cover bg-center bg" style={{ backgroundImage: "url('/assets/images/bg1.png')" }}>
      <Navbar2 />

      <section className="bg-[var(--forestGreen)] w-full h-auto mt-20">

        <div className="w-[90%] mx-auto py-20">


          <div className="w-full my-0">

            <div className="flex flex-col w-full">
              <div className="relative w-[80%] h-[28rem]">
                <Image fill src={`/assets/images/home4.jpg`} alt="" className="w-full h-full"></Image>
              </div>
            </div>

            <div className="flex flex-col">

              <h2 className="text-white font-serif text-5xl">Just Textiles Ltd</h2>

            </div>


            <div className="w-full flex flex-col">
              
              <div className="relative w-[80%] h-[28rem]">
                <Image fill src={`/assets/images/home2.jpg`} alt="" className="w-full h-full"></Image>
              </div>
            </div>

          </div>


        </div>



      </section>


    </div>
  );
}
