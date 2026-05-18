import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

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
  return (
    <List disablePadding>
      {activities.map((activity) => (
        <ListItem
          key={activity.id}
          disableGutters
          sx={{
            py: 1.5,
          }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.lighter",
                color: "primary.main",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              A
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={<Typography variant="body2">{activity.title}</Typography>}
            secondary={activity.time}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecentActivityList;
