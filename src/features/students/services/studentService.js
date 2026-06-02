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

export const getStudentById = async (studentId) => {
  const response = await apiClient.get(`/students/${studentId}`);
  return response.data;
};

export const updateStudentById = async (studentId, payload) => {
  const headers = {};
  if (payload instanceof FormData) {
    headers["content-Type"] = "multipart/form-data";
  }
  const response = await apiClient.patch(`/students/${studentId}`, payload, {
    headers,
  });
  return response.data;
};

export const deleteStudentById = async (studentId) => {
  const response = await apiClient.delete(`/students/${studentId}`);
  return response.data;
};

export const restoreStudentById = async (studentId) => {
  const response = await apiClient.patch(`/students/restore/${studentId}`);
  return response.data;
};
