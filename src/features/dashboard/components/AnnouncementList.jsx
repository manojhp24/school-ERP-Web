import { Stack, Typography, Divider } from "@mui/material";

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
  return (
    <Stack divider={<Divider />}>
      {announcements.map((announcement) => (
        <Stack key={announcement.id} spacing={0.5} sx={{ py: 1.5 }}>
          <Typography variant="body2">{announcement.title}</Typography>

          <Typography variant="caption" color="text.secondary">
            Announcement
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default AnnouncementList;
