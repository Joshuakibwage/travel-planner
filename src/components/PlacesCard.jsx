


const PlacesCard = ({destination}) => {
  return (
    <div className="max-w-xs relative overflow-hidden rounded-2xl shadow-xl group">
        <img src={destination.image} alt="pictures of capital citiesz" className="transition-transform group-hover:scale-110 duration-200"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="px-4 pb-3">
                <h1 className="text-white pb-2 "><span className="font-semibold ">Destination:</span> {destination.city}</h1>
                <p className="text-white pb-2"><span className="font-semibold ">Country:</span> {destination.country}</p>
                <p className="text-white">{destination.description}</p>
                <button className="bg-gradient-to-r from-blue-400 to-emerald-500 mt-2 px-4 py-1 rounded-full font-semibold text-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-emerald-300">
                    Learn more!
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlacesCard