import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19857b"
    },
    secondary: {
      main: "#73784F"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: "Helvetica, sans-serif",
    fontWeight: "300"
  }
});

export default theme;
