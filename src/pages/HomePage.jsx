 import pic from "../assets/bg-hero2.jpg"

const HomePage = () => {
  return (
    <main>
        <div className="w-full relative h-screen overflow-x-hidden ">
            <img className="w-full h-screen object-cover object-center" src={pic} alt="background image" />
            <div className="w-full h-screen absolute bg-black/20 top-0 left-0">
              <div className="w-full absolute left-[5%] top-[30%] z-[10]">
                  <h1 className="
                text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-normal font-general">Travel the world <br /> with amazing people</h1>
                <p className="text-white my-3 md:text-xl">Discover breathtaking destinations, plan your perfect getaway, and book effortlessly—all in one place.</p>
                <div className=" mt-10 ">
                  <button className="bg-gradient-to-r from-blue-400 to-emerald-500 hover:bg-gradient-to-r hover:from-emerald-800 hover:to-blue-800 px-8 py-3 rounded-lg text-white font-semibold ">BOOK A TRIP!</button>
                </div>
              </div>
            
            </div>
        </div>
        <div className="w-full h-screen bg-slate-50">
            <div className="w-3/4 h-screen">
              <h2></h2>
            </div>
        </div>
        
    </main>
  )
}

export default HomePage