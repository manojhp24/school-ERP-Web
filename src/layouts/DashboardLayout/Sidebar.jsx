import { Box, Typography, Drawer } from "@mui/material";

import { NavLink } from "react-router-dom";
import { navigationConfig } from "./navigation.config";
import { DRAWER_WIDTH } from "./constants";
import SidebarSection from "./SidebarSection";

const SideBar = ({ isMobile, mobileOpen, onClose }) => {
  const drawerContent = (
    <Box
      sx={{
        width: 260,
        height: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: 64,
          display: "flex",
          alignItems: "center",
          px: 3,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h6" color="text.primary">
          School ERP
        </Typography>
      </Box>
      {/*Navigations */}
      <Box sx={{ p: 2 }}>
        {navigationConfig.map((section) => (
          <SidebarSection
            key={section.section}
            section={section}
            isMobile={isMobile}
            onClose={onClose}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        /* Desktop Drawer */
        <Drawer
          variant="permanent"
          open
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              borderRight: 1,
              borderColor: "divider",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default SideBar;
