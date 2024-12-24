 import pic from "../assets/bg-hero2.jpg"
 import { MdAirplaneTicket } from "react-icons/md";
 import { HiArrowLongRight } from "react-icons/hi2";

const HomePage = () => {
  return (
    <main>
        <div className="w-full relative h-screen overflow-x-hidden ">
            <img className="w-full h-screen object-cover object-center" src={pic} alt="background image" />
            <div className="w-full h-screen absolute bg-black/20 top-0 left-0">
              <div className="w-3/4 absolute left-[5%] top-[20%] z-[10]">
                  <h1 className="
                text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-normal font-general">Travel the world <br /> with amazing people</h1>
                <p className="text-white my-3 md:text-xl flex flex-wrap">Discover breathtaking destinations, plan your perfect getaway, and book effortlessly—all in one place.</p>
                <div className=" mt-10 ">
                  <button className="flex items-center text-white border-2 font-semibold px-10 py-2 rounded-md text-2xl bg-emerald-500 hover:bg-emerald-400 ">
                    Explore
                    <HiArrowLongRight size={30}/>
                  </button>
                 
                </div>
              </div>
            
            </div>
        </div>
        <div className="w-full h-screen bg-slate-50">
            <div className="w-[80%] mx-auto ">
              <div className="w-full text-center top-20 font-robert-regular flex items-center justify-center">
                <MdAirplaneTicket size={50} className="text-emerald-400"/>
                <p className="text-4xl font-semibold">Featured Destinations</p>
              </div>
              <div className="w-full text-center">
                <p className="text-lg font-robert-regular">Hand picked travel experiences to the most iconic, breathtaking and exciting locations. <br />Choose your next adventure and start making memories today. </p>
              </div>
            </div>
            <div className="w-3/4 h-screen mx-auto">
              
            </div>
        </div>
        
    </main>
  )
}

export default HomePage