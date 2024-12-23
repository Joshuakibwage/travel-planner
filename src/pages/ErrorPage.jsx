import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

  return (
    <div className="w-full h-screen bg-slate-300 ">
       <div className="w-[90%] h-screen mx-auto flex flex-col items-center justify-center">
            <h1 className="font-semibold sm:text-2xl md:text-4xl lg:text-6xl">Oops!</h1>
            <p className="text-base sm:text-xl md:2xl lg:text-4xl font-robert-regular pt-4">Sorry, an unaccepted error has occurred.</p>
            <Link to='/'><button className="bg-gradient-to-r from-blue-300 to-emerald-500 px-10 py-2 rounded-lg  mt-10 hover:bg-gradient-to-r hover:from-blue-400 hover:to-emerald-600 font-semibold text-white">Return Home</button></Link>
        </div>
    </div>
  )
}

export default ErrorPage