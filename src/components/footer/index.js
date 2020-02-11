import Copyright from "./copyright";
import Logo from "../logo";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Logo></Logo>
        <div className="footer__description">
          A national life settlement valuation and brokerage firm, serving well
          known financial service firms and their advisors.
        </div>
      </footer>
      <footer className="footer-final">
        <Copyright></Copyright>
      </footer>
    </>
  );
};

export default Footer;
