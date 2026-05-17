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

import loginSchemea from "../../validations/loginSchema";
import useLogin from "../hooks/useLogin";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchemea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending, isError, error, isSuccess, data } = useLogin();

  const onSubmit = (formData) => {
    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("assessToken", data?.data?.token);
      localStorage.setItem("user", data?.data?.user);
      toast.success(data?.message);
      console.log(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      const message = error?.response?.data?.message || "Login failed";

      toast.error(message);
      console.error(message);
    }
  }, [isError, error]);

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
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password")}
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
                  {isPending ? "Logging In" : "Login to Dashboard"}
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
