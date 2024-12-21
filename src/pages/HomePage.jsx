 import pic from "../assets/bg-hero2.jpg"

const HomePage = () => {
  return (
    <main className="w-full relative h-screen overflow-x-hidden ">
        <div>
            <img className="w-full h-screen object-cover object-center" src={pic} alt="background image" />
            <div className="w-full h-screen absolute bg-black/20 top-0 left-0">
              <div className="w-full absolute left-0 top-0 z-[10]">
                  <h1 className="text-white">Travel the world with amazing people</h1>
              </div>
            </div>
        </div>
        
    </main>
  )
}

export default HomePage