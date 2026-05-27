import { Drawer, useTheme } from "@mui/material";

import { DRAWER_WIDTH, COLLAPSED_DRAWER_WIDTH } from "../utils/constants";

import SidebarDrawerContent from "./components/SidebarDrawerContent";

import { useColorMode } from "../../../theme/ThemeContext";

const SideBar = ({ isMobile, mobileOpen, onClose, collapsed }) => {
  const theme = useTheme();

  const { mode, toggleColorMode } = useColorMode();

  const isDarkMode = mode === "dark";

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
        },
      }}
    >
      <SidebarDrawerContent
        collapsed={collapsed}
        isMobile={isMobile}
        onClose={onClose}
        theme={theme}
        isDarkMode={isDarkMode}
        toggleColorMode={toggleColorMode}
      />
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,

        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
        },
      }}
    >
      <SidebarDrawerContent
        collapsed={collapsed}
        isMobile={isMobile}
        onClose={onClose}
        theme={theme}
        isDarkMode={isDarkMode}
        toggleColorMode={toggleColorMode}
      />
    </Drawer>
  );
};

export default SideBar;
