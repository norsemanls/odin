import { useRouter } from "next/router";
import NextLink from "next/link";
import classnames from "classnames";

const MenuItem = ({ href, children }) => {
  const router = useRouter();

  console.log(router.pathname);
  const isActive = router.pathname === href;

  const itemClass = classnames({
    menu__list__item: true,
    "menu__list__item--active": isActive
  });

  return (
    <li className={itemClass}>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </li>
  );
};

export default MenuItem;
