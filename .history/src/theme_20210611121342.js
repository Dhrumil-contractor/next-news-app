import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: "#f8f8f8",
    },
  },
});

export default theme;
