import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Navbar from "./NavBar";

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handelDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {/*Sidebar*/}
      <Box
        sx={{
          width: "260",
          flexShrink: 0,
          backgroundColor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <SideBar
          isMobile={isMobile}
          mobileOpen={mobileOpen}
          onClose={handelDrawerToggle}
        />
      </Box>
      {/*Main Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/*NavBar */}
        <Box
          sx={{
            height: 64,
            backgroundColor: "background.paper",
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            px: 3,
          }}
        >
          <Navbar isMobile={isMobile} onMenuClick={handelDrawerToggle} />
        </Box>

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
