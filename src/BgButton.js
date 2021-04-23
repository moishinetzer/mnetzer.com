export default function BgButton(props) {
  const { text, textColor, borderColor, bgColor, setBgFunction } = props;

  return (
    <button
      className={`
        text-${textColor}
        border-${borderColor} 
        sm:w-1/5 sm:h-14 sm:text-xl m-2 p-1 w-1/3 border-4 rounded-full 
        border-opacity-60 
        tracking-wide text-lg
        transition-opacity
        duration-150
        focus:outline-none
        hover:opacity-60`}
      onClick={() => setBgFunction(bgColor)}
    >
      {text}
    </button>
  );
}
