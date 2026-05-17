import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const theme = createTheme({
  palette: palette.light,
  typography: typography,
  components: components,
});

export default theme;
