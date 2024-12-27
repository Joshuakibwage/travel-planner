 import pic from "../assets/bg-hero.jpg";
 import { HiArrowLongRight } from "react-icons/hi2";
import SearchForm from "../components/SearchForm";


const HomePage = () => {
  return (
    <main>
        <div className="w-full relative h-screen overflow-x-hidden">
            <img className="w-full h-screen object-cover object-center" src={pic} alt="background image" />
            <div className="w-full h-screen absolute bg-black/20 top-0 left-0">
              <div className=" absolute left-[5%] top-[30%] z-[10]">
                  <h1 className="
                text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-normal font-poppins">Plan your <br /> Dream Trip with us</h1>
                <p className="text-white my-3 md:text-xl flex flex-wrap w-3/4">Discover breathtaking destinations, plan your perfect getaway, and book effortlessly—all in one place.</p>
                <div className=" mt-10 ">
                  <button className="flex items-center text-white border-2 font-semibold px-10 py-2 rounded-md text-2xl bg-emerald-500 hover:bg-emerald-400 ">
                    Explore
                    <HiArrowLongRight size={30}/>
                  </button>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full h-screen">
            <SearchForm />
        </div>
        
    </main>
  )
}

export default HomePage