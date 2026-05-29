import { z } from "zod";

const studentAdmissionSchema = z.object({
  student: z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(1, "Last name is required"),
    satsNumber: z
      .string()
      .regex(/^[0-9]{9}$/, "SATS number must contain exactly 9 digits"),
    personalDetails: z.object({
      gender: z.string().min(1, "Gender is required"),
      dateOfBirth: z.any(),
      studentImage: z.any().optional(),
    }),
    parentDetails: z.object({
      fatherName: z.string().min(3, "Father name is required"),
      motherName: z.string().min(3, "Mother name is required"),
      fatherContactNumber: z
        .string()
        .regex(/^[0-9]{10}$/, "Father contact must contain 10 digit"),
      motherContactNumber: z
        .string()
        .regex(/^[0-9]{10}$/, "Mother contact must contain 10 digit"),
    }),
    addressDetails: z.object({
      addressLine: z.string().min(5, "Address is required"),
      village: z.string().min(2, "Vilage is required"),
      taluk: z.string().min(2, "Taluk is required"),
      district: z.string().min(2, "District is required"),
      state: z.string().min(2, "State is required"),
      pincode: z.string().regex(/^[0-9]{6}$/),
    }),
  }),

  admission: z.object({
    admissionNumber: z.string().min(1, "Admission number is required"),
    rollNumber: z.string().min(1, "Roll Number is required"),
    className: z.string().min(1, "Class is required"),
    section: z.string().min(1, "Section is required"),
    academicYear: z.any(),

    admissionDate: z.any(),

    status: z.string().min(1, "Status is required"),
  }),
});

export default studentAdmissionSchema;
