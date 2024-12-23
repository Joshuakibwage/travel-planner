import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

  return (
    <div className="w-full h-screen bg-slate-300 flex flex-col items-center justify-center">
        <h1 className="font-semibold text-6xl">Oops!</h1>
        <p className="text-4xl font-robert-regular pt-4">Sorry, an unaccepted error has occurred.</p>
        <Link to='/'><button className="bg-gradient-to-r from-blue-300 to-emerald-500 px-10 py-2 rounded-lg  mt-10 ">Return Home</button></Link>
    </div>
  )
}

export default ErrorPage