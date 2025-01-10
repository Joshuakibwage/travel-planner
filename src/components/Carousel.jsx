import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Carousel = ({data}) => {
   
  const [current, setCurrent] = useState(0);

  let nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  let prevSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  return (
    <div className=" w-[90%] h-[400px] mx-auto rounded-lg overflow-hidden relative mt-10 shadow-xl">
     <div 
     className="flex transition ease-out duration-400 w-full  "
     style={{
      transform: `translateX(-${current * 100}%)`,
    }}
     >
      {data.map((item, index) => {
          return <img src={item.src} alt={item.alt} key={index} />
        })};
     </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <button onClick={prevSlide}>
          <FaArrowCircleLeft
            size={30} 
            
            />
        </button>
        <button onClick={nextSlide}>
          <FaArrowCircleRight  
            size={30}
            />
        </button>
      </div>
    
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {data.map((item, index) => {
          return (
            <div onClick={() => setCurrent(index)}
            key={"circle" + index}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
            ></div>
          )
        })}
      
      </div>
    </div>
  )
}

export default Carousel


