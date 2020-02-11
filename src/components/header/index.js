import Logo from "../logo";
import "./header.scss";

function Header({ children }) {
  return (
    <header className="site-header">
      <Logo />
      <div className="site-header__cta">
        Call Today: <a href="tel:18477215308">(847) 721-5308</a>
      </div>
    </header>
  );
}

export default Header;
