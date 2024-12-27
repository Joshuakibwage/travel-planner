import { LuTreePalm } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import photo from "../assets/bg-footer.jpg";


const Footer = () => {
  return (
    <footer className="w-full bg-fuchsia-400 h-[20%] bg-[url('/src/assets/bg-footer.jpg')]">
        <div className="w-[90%] h-[90%] my-10 mx-auto flex justify-around shadow-lg rounded-md backdrop-blur-md py-4">
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
            <li>Quick Links</li>
            <Link to='/'><li>Home</li></Link>
            <Link to='/'><li>Activities</li></Link>
            <Link to='/'><li>Places</li></Link>
            <Link to='/'><li>About</li></Link>
            <Link to='/'><li>Contact Us</li></Link>
          </ul>
         </div>
         <div>
          <ul className="flex flex-col items-center">
            <li>Support</li>
            <li>FAQS</li>
          </ul>
         </div>
         <div>
          <h2>Our Socials</h2>
            <div className="flex items-center space-x-4">
              <FaFacebook size={20}/>
              <p>Facebook</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaSquareInstagram size={20}/>
              <p>Instagram</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaTwitter size={20}/>
              <p>Twitter</p>
            </div>
            <div className="flex items-center space-x-4">
             <FaYoutube size={20}/>
             <p>Youtube</p>
            </div>
         </div>
                            
        </div>
    </footer>
  )
}

export default Footer