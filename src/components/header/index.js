import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  MenuIcon,
  Typography
} from "@material-ui/core";
import Logo from "../logo/logo";
import "./header.scss";

function Header({ children }) {
  return (
    <>
      {/* <AppBar position="static" component="header" color="default">
        <Toolbar variant="dense">
          <Logo />
        </Toolbar>
      </AppBar> */}
      <Container maxWidth={false} component="header" className="site-header">
        <Logo />
        <div className="site-header__cta">
          <em>
            Call Today:{" "}
            <a href="tel:18477215308" className="phone-link">
              (847) 721-5308
            </a>
          </em>
        </div>
      </Container>
    </>
  );
}

export default Header;
