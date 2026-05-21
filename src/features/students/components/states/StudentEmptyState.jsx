import { Box, Typography } from "@mui/material";

const StudentEmptyState = () => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={1}
    >
      <Typography variant="h6" fontWeight={600}>
        No Students Found
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Students will appear here once added.
      </Typography>
    </Box>
  );
};

export default StudentEmptyState;
