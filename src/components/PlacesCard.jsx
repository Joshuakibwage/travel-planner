


const PlacesCard = ({destination}) => {
  return (
    <div className="max-w-xs relative overflow-hidden rounded-2xl shadow-xl group">
        <img src={destination.image} alt="pictures of capital citiesz" className="transition-transform group-hover:scale-110 duration-200"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h1>{destination.city}</h1>
            <p>{destination.country}</p>
            <p>{destination.description}</p>
        </div>
    </div>
  )
}

export default PlacesCard