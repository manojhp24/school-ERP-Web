import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const StudentErrorState = ({ onRetry = () => window.location.reload() }) => {
  return (
    <Box
      sx={{
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        textAlign: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "error.lighter",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          borderColor: "error.light",
          color: "error.main",
          mb: 1,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 32 }} />
      </Box>

      <Box sx={{ maxWidth: 360, mb: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} color="text.primary" gutterBottom>
          Failed to Load Student Records
        </Typography>
        <Typography variant="body2" color="text.secondary">
          An error occurred while fetching the student records. Please check your network connection and try again.
        </Typography>
      </Box>

      <Button
        variant="outlined"
        color="error"
        onClick={onRetry}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 2,
          px: 3,
        }}
      >
        Retry Loading
      </Button>
    </Box>
  );
};

export default StudentErrorState;
