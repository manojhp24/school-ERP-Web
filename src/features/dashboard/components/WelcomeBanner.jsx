import { Box, Typography } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Typography variant="h4">Welcome back 👋</Typography>

      <Typography
        variant="body2"
        sx={{
          opacity: 0.9,
          mt: 1,
        }}
      >
        Here's what's happening in your school today.
      </Typography>
    </Box>
  );
};

export default WelcomeBanner;
