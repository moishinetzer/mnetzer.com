import firebase from "firebase/app";
export default function LogoLink(props) {
  const { href, src, alt, downloadName } = props;
  return (
    <a
      download={downloadName}
      href={href}
      className="
        transition-opacity
        ease-out
        duration-150
        hover:opacity-70"
      onMouseDown={() => {
        firebase.analytics().logEvent(alt);
      }}
    >
      <img src={src} alt={alt} className={"h-12 sm:h-20"} />
    </a>
  );
}
