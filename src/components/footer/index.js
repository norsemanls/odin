import Copyright from "./copyright";
import Logo from "../logo";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__main">
          <Logo></Logo>
          <div className="footer__main__description">
            A national life settlement valuation and brokerage firm, serving
            well known financial service firms and their advisors.
          </div>
        </div>
        <div className="footer__legal">
          <Copyright></Copyright>
        </div>
      </footer>
    </>
  );
};

export default Footer;
