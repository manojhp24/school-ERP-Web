import apiClient from "../../../services/api/apiClient";

export const getStudents = async () => {
  const response = await apiClient.get("/students");
  return response.data;
};

export const createStudentAdmission = async (payload) => {
  const headers = {};
  if (payload instanceof FormData) {
    headers["Content-Type"] = "multipart/form-data";
  }
  const response = await apiClient.post(
    "/students/student-admission",
    payload,
    {
      headers,
    },
  );
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await apiClient.get(`/students/${id}`);
  console.log(response.data);
  return response.data;
};

export const deleteStudentById = async (id) => {
  const response = await apiClient.delete(`/students/${id}`);
  return response.data;
};

export const restoreStudentById = async (id) => {
  const response = await apiClient.patch(`/students/restore/${id}`);
  return response.data;
};
