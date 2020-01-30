import Grid from "@material-ui/core/Grid";

import "./logo.scss";

function Logo({ children }) {
  return (
    <Grid component="a" href="/" container direction="row">
      <img
        className="logo-img"
        src="/images/norseman_aircraft_yr.png"
        alt="norseman aircraft"
      />
      <Grid container item direction="column" alignItems="left">
        <span>Norseman Group</span>
        <span>Life Settlements</span>
      </Grid>
    </Grid>
  );
}

export default Logo;
