import { Box, Grid, Paper, Typography } from "@mui/material";

const FormSectionLayout = ({
  title,
  subtitle,
  leftContent,
  children,
  icon,
}) => {
  const Icon = icon;
  return (
    <Paper
      elevation={0}
      sx={{
        border: "0.5px solid",
        borderRadius: 3,
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 3,
          py: 2.5,
          borderBottom: "0.5px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            backgroundColor: "action.hover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          {" "}
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.secondary"
            lineHeight={1.3}
          >
            {title}
          </Typography>
          <Typography variant="body2" lineHeight={1.4}>
            {subtitle}
          </Typography>
        </Box>
      </Box>

      {leftContent ? (
        <Grid container>
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              borderRight: "0.5px solid",
              borderColor: "divider",
              bgcolor: "action.hover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
            }}
          >
            {leftContent}
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} sx={{ p: 3.5 }}>
            {children}
          </Grid>
        </Grid>
      ) : (
        <Box sx={{ p: 3.5 }}>{children}</Box>
      )}
    </Paper>
  );
};

export default FormSectionLayout;
