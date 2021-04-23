export default function ClearButton(props) {
  const { setBgFunction } = props;
  return (
    <button
      className="
              sm:w-1/5 sm:h-10 sm:w-1/6 m-2 p-1 w-1/5 
              border-2 rounded-full border-gray-100 border-opacity-20 
              text-gray-200 tracking-wide m-4 
              focus:outline-none ease-out hover:opacity-60 transition-opacity duration-150"
      onClick={() => setBgFunction("to-gray-700")}
    >
      CLEAR
    </button>
  );
}
