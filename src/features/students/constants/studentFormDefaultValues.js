const studentFormDefaultValues = {
  student: {
    firstName: "",
    lastName: "",
    satsNumber: "",
    parentDetails: {
      fatherName: "",
      motherName: "",
      fatherContactNumber: "",
      motherContactNumber: "",
    },
    personalDetails: {
      gender: "",
      dateOfBirth: "",
    },
    addressDetails: {
      addressLine: "",
      village: "",
      taluk: "",
      district: "",
      state: "",
      pincode: "",
    },
  },
  admission: {
    admissionNumber: "",
    admissionDate: "",
    rollNumber: "",
    className: "",
    section: "",
    academicYear: "",
    status: "Active",
  },
};

export default studentFormDefaultValues;
