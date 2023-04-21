import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import ecmascript6 from "../assets/ecmascript6.png"
import c from "../assets/c.png";
import sql from "../assets/sql.png";
import csharp from "../assets/csharp.png";
import aspnet from "../assets/aspnet.png";
import meta from "../assets/meta.png"
import redux from "../assets/redux.png"
import vscode from "../assets/vscode.png"
import chrome from "../assets/chrome.png"
import npm from "../assets/npm.png"
import yarn from "../assets/yarn.png"
import netlify from "../assets/netlify.png"
import firebase from "../assets/firebase.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 7,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: ecmascript6,
      title: "Es6",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: meta,
      title: "Material UI",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: c,
      title: "C Programming",
      style: "shadow-blue-600",
    },
    {
      id: 14,
      src: sql,
      title: "SQL server",
      style: "shadow-red-500",
    },
    {
      id: 15,
      src: csharp,
      title: "C#",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: aspnet,
      title: "ASP.net",
      style: "shadow-blue-500",
    },
    {
      id: 17,
      src: vscode,
      title: "VS Code",
      style: "shadow-blue-500",
    },
    {
      id: 18,
      src: chrome,
      title: "Chrome Dev Tools",
      style: "shadow-green-500",
    },
    {
      id: 19,
      src: npm,
      title: "NPM",
      style: "shadow-red-500",
    },

    {
      id: 20,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 21,
      src: yarn,
      title: "Yarn",
      style: "shadow-blue-500",
    },
    {
      id: 22,
      src: netlify,
      title: "Netlify",
      style: "shadow-blue-500",
    },

  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
