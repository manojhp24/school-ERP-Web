import { Stack, Typography, Box, Chip, useTheme } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const announcements = [
  {
    id: 1,
    title: "Parent meeting scheduled on Friday",
  },
  {
    id: 2,
    title: "Annual exam timetable published",
  },
  {
    id: 3,
    title: "Fee submission deadline extended",
  },
];

const AnnouncementList = () => {
  const theme = useTheme();

  // Helper to dynamically calculate priority level and info from title
  const getPriorityMeta = (title) => {
    const text = title.toLowerCase();
    if (text.includes("deadline") || text.includes("extended") || text.includes("urgent")) {
      return {
        label: "High Priority",
        color: "error", // red
        dateText: "Due: May 25, 2026",
      };
    }
    if (text.includes("exam") || text.includes("timetable") || text.includes("publish")) {
      return {
        label: "Important",
        color: "warning", // amber
        dateText: "Term 2 Exams",
      };
    }
    return {
      label: "General Notice",
      color: "info", // blue
      dateText: "Event: Friday",
    };
  };

  return (
    <Stack spacing={2}>
      {announcements.map((announcement) => {
        const meta = getPriorityMeta(announcement.title);

        return (
          <Box
            key={announcement.id}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "background.neutral",
              border: "1px solid",
              borderColor: "divider",
              borderLeft: `4px solid ${theme.palette[meta.color].main}`,
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "translateX(4px)",
                boxShadow: theme.shadows[1],
                borderColor: theme.palette[meta.color].light,
                backgroundColor: "background.paper",
              },
            }}
          >
            <Stack spacing={1.25}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Chip
                  label={meta.label}
                  size="small"
                  color={meta.color}
                  variant="soft"
                  sx={{
                    height: 20,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    borderRadius: 1,
                    backgroundColor: theme.palette[meta.color].lighter,
                    color: theme.palette[meta.color].main,
                    border: "none",
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <CalendarMonthOutlinedIcon sx={{ fontSize: 13, color: "text.disabled" }} />
                  <Typography variant="caption" color="text.secondary" fontWeight={500}>
                    {meta.dateText}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <CampaignOutlinedIcon
                  sx={{
                    fontSize: 18,
                    color: `${meta.color}.main`,
                    mt: 0.25,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    lineHeight: 1.4,
                  }}
                >
                  {announcement.title}
                </Typography>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export default AnnouncementList;
