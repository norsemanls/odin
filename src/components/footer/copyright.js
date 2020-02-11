import React from "react";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Norseman Group Life Settlements
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {". All rights reserved."}
    </Typography>
  );
}

export default Copyright;
