import generateAcademicYear from "./generateAcademicYear";

const buildStudentAdmissionPayload = (formData) => ({
  ...formData,

  student: {
    ...formData.student,

    personalDetails: {
      ...formData.student.personalDetails,

      dateOfBirth:
        formData.student.personalDetails.dateOfBirth?.format("YYYY-MM-DD"),
    },
  },

  admission: {
    ...formData.admission,

    admissionDate: formData.admission.admissionDate?.format("YYYY-MM-DD"),

    academicYear: generateAcademicYear(formData.admission.admissionDate),
  },
});

export default buildStudentAdmissionPayload;
