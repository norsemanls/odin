import Grid from "@material-ui/core/Grid";

import "./logo.scss";

function Logo({ children }) {
  return (
    <div className="logo">
      <a href="{{ '/' | prepend: site.baseurl }}">
        <img
          className="norseman-plane"
          src="/images/norseman_aircraft_yr.png"
          alt="norseman aircraft"
        />
        <h1>
          <span>Norseman Group</span>
          <span>Life Settlements</span>
        </h1>
      </a>
    </div>
  );
}

export default Logo;
