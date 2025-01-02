import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from "date-fns/format";
// import { formatDate } from "date-fns";
import { FaLocationDot } from "react-icons/fa6";

const SearchForm = () => {

  const [openDate, setOpenDate] = useState(false);

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
 

  return (
    <div className="w-[90%] h-[25%] mx-auto border-2 bg-gradient-to-r from-blue-400 to-emerald-400 border-none flex flex-col py-10 space-y-4 justify-around items-center rounded-md mt-5 shadow-lg relative md:flex-row md:h-[10%]">

        <div className="flex items-center gap-4 ">
          <FaLocationDot className="text-white " size={20} />
          <input placeholder="Destination" className="outline-none py-2 pl-2 rounded w-[90%]" />
        </div>

        <div className="flex items-center gap-3">
          <FaRegCalendarAlt className="text-white " size={20} />

              {/* function to toggle the calender when someone clicks */}
          <span onClick={() => setOpenDate(!openDate)}>
            {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setdate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-[80%] z-10"
          />}
        </div>

        <div className="">
          <button className="flex items-center bg-white px-4 py-2 rounded-full hover:scale-110 transition delay-200 ease-in-out text-emerald-400 font-semibold shadow-inner">
            <IoSearchOutline size={30} className="text-emerald-400"/>
            Find my adventure
          </button>
        </div>
    </div>
  )
}

export default SearchForm