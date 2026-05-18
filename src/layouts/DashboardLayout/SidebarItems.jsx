import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, isMobile, onClose }) => {
  const Icon = item.icon;

  return (
    <ListItemButton
      key={item.path}
      component={NavLink}
      to={item.path}
      sx={{
        borderRadius: 2,
        mb: 0.5,

        "&.active": {
          backgroundColor: "primary.lighter",

          "& .MuiListItemIcon-root": {
            color: "primary.main",
          },

          "& .MuiListItemText-primary": {
            color: "primary.main",
            fontWeight: 600,
          },
          "&:hover": {
            backgroundColor: "action.hover",
          },
        },
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>

      <ListItemText primary={item.label} />
    </ListItemButton>
  );
};

export default SidebarItem;
