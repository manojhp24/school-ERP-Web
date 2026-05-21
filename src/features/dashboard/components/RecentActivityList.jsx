import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const activities = [
  {
    id: 1,
    title: "John Doe admitted to Grade 8",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Attendance submitted for Grade 10",
    time: "4 hours ago",
  },
  {
    id: 3,
    title: "Fee invoice generated",
    time: "Today",
  },
];

const RecentActivityList = () => {
  const theme = useTheme();

  // Helper to map activity title keywords to specific icons, colors and badges
  const getActivityMeta = (title) => {
    const text = title.toLowerCase();
    if (text.includes("admit") || text.includes("admission") || text.includes("enroll")) {
      return {
        icon: <PersonAddOutlinedIcon fontSize="small" />,
        bg: theme.palette.success.lighter,
        color: theme.palette.success.main,
      };
    }
    if (text.includes("attendance") || text.includes("present") || text.includes("absent")) {
      return {
        icon: <CheckCircleOutlinedIcon fontSize="small" />,
        bg: theme.palette.info.lighter,
        color: theme.palette.info.main,
      };
    }
    if (text.includes("fee") || text.includes("invoice") || text.includes("payment")) {
      return {
        icon: <ReceiptLongOutlinedIcon fontSize="small" />,
        bg: theme.palette.warning.lighter,
        color: theme.palette.warning.main,
      };
    }
    // Fallback
    return {
      icon: <HistoryOutlinedIcon fontSize="small" />,
      bg: theme.palette.primary.lighter,
      color: theme.palette.primary.main,
    };
  };

  return (
    <List disablePadding>
      {activities.map((activity, index) => {
        const meta = getActivityMeta(activity.title);
        const isLast = index === activities.length - 1;

        return (
          <ListItem
            key={activity.id}
            disableGutters
            sx={{
              py: 2,
              borderBottom: isLast ? "none" : "1px solid",
              borderColor: "divider",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.01)",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: meta.bg,
                  color: meta.color,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {meta.icon}
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    lineHeight: 1.4,
                  }}
                >
                  {activity.title}
                </Typography>
              }
              secondary={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 13, color: "text.disabled" }} />
                  <Typography variant="caption" color="text.secondary">
                    {activity.time}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default RecentActivityList;
