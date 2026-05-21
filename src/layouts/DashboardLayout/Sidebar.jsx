import { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  Avatar,
  Switch,
  Divider,
  Tooltip,
  Paper,
  useTheme,
} from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import { navigationConfig } from "./navigation.config";
import { DRAWER_WIDTH, COLLAPSED_DRAWER_WIDTH } from "./constants";
import SidebarSection from "./SidebarSection";
import { useColorMode } from "../../theme/ThemeContext";

const SideBar = ({ isMobile, mobileOpen, onClose, collapsed, onToggleCollapse }) => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const [workspaceMenuAnchor, setWorkspaceMenuAnchor] = useState(null);

  const isDarkMode = mode === "dark";

  // Sidebar header / workspace switcher
  const renderHeader = (
    <Box
      sx={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: collapsed && !isMobile ? "center" : "space-between",
        px: collapsed && !isMobile ? 1.5 : 2.5,
        borderBottom: `1px solid ${theme.palette.divider}`,
        cursor: "pointer",
        transition: theme.transitions.create(["padding", "justify-content"], {
          duration: theme.transitions.duration.shorter,
        }),
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <SchoolOutlinedIcon fontSize="small" />
        </Avatar>
        {(!collapsed || isMobile) && (
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: 700, lineHeight: 1.2, noWrap: true }}
            >
              School ERP
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", fontSize: "0.75rem", noWrap: true }}
            >
              Primary Campus
            </Typography>
          </Box>
        )}
      </Box>
      {(!collapsed || isMobile) && (
        <KeyboardArrowDownIcon
          fontSize="small"
          sx={{ color: "text.secondary", ml: 1, flexShrink: 0 }}
        />
      )}
    </Box>
  );

  // Bottom profile card
  const renderProfile = (
    <Box
      sx={{
        p: collapsed && !isMobile ? 1.5 : 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: "background.paper",
      }}
    >
      {collapsed && !isMobile ? (
        <Tooltip title="Manoj Kumar (System Admin)" placement="right" arrow>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                bgcolor: "primary.main",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: `0 0 0 2px ${theme.palette.background.paper}, 0 0 0 4px ${theme.palette.success.main}`,
              }}
            >
              MK
            </Avatar>
          </Box>
        </Tooltip>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                bgcolor: "primary.main",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              MK
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{ fontWeight: 600, noWrap: true }}
              >
                Manoj Kumar
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", noWrap: true }}
              >
                System Admin
              </Typography>
            </Box>
          </Box>
          <UnfoldMoreIcon
            fontSize="small"
            sx={{ color: "text.secondary", ml: 1, flexShrink: 0 }}
          />
        </Box>
      )}
    </Box>
  );

  // Bottom action bar (Support, Dark Mode toggle)
  const renderActions = (
    <Box
      sx={{
        px: collapsed && !isMobile ? 1.5 : 2,
        pb: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      {/* Support Item */}
      {collapsed && !isMobile ? (
        <Tooltip title="Support Helpline" placement="right" arrow>
          <IconButton
            sx={{
              color: "text.secondary",
              width: 40,
              height: 40,
              mx: "auto",
              borderRadius: 2,
              "&:hover": {
                color: "primary.main",
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <HeadsetMicOutlinedIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 1.5,
            py: 1,
            borderRadius: 2,
            cursor: "pointer",
            color: "text.secondary",
            "&:hover": {
              color: "primary.main",
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <HeadsetMicOutlinedIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Support Helpline
          </Typography>
        </Box>
      )}

      {/* Dark Mode Switch */}
      {collapsed && !isMobile ? (
        <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} placement="right" arrow>
          <IconButton
            onClick={toggleColorMode}
            sx={{
              color: isDarkMode ? "primary.main" : "text.secondary",
              width: 40,
              height: 40,
              mx: "auto",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
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
            borderRadius: 2,
            color: "text.secondary",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {isDarkMode ? (
              <LightModeOutlinedIcon fontSize="small" />
            ) : (
              <DarkModeOutlinedIcon fontSize="small" />
            )}
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Dark Mode
            </Typography>
          </Box>
          <Switch
            size="small"
            checked={isDarkMode}
            onChange={toggleColorMode}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );

  // Widget: Academic Session Card
  const renderSessionWidget = (!collapsed || isMobile) && (
    <Box sx={{ px: 2, mb: 2 }}>
      <Paper
        variant="outlined"
        sx={{
          p: 1.75,
          borderRadius: 2,
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.background.neutral,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarTodayOutlinedIcon
            sx={{ color: "primary.main", fontSize: "1.1rem" }}
          />
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, textTransform: "uppercase", color: "text.secondary" }}
          >
            Academic Period
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "text.primary" }}>
            Session 2026-2027
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
            Term-I Exam Schedule Active
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            cursor: "pointer",
            alignSelf: "flex-start",
            mt: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Change Session →
        </Typography>
      </Paper>
    </Box>
  );

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Sidebar Header */}
      {renderHeader}

      {/* Navigation List */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
          p: collapsed && !isMobile ? 1 : 2,
          transition: theme.transitions.create("padding", {
            duration: theme.transitions.duration.shorter,
          }),
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.divider,
            borderRadius: "3px",
          },
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

      {/* Widget Section */}
      {renderSessionWidget}

      {/* Divider */}
      <Divider sx={{ mx: 2, mb: 1.5 }} />

      {/* Bottom Actions (Support, Theme Mode) */}
      {renderActions}

      {/* Bottom Profile details */}
      {renderProfile}
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
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: "none",
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
            width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
            flexShrink: 0,
            whiteSpace: "nowrap",
            "& .MuiDrawer-paper": {
              width: collapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
              boxSizing: "border-box",
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundColor: "background.paper",
              backgroundImage: "none",
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: collapsed
                  ? theme.transitions.duration.enteringScreen
                  : theme.transitions.duration.leavingScreen,
              }),
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
