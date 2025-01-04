import PlacesCard from "../components/PlacesCard";
import destinations from "../places.json";

const Places = () => {
  return (
    <div className="w-[90%] mx-auto ">
      {destinations.length > 0 ?
        (
          <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
            {destinations.map((destination) => (
              <PlacesCard destination={destination} />
            ))}
        </div>
        )  : (
          <div>
            <p>Destination not found ! </p>
          </div>
        )
    }
    </div>
  )
}

export default Places