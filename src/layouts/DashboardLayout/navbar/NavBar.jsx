import { AppBar, Toolbar, useTheme } from "@mui/material";

import { useLocation } from "react-router-dom";
import { getPageTitle } from "../utils/getPageTitle";
import NavbarLeft from "./components/NavbarLeft";
import NavbarRight from "./components/NavbarRight";

const Navbar = ({ isMobile, onMenuClick, collapsed, onToggleCollapse }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        minHeight: 64,
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
        backgroundImage: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Left Side */}
        <NavbarLeft
          collapsed={collapsed}
          isMobile={isMobile}
          onMenuClick={onMenuClick}
          onToggleCollapse={onToggleCollapse}
          pageTitle={pageTitle}
        />

        <NavbarRight />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
