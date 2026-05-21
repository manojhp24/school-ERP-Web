import { Box } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        width: "100%",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        py: {
          xs: 2,
          sm: 3,
        },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
