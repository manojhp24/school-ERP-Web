import { Box, Typography, IconButton, Tooltip, Switch } from "@mui/material";

import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const SidebarActions = ({
  collapsed,
  isMobile,
  theme,
  isDarkMode,
  toggleColorMode,
}) => {
  return (
    <Box
      sx={{
        px: collapsed && !isMobile ? 1.5 : 2,
        pb: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 1.5,
          py: 1,
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        <HeadsetMicOutlinedIcon fontSize="small" />

        {(!collapsed || isMobile) && (
          <Typography variant="body2">Support Helpline</Typography>
        )}
      </Box>

      {collapsed && !isMobile ? (
        <Tooltip title="Toggle Theme" placement="right" arrow>
          <IconButton onClick={toggleColorMode}>
            {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
        </Tooltip>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1.5,
            py: 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {isDarkMode ? (
              <LightModeOutlinedIcon fontSize="small" />
            ) : (
              <DarkModeOutlinedIcon fontSize="small" />
            )}

            <Typography variant="body2">Dark Mode</Typography>
          </Box>

          <Switch
            size="small"
            checked={isDarkMode}
            onChange={toggleColorMode}
          />
        </Box>
      )}
    </Box>
  );
};

export default SidebarActions;
