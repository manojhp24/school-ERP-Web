import { Box, Divider } from "@mui/material";

import SidebarHeader from "./SideBarHeader";
import SidebarProfile from "./SideBarProfile";
import SidebarActions from "./SidebarActions";
import SidebarSessionWidget from "./SidebarSessionWidget";

import SidebarSection from "../SidebarSection";
import { navigationConfig } from "../../utils/navigation.config";

const SidebarDrawerContent = ({
  collapsed,
  isMobile,
  onClose,
  theme,
  isDarkMode,
  toggleColorMode,
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SidebarHeader collapsed={collapsed} isMobile={isMobile} theme={theme} />

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: collapsed && !isMobile ? 1 : 2,
        }}
      >
        {navigationConfig.map((section) => (
          <SidebarSection
            key={section.section}
            section={section}
            isMobile={isMobile}
            collapsed={collapsed}
            onClose={onClose}
          />
        ))}
      </Box>

      {/* <SidebarSessionWidget
        collapsed={collapsed}
        isMobile={isMobile}
        theme={theme}
      /> */}

      <Divider sx={{ mx: 2, mb: 1.5 }} />

      <SidebarActions
        collapsed={collapsed}
        isMobile={isMobile}
        theme={theme}
        isDarkMode={isDarkMode}
        toggleColorMode={toggleColorMode}
      />

      <SidebarProfile collapsed={collapsed} isMobile={isMobile} theme={theme} />
    </Box>
  );
};

export default SidebarDrawerContent;
