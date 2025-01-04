import contactImage from "../assets/bg-hero4.jpg"
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";


const ContactUs = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div>
        <img 
        className="w-full h-screen object-cover object-center" 
        src={contactImage} 
        alt="image of a water body" />
      </div>
      <div className="absolute top-[10%] left-[18%] w-[60%] h-[80%] bg-white p-10">
       <div className="w-full h-full">
        <div>
          <h1 className="font-semibold text-xl font-poppins">GET IN TOUCH</h1>
          <p className="text-slate-400">24/7 We will answer your questions and problems.</p>
        </div>
        <div className="border border-slate-400 flex items-center py-4 pl-4 gap-3 w-[100%] mt-3">
          <FaRegUser size={20}/>
          <input 
            placeholder="Full Name" 
            className="w-[80%] outline-none"
          />
        </div>
        <div className="border border-slate-400 flex items-center py-4 pl-4 gap-3 w-[100%] mt-3">
          <MdOutlineMailOutline size={20} />
          <input 
            placeholder="Email" 
            className="w-[80%] outline-none"
          />
        </div>
        <div className="border border-slate-400 flex items-center py-4 pl-4 gap-3 w-[100%] mt-3">
          <HiMiniDevicePhoneMobile size={20} />
          <input 
            placeholder="Phone" 
            className="w-[80%] outline-none"
          />
        </div>
        <div className="border border-slate-400 flex items-center py-4 pl-4 gap-3 w-[100%] mt-3">
          <textarea 
            name="textarea" 
            id="textarea" 
            className="w-full outline-none " 
            placeholder="Describe your issue."
          />
        </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-400 to-emerald-400 py-4 text-xl font-semibold text-white mt-4 hover:bg-emerald-300">
            Send
          </button>
       </div>
      </div>
    </div>
  )
}

export default ContactUs