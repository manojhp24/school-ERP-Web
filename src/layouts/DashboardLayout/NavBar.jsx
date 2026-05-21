import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  OutlinedInput,
  Tooltip,
  useTheme,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import { getPageTitle } from "./getPageTitle";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Navbar = ({ isMobile, onMenuClick, collapsed, onToggleCollapse }) => {
  const theme = useTheme();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        minHeight: 64,
        justifyContent: "center",
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
        backgroundImage: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {isMobile ? (
            <IconButton
              onClick={onMenuClick}
              edge="start"
              sx={{ color: "text.primary" }}
            >
              <MenuOutlinedIcon />
            </IconButton>
          ) : (
            <Tooltip title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
              <IconButton
                onClick={onToggleCollapse}
                edge="start"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {collapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
              </IconButton>
            </Tooltip>
          )}

          <Typography
            variant="h4"
            color="text.primary"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.01em",
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
            }}
          >
            {pageTitle}
          </Typography>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          {/* Quick Search */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              width: 260,
            }}
          >
            <OutlinedInput
              size="small"
              placeholder="Search students, classes..."
              startAdornment={
                <SearchOutlinedIcon
                  fontSize="small"
                  sx={{ color: "text.secondary", mr: 1 }}
                />
              }
              endAdornment={
                <Box
                  sx={{
                    px: 0.75,
                    py: 0.25,
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: theme.palette.background.neutral,
                    color: "text.secondary",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                  }}
                >
                  ⌘K
                </Box>
              }
              sx={{
                width: "100%",
                height: 36,
                borderRadius: 2,
                fontSize: "0.85rem",
                backgroundColor: theme.palette.background.neutral,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.divider,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
              }}
            />
          </Box>

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

          {/* User Avatar */}
          <Tooltip title="Account Settings">
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: `0px 2px 6px ${theme.palette.primary.lighter}`,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              MK
            </Avatar>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
