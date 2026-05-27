import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  useTheme,
  Badge,
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NavbarSearch from "./NavbarSearch";
import NavbarNotifictions from "./NavbarNotifications";
import NavbarProfile from "./NavbarProfile";

const NavbarRight = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
    >
      {/* Quick Search */}
      <NavbarSearch />

      {/* Help Helpline */}
      <Tooltip title="Help & Documentation">
        <IconButton
          sx={{
            color: "text.secondary",
            "&:hover": { color: "primary.main" },
          }}
        >
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </Tooltip>

      {/* Notifications */}
      <NavbarNotifictions />

      {/* User Avatar */}
      <NavbarProfile />
    </Box>
  );
};

export default NavbarRight;
