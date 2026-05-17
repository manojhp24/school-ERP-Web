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
import LoginForm from "../components/LoginForm";
import LoginBranding from "../components/LoginBranding";

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
      <LoginBranding />

      {/* Right Login Section */}

      <LoginForm />
    </Box>
  );
}

export default LoginPage;
