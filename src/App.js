import { React, useState } from "react";
import { Transition } from "@headlessui/react";
import "./styles.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmail from "./gmail.png";
import LogoLink from "./LogoLink";
import BgButton from "./BgButton";
import ClearButton from "./ClearButton";
import ThumbsUp from "./ThumbsUp";

export default function App() {
  // @ts#5328-check
  var [firstBg, setFirstBg] = useState("to-gray-700");
  var [secondBg, setSecondBg] = useState("to-gray-700");
  var [currentBg, setCurrentBg] = useState("first");

  var bgFunctions = { setFirstBg, setSecondBg, currentBg, setCurrentBg };

  return (
    <>
      {/* Backgrounds to be transitioned between */}
      <div
        className={`absolute inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 ${secondBg}`}
      ></div>

      <Transition
        show={currentBg === "first" ? true : false}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`absolute inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 ${firstBg}`}
        ></div>
      </Transition>

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
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 text-4xl sm:text-7xl mt-16 sm:mt-20">
            Moishi Netzer
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-200 opacity-40 italic text-2xl sm:text-5xl p-10 sm:p-12 font-normal">
            In Development
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center sm:flex-row sm:px-20 lg:px-52 sm:w-screen sm:gap-x-6">
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="RED"
                textColor="red-200"
                borderColor="red-300"
                bgColor="to-red-800"
                setFunctions={bgFunctions}
              />
              <ThumbsUp />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="GREEN"
                textColor="green-200"
                borderColor="green-300"
                bgColor="to-green-700"
                setFunctions={bgFunctions}
              />
              <ThumbsUp />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="BLUE"
                textColor="blue-200"
                borderColor="blue-300"
                bgColor="to-blue-900"
                setFunctions={bgFunctions}
              />
              <ThumbsUp />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="YELLOW"
                textColor="yellow-200"
                borderColor="yellow-300"
                bgColor="to-yellow-800"
                setFunctions={bgFunctions}
              />
              <ThumbsUp />
            </div>
          </div>

          <div className="">
            <ClearButton setFunctions={bgFunctions} />
          </div>
        </div>
      </div>
    </>
  );
}
