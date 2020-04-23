import MenuItem from "./menu-item";
import "./menu.scss";

const Menu = () => {
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/overview", title: "Overview of Settlements" },
    { href: "/about", title: "About Norseman" },
    { href: "/roadmap", title: "Roadmap" },
    { href: "/tutorial", title: "Advisor Tutorial" },
    { href: "/contact", title: "Contact Us" },
  ];

  return (
    <nav className="menu">
      <ul role="navigation" className="menu__list">
        {menuItems.map(({ href, title }, i) => (
          <MenuItem href={href} key={`menu-item-${i}`}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
