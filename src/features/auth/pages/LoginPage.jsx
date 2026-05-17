import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "58% 42%",
        },
        bgcolor: "background.default",
      }}
    >
      {/* Left Branding Section */}
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Content */}
        <Box sx={{ maxWidth: 500, zIndex: 2 }}>
          <Chip
            icon={<ShieldOutlinedIcon />}
            label="Administrator Access"
            sx={{
              mb: 4,
              bgcolor: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: 2,
              px: 1,
            }}
          />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="display2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              School ERP
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontWeight: 500,
              }}
            >
              Administrator Portal
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.9,
              mb: 5,
            }}
          >
            Securely manage students, admissions, attendance, academics, staff,
            and school operations from one centralized platform.
          </Typography>

          {/* Feature Highlights */}
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {[
              "Student Management",
              "Admissions",
              "Attendance",
              "Academics",
              "Staff Control",
              "Administration",
            ].map((item) => (
              <Box
                key={item}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  borderRadius: 999,
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
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

      {/* Right Login Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 6,
          bgcolor: "background.paper",
          position: "relative",
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 430,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 5,
            overflow: "hidden",
            boxShadow: "0px 20px 40px rgba(15,23,42,0.08)",
          }}
        >
          {/* Top Accent Bar */}
          <Box
            sx={{
              height: 6,
              bgcolor: "primary.main",
            }}
          />

          <CardContent
            sx={{
              p: 5,
            }}
          >
            <Stack spacing={4}>
              {/* Header */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 1,
                    fontWeight: 700,
                  }}
                >
                  Welcome Back
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                  }}
                >
                  Login to securely access the School ERP administrator
                  dashboard.
                </Typography>
              </Box>

              {/* Form */}
              <Stack spacing={2.5}>
                <TextField fullWidth label="Admin Email" type="email" />

                <TextField fullWidth label="Password" type="password" />
              </Stack>

              {/* Login Button */}
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                Login to Dashboard
              </Button>

              {/* Footer */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="caption" color="text.secondary">
                  Authorized administrators only
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Need Help?
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default LoginPage;
