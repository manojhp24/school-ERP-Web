import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";
import { shadows } from "@mui/system";

const theme = createTheme({
  palette: palette.light,
  typography: typography,
  shadows: shadows,
  components: components,
});

export default theme;
