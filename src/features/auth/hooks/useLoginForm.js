import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

import loginSchema from "../../validations/loginSchema";
import useLogin from "./useLogin";
import getErrorMessage from "../../../services/api/apiErrorHandler";

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),

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
      localStorage.setItem("accessToken", data?.data?.token);

      localStorage.setItem("user", JSON.stringify(data?.data?.user));

      toast.success(data?.message);
      // navigate("/dashboard");
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  }, [isError, error]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isPending,
    handleTogglePassword,
    showPassword,
  };
};

export default useLoginForm;
