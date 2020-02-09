import Grid from "@material-ui/core/Grid";

import "./logo.scss";

function Logo({ children }) {
  return (
    <a className="logo">
      {/* TODO REPLACE WITH NEXT LINK */}
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
  );
}

export default Logo;
