export default function LogoLink(props) {
  const { href, src, alt } = props;
  return (
    <a
      href={href}
      className="
        transition-opacity
        ease-out
        duration-150
        hover:opacity-70"
    >
      <img src={src} alt={alt} className={"h-12 sm:h-20"} />
    </a>
  );
}
