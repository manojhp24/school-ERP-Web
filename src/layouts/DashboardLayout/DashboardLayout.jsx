import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import SideBar from "./sidebar/Sidebar";
import Navbar from "./navbar/NavBar";
import { DRAWER_WIDTH, COLLAPSED_DRAWER_WIDTH } from "./utils/constants";

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handelDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      {/*Sidebar*/}
      <Box
        component="nav"
        sx={{
          width: isMobile
            ? 0
            : collapsed
              ? COLLAPSED_DRAWER_WIDTH
              : DRAWER_WIDTH,
          flexShrink: 0,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: collapsed
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <SideBar
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          onClose={handelDrawerToggle}
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
        />
      </Box>

      {/*Main Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // Prevent flex grid item blowout
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/*NavBar */}
        <Navbar
          isMobile={isMobile}
          onMenuClick={handelDrawerToggle}
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
        />

        {/*Page content*/}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: "background.default",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },
              maxWidth: 1600,
              width: "100%",
              mx: "auto",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
