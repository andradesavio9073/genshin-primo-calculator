import NextLink from "next/link";
import { useRouter } from "next/router";

const Link = ({ href, aClasses, onClick = () => {}, children }) => {
  const { asPath } = useRouter();
  return (
    <NextLink href={href}>
      <a
        className={aClasses}
        onClick={(e) => {
          onClick(e);
          if (asPath === href) return null;
          if (
            e.ctrlKey ||
            e.shiftKey ||
            e.metaKey || // apple
            (e.button && e.button == 1) // middle click, >IE9 + everyone else
          )
            return null;
        }}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
