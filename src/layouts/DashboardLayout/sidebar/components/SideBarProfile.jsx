import { Box, Typography, Avatar, Tooltip } from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const SidebarProfile = ({ collapsed, isMobile, theme }) => {
  return (
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                bgcolor: "primary.main",
              }}
            >
              MK
            </Avatar>

            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Manoj Kumar
              </Typography>

              <Typography variant="caption" color="text.secondary">
                System Admin
              </Typography>
            </Box>
          </Box>

          <UnfoldMoreIcon fontSize="small" />
        </Box>
      )}
    </Box>
  );
};

export default SidebarProfile;
