import apiClient from "../../../services/api/apiClient";

export const getStudents = async () => {
  const response = await apiClient.get("/students");
  return response.data;
};

export const createStudentAdmission = async (payload) => {
  const response = await apiClient.post("/students/student-admission", payload);
  return response.data;
};
