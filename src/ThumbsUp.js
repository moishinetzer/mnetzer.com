import firebase from "firebase/app";
import { thumbsUpDb } from "./thumbsUpDb";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function ThumbsUp(props) {
  // Can vote denoting if the user has already voted or not
  const { color, canVoteFunctions } = props;
  const { canVote, setCanVote } = canVoteFunctions;

  // Is this the button the user chose
  var [chosen, setChosen] = useState(false);
  var [count, setCount] = useState();

  const chosenColor = "text-" + color + "-400";

  // If the user chose this color in past select it
  useEffect(() => {
    if (color === localStorage.mnVoteColor) {
      setChosen(true);
    }
  }, [color]);

  // Get DB values and listen for changes
  thumbsUpDb
    .ref("colors")
    .child(color)
    .on("value", (snapshot) => {
      if (count !== snapshot.val()) {
        setCount(snapshot.val());
      }
    });

  return (
    <div
      onClick={() => {
        // Update DB and set as selected
        if (canVote) {
          thumbsUpDb
            .ref("colors")
            .child(color)
            .set(firebase.database.ServerValue.increment(1));
          setCanVote(false);
          setChosen(true);
          localStorage.setItem("mnVoteColor", color);
        }
      }}
    >
      {/* Vote count */}
      <Transition
        appear={true}
        show={!canVote}
        enter="duration-1000"
        enterFrom="transform scale-0"
        enterTo="transform scale-100"
      >
        <div className={`${chosen ? chosenColor : "text-gray-400"} sm:text-xl`}>
          {count}
        </div>
      </Transition>

      {/* Thumbs Up button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`
          ${chosen ? chosenColor : "text-gray-400"} 
          ${canVote && "cursor-pointer hover:opacity-60"} 
          h-8 w-8 sm:h-10 sm:w-10 stroke-current 
          transition-opacity
          duration-150 ease-out  
          pb-1 sm:pb-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke=""
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    </div>
  );
}
