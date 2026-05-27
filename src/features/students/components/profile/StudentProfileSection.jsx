import { Box, Paper, Typography, Avatar } from "@mui/material";

const StudentProfileSection = ({ title, subtitle, icon: Icon, children, actions }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, sm: 3, md: 3.5 },
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        boxShadow: "0px 1px 3px rgba(0,0,0,0.01), 0px 4px 16px rgba(15, 23, 42, 0.02)",
        bgcolor: "background.paper",
        transition: "border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out",
        "&:hover": {
          borderColor: "primary.light",
          boxShadow: "0px 1px 4px rgba(0,0,0,0.02), 0px 8px 24px rgba(23, 70, 162, 0.04)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          pb: 2,
          mb: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
          {Icon && (
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.lighter",
                color: "primary.main",
                border: "1px solid",
                borderColor: "primary.light",
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
            </Avatar>
          )}
          <Box>
            <Typography variant="subtitle1" fontWeight={750} color="text.primary" sx={{ letterSpacing: "0.01em" }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
        {actions && <Box>{actions}</Box>}
      </Box>

      <Box>{children}</Box>
    </Paper>
  );
};

export default StudentProfileSection;
