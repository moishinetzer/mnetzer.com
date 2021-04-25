export default function ClearButton(props) {
  const { setFunctions } = props;
  const { setFirstBg, setSecondBg, currentBg, setCurrentBg } = setFunctions;
  return (
    <button
      className="
              sm:w-1/4 lg:w-1/6 sm:h-12 m-2 p-1 w-1/2 h-10
              border-2 rounded-full border-gray-100 border-opacity-20 
              text-gray-200 tracking-wide m-4 
              focus:outline-none ease-out hover:opacity-60 transition-opacity duration-150"
      onClick={() => {
        if (currentBg === "first") {
          setSecondBg("to-gray-700");
          setCurrentBg("second");
        } else {
          setFirstBg("to-gray-700");
          setCurrentBg("first");
        }
      }}
    >
      CLEAR
    </button>
  );
}
