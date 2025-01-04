import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Carousel = () => {

  const slides =  [
    {
      url: 'https://images.pexels.com/photos/18088906/pexels-photo-18088906/free-photo-of-skyscrapers-around-the-petronas-twin-towers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      url: 'https://images.pexels.com/photos/11313729/pexels-photo-11313729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/29891537/pexels-photo-29891537/free-photo-of-nairobi-cityscape-aerial-view-of-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/27730147/pexels-photo-27730147/free-photo-of-the-city-of-nile-and-the-river-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/4880888/pexels-photo-4880888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/3319708/pexels-photo-3319708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <div className="max-w-[1400px] h-[320px] w-full m-auto py-8 px-4 relative">
      <div style={{backgroundImage: `url(${slides[4].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        {/* left arrow chevron */}
        <div>
          <FaChevronLeft size={40} className="text-white"/>
        </div>
        {/* right arrow chevron */}
        <div>
        <FaChevronRight size={40} className="text-white"/>
        </div>
      </div>
    </div>
  )
}

export default Carousel