import React from "react";
import foodready from "../assets/portfolio/foodready.jpg";
import tipcalc from "../assets/portfolio/tipcalc.jpg";
import easybank from "../assets/portfolio/easybank.jpg";
import atmcard from "../assets/portfolio/atmcard.jpg";
import crowdfund from "../assets/portfolio/crowdfund.jpg";
import multipageform from "../assets/portfolio/multipageform.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodready,
      link: 'https://food-order-app-subashvel.vercel.app/',
      repo: 'https://github.com/Subashvel/food-order-app.git'
    },
    {
      id: 2,
      src: crowdfund,
      link: 'https://crowdfunding-product-page-chi-vert.vercel.app/',
      repo: 'https://github.com/Subashvel/Crowdfunding-Product-page.git'
    },
    {
      id: 3,
      src: easybank,
      link: 'https://subashvel-banklandingpage.netlify.app/',
      repo: 'https://github.com/Subashvel/Easy-bank-landing-page.git'
    },
    {
      id: 4,
      src: multipageform,
      link: 'https://subashvel.github.io/multipage-form/',
      repo: 'https://github.com/Subashvel/multipage-form.git'
    },
    {
      id: 5,
      src: atmcard,
      link: 'https://card-detail.netlify.app/',
      repo: 'https://github.com/Subashvel/card-details-form.git'
    },
    {
      id: 6,
      src: tipcalc,
      link: 'https://subashvel-tip-calculator.netlify.app/',
      repo: 'https://github.com/Subashvel/Tip-Calculator.git'
    },
  ];

  return (
    <div
      name="portfolio"
      className=" from-black to-gray-800 w-full text-white  portfolio"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
