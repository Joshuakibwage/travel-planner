import faqImage from "../assets/faq-bg.jpg";


const Faq = () => {
  return (
   <>
       <div className="w-full h-screen overflow-hidden relative">
          <div>

            <img 
            className="w-full h-screen object-cover object-center" 
            src={faqImage}
            alt="image of a water body" />

          </div>

          <div className="absolute top-[10%] left-[18%] w-[60%] h-[80%] backdrop-blur-md p-5">
           <div className="w-full h-full">
            <div>
              <h1 
              className="text-white text-xl font-semi-bold text-center "
              >Frequently Asked Questions</h1>
            </div>

              <div className="text-white mt-6 ">
                <p className="border-b "><span className="font-semibold">Q:</span> What is Nomadics?</p>
                <p className="border-b"><span className="font-semibold">A:</span> Nomadics is a software application designed to help users plan, book, and manage their trips. </p>
              </div>

              <div className="text-white mt-6 ">
                <p className="border-b "><span className="font-semibold">Q:</span> Are the recommendations in travel apps reliable?</p>
                <p className="border-b "><span className="font-semibold">A:</span>  Recommendations are often based on user reviews and ratings. Checking multiple reviews can help ensure reliability.</p>
              </div>
              
              <div className="text-white mt-6 hidden md:block">
                <p className="border-b "><span className="font-semibold">Q:</span> Do I need internet access to use a travel app?</p>
                <p className="border-b"><span className="font-semibold">A:</span> Many features of travel apps require an internet connection, such as booking flights or accessing live updates. However, some apps offer offline functionality, like saved itineraries or maps.</p>
              </div>
            
           </div>
          </div>
        </div>
   </>
  )
}

export default Faq