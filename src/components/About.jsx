import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a frontend developer based in Tamilnadu, India.I'm passionate about creating beautiful, functional, and user-friendly websites and applications,and I'm currently learning to work with React in order to advance my frontend skills to another level and make my projects even better.
        </p>

        <br />

        <p className="text-xl">
        Adept at identifying opportunities to enhance front-end design and improve the user experience. <br />
      
        
        </p>
      </div>
    </div>
  );
};

export default About;
