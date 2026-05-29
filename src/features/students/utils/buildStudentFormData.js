const buildStudentFormData = (payload) => {
  const formData = new FormData();

  const studentImage = payload.student.personalDetails.studentImage;

  if (studentImage instanceof File) {
    formData.append("studentImage", studentImage);
  }

  const studentPayLoad = structuredClone(payload);
  delete studentPayLoad.student.personalDetails.studentImage;

  formData.append("student", JSON.stringify(studentPayLoad));
  return formData;
};

export default buildStudentFormData;
