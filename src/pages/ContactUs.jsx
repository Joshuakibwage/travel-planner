import contactImage from "../assets/bg-hero4.jpg"


const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a7c1e37-958a-4246-9e35-7c70fa717811");
    console.log(FormData)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div>
        <img 
        className="w-full h-screen object-cover object-center" 
        src={contactImage} 
        alt="image of a water body" />
      </div>
      <div className="absolute top-[10%] left-[18%] w-[60%] h-[80%] backdrop-blur-sm p-5">
       <div className="w-full h-full">
        <form action=""  className="max-w-md w-full mx-auto p-6 bg-emerald-50 rounded-md shadow-lg">
        <h1 className="font-semibold text-xl font-poppins">GET IN TOUCH</h1>
        <p className="text-slate-400">24/7 We will answer your questions and problems.</p>
          <div className="mb-4">
            <label 
            htmlFor="Your Name" 
            className="block text-sm font-semibold mb-2"
            >Your Name</label>
            <input 
              placeholder="John Doe" 
              className="w-full px-3 py-2 border rounded-lg focus:border-emerald-600 outline-none" required type="text" name="name" />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">Email</label>
            <input 
              placeholder="johndoe@example.com" 
              className="w-full px-3 py-2 border rounded-lg focus:border-emerald-600 outline-none" required type="email" name="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">Your Message</label>
            <textarea 
              placeholder="Type your message here.." 
              className="w-full px-3 py-2 border rounded-lg focus:border-emerald-600 outline-none" required type="password" name="password" />
          </div>
          <div>
            <button onSubmit={onSubmit}  type="submit" className="bg-gradient-to-r from-blue-400 to-emerald-500 w-full py-4 text-white font-semibold hover:bg-gradient-to-r hover:from-blue-300 hover:to-emerald-400">
              Submit
            </button>
          </div>
        </form>
           
         
       </div>
      </div>
    </div>
  )
}

export default ContactUs