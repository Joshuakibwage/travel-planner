
// import { useState, useEffect } from "react"
import { BsSearch } from "react-icons/bs";
import ActivityCard from "../components/ActivityCard";
import Activities from "../activity.json";
import Footer from "../components/Footer";


 
 const ActivityPage = () => {

  // const [activities, setActivities] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
    
  // }, []);

   return (
     <div className="w-[90%]  mx-auto bg-slate-100">
      <h1 className="text-center text-3xl text-emerald-400 my-5">Activities</h1>
      <div className="w-3/4 shadow-md h-[40px] shadow-emerald-300 rounded-full mx-auto flex items-center px-6 border border-emerald-200">
        <input 
          placeholder="Search for activities.."
          // value={}
          // onChange={() => ()}
          className="w-full outline-none py-1"
        />
        <button >
          <BsSearch size={30} className="text-emerald-400"/>
        </button>
      </div>
        {
          Activities.length > 0
          ? (
            <div className="w-[98%] mt-10 flex flex-wrap mx-auto gap-16">
              {Activities.map((activity) => (
                <ActivityCard activity={activity} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No activities found!</h2>
            </div>
          )
        }
        <Footer />
     </div>
   )
 }
 
 export default ActivityPage;