import { LuTreePalm } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState(false);
            // function to toggle mobile menu
    const toggleMenu = () => {
        setMenu(!menu);
    };
            // function to set underline on active nav link
    const navLinkStyles = ({isActive}) => {
        return{
            color : isActive ? 'skyblue' : 'black',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

  return (
    <nav className="sticky z-50 top-0 left-0 backdrop-blur-md border-b border-neutral-700/50 shadow-md py-3">
        <div className="px-12 relative mx-auto text-base">
            <div className="flex justify-between items-center">
                <div className="flex items-center shrink-0">
                    <LuTreePalm className="text-emerald-400" size={30}/>
                    <div className="span tracking-tight text-3xl">
                        <b className="bg-gradient-to-r from-blue-400 to-emerald-600 text-transparent bg-clip-text font-circular-web">Nomadic</b>
                    </div>
                </div>
                <ul className="hidden md:flex space-x-5 ">
                    <NavLink style={navLinkStyles} className="hover:text-emerald-400" to="/">HOME</NavLink>
                    <li className="hover:text-emerald-400">ACTIVITIES</li>
                    <li className="hover:text-emerald-400">PLACES</li>
                    <li className="hover:text-emerald-400">ABOUT</li>
                    <li className="hover:text-emerald-400">CONTACT</li>
                </ul>
                <div className="hidden md:flex">
                    <button className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-400 to-emerald-500">Sign Up</button>
                </div>
                
                        {/* hamburger menu */}
                <div className="flex md:hidden">
                    <button onClick={toggleMenu}>
                        {menu ? <IoCloseCircle className="text-emerald-400" size={30}/> : <CgMenuGridO className="text-emerald-400" size={30}/>}
                    </button>
                </div>
            </div>
                        {/* mobile menu */}
            {menu && (
                <div className="md:hidden fixed p-12 left-0 z-20 top-14 w-full bg-slate-100 text-black flex flex-col items-center justify-center transition delay-300">
                    <ul className=" text-xl font-semibold text-center">
                        <li className="py-2 hover:text-emerald-400">HOME</li>
                        <li className="py-2 hover:text-emerald-400">ACTIVITIES</li>
                        <li className="py-2 hover:text-emerald-400">PLACES</li>
                        <li className="py-2 hover:text-emerald-400">ABOUT</li>
                        <li className="py-2 hover:text-emerald-400">CONTACT</li>
                    </ul>
                    <div>
                    <button 
                    className="sm:px-20 px-12 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-400 to-emerald-500">BOOK A TRIP
                        </button> 
                    </div>
                </div>
            )}

        </div>
    </nav>
  )
}

export default Navbar