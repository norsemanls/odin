import MenuItem from "./menu-item";
import "./menu.scss";

const Menu = () => {
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/overview", title: "Overview of Settlements" },
    { href: "/about", title: "About Norseman" },
    { href: "/roadmap", title: "Roadmap" },
    { href: "/tutorial", title: "Advisor Tutorial" },
    { href: "/contact", title: "Contact Us" }
  ];

  return (
    <nav class="menu">
      <ul role="navigation" class="menu__list">
        {menuItems.map(({ href, title }) => (
          <MenuItem href={href}>{title}</MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
