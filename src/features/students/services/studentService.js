import apiClient from "../../../services/api/apiClient";

export const getStudents = async () => {
  const response = await apiClient.get("/students");
  return response.data;
};
