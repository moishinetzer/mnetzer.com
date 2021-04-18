import { React, useState } from "react";
import "./styles.css";

export default function App() {
  var [mainBg, setMainBg] = useState("to-gray-700");

  function setBg(string) {
    console.log(string);
  }

  return (
    <div
      className={`App h-screen w-screen flex items-center justify-center flex-wrap font-poppins font-bold tracking-wide bg-gradient-to-br from-gray-900 ${mainBg}`}
    >
      <div>
        <p className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 w-screen text-4xl sm:text-7xl">
          Moishi Netzer
        </p>
        <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 italic text-2xl sm:text-5xl p-10 sm:p-16 font-normal">
          In Development
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:px-40">
          <button
            className="sm:w-1/5 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-red-300 border-opacity-60 text-red-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-red-900")}
          >
            RED
          </button>
          <button
            className="sm:w-1/5 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-green-300 border-opacity-60 text-green-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-green-900")}
          >
            GREEN
          </button>
          <button
            className="sm:w-1/5 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-blue-300 border-opacity-60 text-blue-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-blue-900")}
          >
            BLUE
          </button>
          <button
            className="sm:w-1/5 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full border-yellow-300 border-opacity-60 text-yellow-200 tracking-wide text-lg"
            onClick={() => setMainBg("to-yellow-900")}
          >
            YELLOW
          </button>
        </div>
        <button
          className="sm:w-1/5 sm:w-1/6 m-2 p-1 w-1/5 border-2 rounded-full border-gray-100 border-opacity-20 text-gray-200 tracking-wide m-4"
          onClick={() => setMainBg("to-gray-700")}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
