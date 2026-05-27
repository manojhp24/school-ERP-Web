import { Box, Typography, Paper } from "@mui/material";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const SidebarSessionWidget = ({ collapsed, isMobile, theme }) => {
  if (collapsed && !isMobile) return null;

  return (
    <Box sx={{ px: 2, mb: 2 }}>
      <Paper
        variant="outlined"
        sx={{
          p: 1.75,
          borderRadius: 2,
          borderColor: theme.palette.divider,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarTodayOutlinedIcon
            sx={{ color: "primary.main", fontSize: "1.1rem" }}
          />

          <Typography variant="caption">Academic Period</Typography>
        </Box>

        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Session 2026-2027
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Term-I Exam Schedule Active
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SidebarSessionWidget;
