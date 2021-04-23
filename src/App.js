import { React, useState } from "react";
import "./styles.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmail from "./gmail.png";
import LogoLink from "./LogoLink";
import BgButton from "./BgButton";
import ClearButton from "./ClearButton";

export default function App() {
  var [mainBg, setMainBg] = useState("to-gray-700");
  var [secondBg, setSecondBg] = useState("");
  var [currentBg, setCurrentBg] = useState("main");

  return (
    <>
      {/* Backgrounds to be transitioned between */}
      <div className={`absolute inset-0 bg-red-500 w-screen h-screen`}> </div>
      <div
        className={`absolute inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 ${mainBg}`}
      ></div>

      {/* Start of content */}
      <div
        className={`App h-screen w-screen flex absolute items-start justify-center font-poppins font-bold tracking-wide `}
      >
        <div>
          {/* Header logos */}
          <div className="flex justify-center space-x-10 mt-12 sm:mt-24 opacity-60">
            <LogoLink
              href="https://github.com/moishinetzer/"
              src={github}
              alt="GitHub Link"
            />
            <LogoLink
              href="https://www.linkedin.com/in/marc-netzer-03719b147/"
              src={linkedin}
              alt="LinkedIn Link"
            />
            <LogoLink
              href="mailto:moishinetzer@gmail.com"
              src={gmail}
              alt="Gmail Link"
            />
          </div>

          {/* Center words */}
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 w-screen text-4xl sm:text-7xl mt-16 sm:mt-20">
            Moishi Netzer
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 italic text-2xl sm:text-5xl p-10 sm:p-12 font-normal">
            In Development
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:px-40">
            <BgButton
              text="RED"
              textColor="red-200"
              borderColor="red-300"
              bgColor="to-red-900"
              setBgFunction={setMainBg}
            />
            <BgButton
              text="GREEN"
              textColor="green-200"
              borderColor="green-300"
              bgColor="to-green-900"
              setBgFunction={setMainBg}
            />
            <BgButton
              text="BLUE"
              textColor="blue-200"
              borderColor="blue-300"
              bgColor="to-blue-900"
              setBgFunction={setMainBg}
            />
            <BgButton
              text="YELLOW"
              textColor="yellow-200"
              borderColor="yellow-300"
              bgColor="to-yellow-900"
              setBgFunction={setMainBg}
            />
          </div>

          <ClearButton setBgFunction={setMainBg} />
        </div>
      </div>
    </>
  );
}
