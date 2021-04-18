import { React, useState } from "react";
import "./styles.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmail from "./gmail.png";

export default function App() {
  var [mainBg, setMainBg] = useState("to-gray-700");

  return (
    <div
      className={`App h-screen w-screen flex items-start justify-center font-poppins font-bold tracking-wide bg-gradient-to-br from-gray-900 ${mainBg}`}
    >
      <div>
        <div
          className={"flex justify-center space-x-10 mt-12 sm:mt-24 opacity-60"}
        >
          <a href={"https://github.com/moishinetzer/"}>
            <img src={github} alt="GitHub Link" className={"h-12 sm:h-20"} />
          </a>
          <a href={"https://www.linkedin.com/in/marc-netzer-03719b147/"}>
            <img
              src={linkedin}
              alt="LinkedIn Link"
              className={"h-12 sm:h-20"}
            />
          </a>
          <a href={"mailto:moishinetzer@gmail.com"}>
            <img src={gmail} alt="Gmail Link" className={"h-12 sm:h-20"} />
          </a>
        </div>
        <p className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 w-screen text-4xl sm:text-7xl mt-16 sm:mt-32">
          Moishi Netzer
        </p>
        <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 italic text-2xl sm:text-5xl p-10 sm:p-16 font-normal">
          In Development
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:px-40">
          <button
            className="sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-red-300 border-opacity-60 text-red-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-red-900")}
          >
            RED
          </button>
          <button
            className="sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-green-300 border-opacity-60 text-green-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-green-900")}
          >
            GREEN
          </button>
          <button
            className="sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-blue-300 border-opacity-60 text-blue-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-blue-900")}
          >
            BLUE
          </button>
          <button
            className="sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-yellow-300 border-opacity-60 text-yellow-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-yellow-900")}
          >
            YELLOW
          </button>
        </div>
        <button
          className="sm:w-1/5 sm:h-10 sm:w-1/6 m-2 p-1 w-1/5 border-2 rounded-full border-gray-100 border-opacity-20 text-gray-200 tracking-wide m-4"
          onClick={() => setMainBg("to-gray-700")}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
