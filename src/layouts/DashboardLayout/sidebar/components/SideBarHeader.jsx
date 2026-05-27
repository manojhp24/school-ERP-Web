import { Box, Typography, Avatar } from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SidebarHeader = ({ collapsed, isMobile, theme }) => {
  return (
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
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}
      >
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
};

export default SidebarHeader;
