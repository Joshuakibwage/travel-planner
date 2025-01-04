import { LuTreePalm } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="w-full h-[20%] ">
        <div className="
        w-[98%] h-[90%] my-2 mx-auto flex flex-col items-center space-y-4 shadow-lg rounded-md backdrop-blur-md py-4 md:flex-row md:justify-around">
         <div className="flex items-center">
            <LuTreePalm className="text-emerald-400" size={40}/>
            <div className="span tracking-tight text-3xl">
                <b className="bg-gradient-to-r from-blue-400 to-emerald-600 text-transparent bg-clip-text font-circular-web">Nomadic</b>
            </div>
            <div>
             
            </div>
         </div>
         <div>
          <ul className="flex flex-col items-center">
            <li className="font-semibold">Quick Links</li>
            <Link className="hover:text-emerald-600 text-emerald-400" to='/'><li>Home</li></Link>
            <Link className="hover:text-emerald-600 text-emerald-400" to='/activities'><li>Activities</li></Link>
            <Link className="hover:text-emerald-600 text-emerald-400" to='/places'><li>Places</li></Link>
            <Link className="hover:text-emerald-600 text-emerald-400" to='/about'><li>About</li></Link>
            <Link className="hover:text-emerald-600 text-emerald-400" to='/contact'><li>Contact Us</li></Link>
          </ul>
         </div>
         <div>
          <ul className="flex flex-col items-center">
            <li className="font-semibold">Support</li>
            <Link to='faq'><li className="text-emerald-400 hover:text-emerald-600">FAQS</li></Link>
          </ul>
         </div>
         <div className="space-y-1">
          <h2 className="font-semibold">Our Socials</h2>
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-blue-600" size={20}/>
              <p className="hover:text-emerald-600 text-emerald-400">Facebook</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaSquareInstagram className="text-pink-500" size={20}/>
              <p className="hover:text-emerald-600 text-emerald-400">Instagram</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaTwitter className="text-cyan-500" size={20}/>
              <p className="hover:text-emerald-600 text-emerald-400">Twitter</p>
            </div>
            <div className="flex items-center space-x-4">
             <FaYoutube className="text-red-500" size={20}/>
             <p className="hover:text-emerald-600 text-emerald-400">Youtube</p>
            </div>
         </div>
                            
        </div>
        <div className="text-center mb-2 w-full bg-emerald-200">
          <p className="py-2 ">&copy;2025 All rights reserved Nomadics.</p>
        </div>
    </footer>
  )
}

export default Footer