import NextLink from "next/link"
import "./logo.scss";

function Logo({ children }) {
  return (
    <NextLink href="/">
      <a className="logo">
        <img
          className="logo__img"
          src="/images/norseman_aircraft_yr.png"
          alt="norseman aircraft"
        />
        <div className="logo__text">
          <div className="logo__text--smaller">Norseman Group</div>
          <div>Life Settlements</div>
        </div>
      </a>
    </NextLink>
  );
}

export default Logo;
