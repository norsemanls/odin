import { useRouter } from "next/router";
import NextLink from "next/link";
import classnames from "classnames";

const MenuItem = ({ href, children }) => {
  const router = useRouter();
  const itemClass = classnames({
    menu__list__item: true,
    "menu__list__item--active": router.asPath === href,
  });

  console.log(`pathname ${router.asPath}`);
  console.log(`href ${href}`);

  return (
    <li className={itemClass}>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </li>
  );
};

export default MenuItem;
