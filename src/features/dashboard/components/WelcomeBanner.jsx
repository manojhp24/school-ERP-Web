import { Box, Typography, Grid, Stack } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const WelcomeBanner = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: 3, md: 4 },
        borderRadius: 3,
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: "primary.contrastText",
        boxShadow: "0px 6px 20px rgba(23, 70, 162, 0.15)",
      }}
    >
      {/* Background Decorative Subtle Rings */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.06)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-80px",
          right: "15%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.04)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={3} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={1}>
            <Typography
              variant="overline"
              sx={{
                opacity: 0.8,
                letterSpacing: "0.15em",
                fontWeight: 700,
                color: "primary.lighter",
              }}
            >
              School Management System
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.01em",
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Welcome back 👋
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                fontSize: { xs: "0.9rem", md: "1rem" },
                maxWidth: "600px",
              }}
            >
              Here's what's happening in your school today. Take control, manage academic progress, and review pending administrative operations.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              minWidth: { xs: "100%", sm: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                borderRadius: 1.5,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "inherit",
              }}
            >
              <CalendarTodayOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  opacity: 0.8,
                }}
              >
                {dayName}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                {dateStr}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeBanner;
