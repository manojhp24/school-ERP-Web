import { useMutation } from "@tanstack/react-query";

import { loginUser } from "../services/authService";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

export default useLogin;
