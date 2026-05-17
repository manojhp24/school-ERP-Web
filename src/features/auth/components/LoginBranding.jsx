import { Box, Chip, Stack, Typography } from "@mui/material";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

import loginFeatures from "../constants/loginFeatures";
import branding from "../constants/branding";

const LoginBranding = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        flexDirection: "column",
        justifyContent: "center",
        px: 10,
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
        color: "common.white",
      }}
    >
      <Box sx={{ maxWidth: 500 }}>
        {/* Access Chip */}
        <Box
          component="img"
          src={branding.logo}
          alt={branding.schoolName}
          sx={{
            width: 72,
            height: 72,
            objectFit: "contain",
            mb: 2,
          }}
        />

        {/* Heading */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="display2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            {branding.schoolName}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontWeight: 500,
            }}
          >
            {branding.portalName}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.9,
            mb: 5,
          }}
        >
          {branding.description}
        </Typography>

        {/* Feature Chips */}
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {loginFeatures.map((item) => (
            <Box
              key={item}
              sx={{
                px: 2.5,
                py: 1.2,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.92)",
                  fontWeight: 500,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginBranding;
