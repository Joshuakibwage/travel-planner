
import { BsSearch } from "react-icons/bs";
import ActivityCard from "../components/ActivityCard";
import Activities from "../utils/activity.json";
import Footer from "../components/Footer";


 
 const ActivityPage = () => {

   return (
     <>
     <div className="w-[90%]  mx-auto bg-slate-100">
      <h1 className="text-center text-3xl text-emerald-400 my-5">Activities</h1>
      <div className="w-3/4 shadow-md h-[40px] shadow-emerald-100 rounded-full mx-auto flex items-center px-6 ">
        <input 
          placeholder="Search for activities.."
          className="w-full outline-none py-1 rounded-full pl-4"
        />
        <button >
          <BsSearch size={30} className="text-emerald-400"/>
        </button>
      </div>
        {
          Activities.length > 0
          ? (
            <div className="w-[98%] mt-10 flex flex-wrap items-center justify-center mx-auto gap-16">
              {Activities.map((activity) => (
                <ActivityCard activity={activity} key={activity.id} />
              ))}
            </div>
          ) : (
            <div>
              <h2>No activities found!</h2>
            </div>
          )
        }
        
     </div>
     <Footer />
     </>
   )
 }
 
 export default ActivityPage;