import { Box, Typography } from "@mui/material";

const StudentErrorState = () => {
  return (
    <Box
      sx={{
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography variant="h5" fontWeight={500} color="error">
        Failed to Load Students
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please try again
      </Typography>
    </Box>
  );
};

export default StudentErrorState;
