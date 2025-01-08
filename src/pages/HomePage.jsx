 import pic from "../assets/bg-hero.jpg";
 import { FaArrowCircleRight } from "react-icons/fa";
import SearchForm from "../components/SearchForm";
import ContactUs from "./ContactUs";
import Faq from "../components/Faq";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
 

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
                <Link to='places'>
                <button className="flex items-center text-white border font-semibold px-10 py-2 rounded-md text-2xl bg-emerald-500 hover:bg-blue-400 transition-transform hover:scale-110 delay-200 ">
                    Explore
                    <FaArrowCircleRight className="pl-2" size={30}/>
                  </button>
                </Link>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full h-screen overflow-hidden">
            <SearchForm />
              <div className="w-[90%] h-[100%] mx-auto mt-2">
                <div>
                  <h1 className="text-2xl font-semibold font-mono text-emerald-400">Popular Places</h1>
                  <p className="text-sm text-slate-600">Explore Bali's beautiful beaches, roam Rome's historic streets, or seek <br /> adventure in Switzer lands breathtaking landscape.</p>
                </div>
                
              </div>
        </div>
        <Gallery />
        <WhyChooseUs />
        <Faq />
        <ContactUs />
    </main>
  )
}

export default HomePage