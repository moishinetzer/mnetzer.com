import { React, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./styles.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmail from "./gmail.png";
import LogoLink from "./LogoLink";
import BgButton from "./BgButton";
import ClearButton from "./ClearButton";
import ThumbsUp from "./ThumbsUp";
import firebase from "firebase/app";

export default function App() {
  // @ts#5328-check

  // State
  var [firstBg, setFirstBg] = useState("to-gray-700");
  var [secondBg, setSecondBg] = useState("to-gray-700");
  var [currentBg, setCurrentBg] = useState("first");
  var [canVote, setCanVote] = useState(true);

  var bgFunctions = { setFirstBg, setSecondBg, currentBg, setCurrentBg };

  var auth = firebase.auth();

  useEffect(() => {
    if (auth.currentUser) {
      setCanVote(false);
    } else {
      auth.signInAnonymously();
    }
  }, [auth]);

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
        className={`App h-screen w-screen flex absolute items-start justify-center font-poppins font-bold tracking-wide select-none`}
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
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-red-400 text-4xl sm:text-7xl mt-16 sm:mt-20 select-text">
            Moishi Netzer
          </p>
          <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-200 opacity-40 italic text-2xl sm:text-5xl p-7 sm:p-9 font-normal">
            In Development
          </p>

          <p className="bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-200 opacity-60 font-bold pb-3 sm:text-xl">
            {canVote
              ? "Try out the colors below what do you like?"
              : "Thanks for choosing a colour!"}
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-y-2 items-center sm:flex-row sm:px-20 lg:px-52 sm:w-screen sm:gap-x-6">
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="RED"
                textColor="red-200"
                borderColor="red-300"
                bgColor="to-red-800"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="red"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="GREEN"
                textColor="green-200"
                borderColor="green-300"
                bgColor="to-green-700"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="green"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="BLUE"
                textColor="blue-200"
                borderColor="blue-300"
                bgColor="to-blue-900"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="blue"
                canVoteFunctions={{ canVote, setCanVote }}
              />
            </div>
            <div className="flex items-center w-full justify-center pl-12 sm:pl-0 sm:flex-col gap-x-3 ">
              <BgButton
                text="YELLOW"
                textColor="yellow-200"
                borderColor="yellow-300"
                bgColor="to-yellow-600"
                setFunctions={bgFunctions}
              />
              <ThumbsUp
                color="yellow"
                canVoteFunctions={{ canVote, setCanVote }}
              />
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
