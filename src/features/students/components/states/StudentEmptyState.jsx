import { Box, Typography } from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const StudentEmptyState = ({ isFiltered = false }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        py: 6,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "background.neutral",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          borderColor: "divider",
          color: "text.secondary",
        }}
      >
        {isFiltered ? (
          <SearchOffIcon sx={{ fontSize: 32, opacity: 0.8 }} />
        ) : (
          <InboxOutlinedIcon sx={{ fontSize: 32, opacity: 0.8 }} />
        )}
      </Box>

      <Box sx={{ maxWidth: 320 }}>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary" gutterBottom>
          {isFiltered ? "No Matching Results" : "No Students Registered"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {isFiltered
            ? "We couldn't find any students matching your criteria. Try adjusting your search query or filters."
            : "There are currently no students in the database. Added students will appear here."}
        </Typography>
      </Box>
    </Box>
  );
};

export default StudentEmptyState;
