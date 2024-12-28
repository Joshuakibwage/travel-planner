import ActivityCards from "../components/ActivityCards"


const Activities = () => {
  return (
    <div className="w-full h-screen">
      <ActivityCards 
       location="Argentina"
       price={40}
      />
    </div>
  )
}

export default Activities