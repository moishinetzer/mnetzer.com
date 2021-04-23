export default function LogoLink(props) {
  const { href, src, alt } = props;
  return (
    <a href={href}>
      <img src={src} alt={alt} className={"h-12 sm:h-20"} />
    </a>
  );
}
