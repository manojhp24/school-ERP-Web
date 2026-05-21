import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, isMobile, collapsed, onClose }) => {
  const Icon = item.icon;
  const isCollapsed = collapsed && !isMobile;

  const buttonContent = (
    <ListItemButton
      component={NavLink}
      to={item.path}
      onClick={isMobile ? onClose : undefined}
      sx={{
        borderRadius: 1.5,
        mb: 0.5,
        px: isCollapsed ? 1.5 : 2,
        py: 1,
        minHeight: 40,
        justifyContent: isCollapsed ? "center" : "flex-start",
        color: "text.secondary",
        transition: (theme) =>
          theme.transitions.create(["background-color", "color", "padding"], {
            duration: theme.transitions.duration.shorter,
          }),
        "& .MuiListItemIcon-root": {
          color: "text.secondary",
          minWidth: 0,
          mr: isCollapsed ? 0 : 2,
          display: "inline-flex",
          justifyContent: "center",
          transition: (theme) =>
            theme.transitions.create("margin", {
              duration: theme.transitions.duration.shorter,
            }),
        },
        "&:hover": {
          backgroundColor: "action.hover",
          color: "text.primary",
          "& .MuiListItemIcon-root": {
            color: "text.primary",
          },
        },
        "&.active": {
          backgroundColor: "primary.lighter",
          color: "primary.main",
          "& .MuiListItemIcon-root": {
            color: "primary.main",
          },
          "& .MuiListItemText-primary": {
            color: "primary.main",
            fontWeight: 600,
          },
          "&:hover": {
            backgroundColor: "primary.lighter",
          },
        },
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>

      {!isCollapsed && (
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            variant: "body2",
            sx: { fontWeight: 500 },
          }}
        />
      )}
    </ListItemButton>
  );

  if (isCollapsed) {
    return (
      <Tooltip title={item.label} placement="right" arrow>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
};

export default SidebarItem;
