import apiClient from "../../../services/api/apiClient";

export const loginUser = async (payload) => {
  const response = await apiClient.post("auth/login", payload);
  return response.data;
};
