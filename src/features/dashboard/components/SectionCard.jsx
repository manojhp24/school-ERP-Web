import { Card, CardContent, Typography, Box } from "@mui/material";

const SectionCard = ({ title, action, children }) => {
  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          p: 3,

          "&:last-child": {
            pb: 3,
          },
        }}
      >
        {(title || action) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            {title && <Typography variant="h5">{title}</Typography>}

            {action && action}
          </Box>
        )}

        {children}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
