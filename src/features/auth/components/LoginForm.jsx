import {
  Box,
  Card,
  Button,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

import loginSchema from "../validations/loginSchema";
import useLogin from "../hooks/useLogin";
import { useEffect } from "react";
import useLoginForm from "../hooks/useLoginForm";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isPending,
    handleTogglePassword,
    showPassword,
  } = useLoginForm();
  return (
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
          borderRadius: 1,
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
                Login to securely access the School ERP administrator dashboard.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Admin Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email")}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password")}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? (
                              <VisibilityOffOutlinedIcon />
                            ) : (
                              <VisibilityOutlinedIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={isPending}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: "none",
                  }}
                >
                  {isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login to Dashboard"
                  )}
                </Button>
              </Stack>
            </Box>

            {/* Login Button */}

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
  );
};

export default LoginForm;
