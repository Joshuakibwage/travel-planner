import { CiBookmarkPlus } from "react-icons/ci";
 
 const ActivityCard = ({activity}) => {

  // console.log(activities)
   return (
    <div>
      <div 
      className="relative max-w-xs overflow-hidden rounded-xl shadow-lg group">
        
        <img 
          src={activity.image} 
          alt="activity image" 
          className="transition-transform group-hover:scale-110 duration-200 "
        />

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">

          <div className="text-white p-4 ">

            <h1 className="font-semibold text-lg">{activity.title}</h1>
            <p className="text-base">{activity.details}</p>
            <p ><span className="font-semibold">Duration:</span> {activity.duration}</p>
            <p ><span className="font-semibold">Location: </span>{activity.location}</p>
            <button 
            className="px-4 py-1 bg-emerald-400 rounded-full my-2 font-semibold hover:bg-emerald-600"
            >
              Learn more!
            </button>
            
          </div>
          <div className="p-2">
            <CiBookmarkPlus size={30}  className="text-white hover:scale-105"/>
          </div>
        </div>
      </div>
    </div>
   )
 }
 
 export default ActivityCard

 