import { Box, Tooltip, IconButton, useTheme, Badge } from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavbarNotifictions = () => {
  const theme = useTheme();
  return (
    <Tooltip title="Notifications">
      <IconButton
        sx={{
          color: "text.secondary",
          "&:hover": { color: "primary.main" },
        }}
      >
        <Badge
          badgeContent={3}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              right: 2,
              top: 2,
              border: `2px solid ${theme.palette.background.paper}`,
              padding: "0 4px",
              fontWeight: 700,
            },
          }}
        >
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default NavbarNotifictions;
