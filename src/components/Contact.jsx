import React from "react";
import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	
  FiPhoneCall,
} from 'react-icons/fi';


const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: '',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/Subashvel',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/SRSvel2000',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://in.linkedin.com/in/subashvel',
	},
	{
		id: 5,
		icon: <FiPhoneCall />,
		url: 'https://www.youtube.com/c/realstoman',
	},
];


//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>

        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					
					<ul className="flex gap-4 sm:gap-12 p-3">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-black hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300" 
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>


      </div>
    </div>
  );
};

export default Contact;
