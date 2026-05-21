import { Card, CardContent, Typography, Box } from "@mui/material";

const SectionCard = ({ title, action, children }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
        boxShadow: "0px 1px 3px rgba(0,0,0,0.02)",
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          "&:last-child": {
            pb: { xs: 2.5, md: 3 },
          },
        }}
      >
        {(title || action) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 2,
              mb: 2.5,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            {title && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  letterSpacing: "-0.01em",
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                }}
              >
                {title}
              </Typography>
            )}

            {action && <Box sx={{ display: "flex", alignItems: "center" }}>{action}</Box>}
          </Box>
        )}

        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
