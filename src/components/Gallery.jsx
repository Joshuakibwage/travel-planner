import galleryImage from "../assets/gallery.jpg"
import galleryImage2 from "../assets/gallery2.jpg"
import galleryImage3 from "../assets/gallery3.jpg"
import galleryImage4 from "../assets/gallery4.jpg"

const Gallery = () => {
  return (
    <div className="w-full md-flex md-flex-row bg-emerald-50">
    
        <div className="flex items-center gap-4 w-3/4 mx-auto">
            <span className="border-b-2 w-10 border-emerald-500"></span>
            <p className="text-xl text-emerald-500">Our Tour Gallery</p>
        </div>
           
        
        <div className="columns-4 w-3/4 mx-auto gap-3 mt-4 ">
            <div className="break-inside-avoid">
                <img src={galleryImage2} className="rounded-md" alt="" />
            </div>
            <div className="break-inside-avoid">
                <img src={galleryImage3} alt="" />
            </div>
            <div className="break-inside-avoid">
                <img src={galleryImage4} alt="" />
            </div>
            <div className="break-inside-avoid">
                <img src={galleryImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery