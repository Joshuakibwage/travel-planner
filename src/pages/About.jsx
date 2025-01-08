 import aboutImage from "../assets/about.jpg";
 import missionImage from "../assets/activities/mission.jpg"

const About = () => {
  return (
    <div className="w-full  bg-slate-200">
      <div className="w-[90%] h-full  mx-auto shadow-md">
        <div className="w-full my-4">
          <h1 className="text-center text-2xl md:text-4xl text-emerald-500 py-4 font-semibold ">About Us</h1>
          <p className="text-center px-4 md:text-xl">Welcome to Nomadic, your ultimate companion for unforgettable travel adventures! We’re here to inspire, guide, and empower explorers like you to embrace the beauty of our world.</p>
        </div>
        
        <div className="md:w-full md:flex items-center mt-6 px-2">
          <div className="w-full md:w-1/2">
            <img className="object-cover object-center rounded-lg shadow-2xl" src={aboutImage} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="px-4 pt-2 md:text-xl text-center">we believe that travel is more than just visiting places—it’s about immersing yourself in cultures, meeting people, and creating stories worth sharing. Whether you're a seasoned traveler or just starting your journey, Nomadic is designed to spark your wanderlust and simplify your adventures.</p>
          </div>
        </div>
        <div className="w-full mt-10 h-screen px-2">
          <h1 className="text-center text-2xl md:text-4xl text-emerald-400 font-semibold">Our Mission</h1>
          <div className="w-full md:flex items-center">
            <div className="w-full md:w-1/2">
              <p className="px-4 pt-2 md:text-xl text-center">Our mission is simple: to connect you with incredible destinations, provide expert tips, and help you discover hidden gems across the globe. Through carefully curated guides, firsthand experiences, and community insights, we aim to make your travels seamless and memorable.</p>
            </div>
            <div className="w-full md:w-1/2 mt-8">
              <img className="rounded-lg" src={missionImage} alt="" />
            </div>
          </div>
        </div>
        
      </div>
         
    </div>
  )
}

export default About