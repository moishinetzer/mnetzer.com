export default function BgButton(props) {
  const { text, textColor, borderColor, bgColor, setBgFunction, cName } = props;

  return (
    <button
      className={`
        ${cName}
        text-${textColor}
        border-${borderColor} 
        sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full 
        border-opacity-60 
        tracking-wide text-lg
        focus:outline-none
        transition-opacity
        duration-150
        ease-out
        hover:opacity-60 
        `}
      onClick={() => setBgFunction(bgColor)}
    >
      {text}
    </button>
  );
}
