 import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-full h-screen bg-blue-50">
      <div className="w-[90%] h-screen mx-auto">
        <div className="mt-5 w-full">
            <h1 className="
            bg-gradient-to-r from-blue-300 to-emerald-500 bg-clip-text text-transparent text-center text-4xl font-semibold my-5">About Us</h1>
            <div className="flex w-full">
              <div className="">
                <img className="w-[80%] rounded shadow-xl group transition-transform group-hover:scale-110" src={aboutImage} alt="" />
              </div>
              <div>
                <p className="text-lg leading-normal p-4">Welcome to Nomadic, your ultimate companion for unforgettable travel adventures! We’re here to inspire, guide, and empower explorers like you to embrace the beauty of our world.</p> <br />

                <p className="text-lg leading-normal p-4">At Nomadic, we believe that travel is more than just visiting places—it’s about immersing yourself in cultures, meeting people, and creating stories worth sharing. Whether you're a seasoned traveler or just starting your journey, Nomadic is designed to spark your wanderlust and simplify your adventures.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About