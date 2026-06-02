import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import dayjs from "dayjs";

import studentAdmissionSchema from "../validations/studentAdmissionSchema";
import useUpdateStudent from "./useUpdateStudent";
import buildStudentAdmissionPayload from "../utils/buildStudentAdmissionPayload";
import buildStudentFormData from "../utils/buildStudentFormData";
import getErrorMessage from "../../../services/api/apiErrorHandler";

const useUpdateStudentForm = (studentId, studentData) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useUpdateStudent(studentId);
  const methods = useForm({
    resolver: zodResolver(studentAdmissionSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (studentData) {
      const { student, admission } = studentData;

      methods.reset({
        student: {
          firstName: student.firstName || "",
          lastName: student.lastName || "",
          satsNumber: student.satsNumber || "",
          parentDetails: student.parentDetails || {},
          personalDetails: {
            gender: student.personalDetails?.gender,
            dateOfBirth: student.personalDetails?.dateOfBirth
              ? dayjs(student.personalDetails.dateOfBirth)
              : null,
            studentImage: student.personalDetails.studentImage,
          },
          addressDetails: student.addressDetails,
        },
        admission: {
          admissionNumber: admission.admissionNumber,
          admissionDate: admission.admissionDate
            ? dayjs(admission.admissionDate)
            : null,
          rollNumber: admission.rollNumber || "",
          className: admission.className || "",
          section: admission.section || "",
          academicYear: admission.academicYear
            ? dayjs(
                admission.academicYear.split(" - ")[0] ||
                  admission.academicYear,
              )
            : null,
          status: admission.status || "Active",
        },
      });
    }
  }, [studentData, methods]);
  const onSubmit = async (formData) => {
    try {
      const payload = buildStudentAdmissionPayload(formData);
      const multiPartPayload = buildStudentFormData(payload);
      const response = await mutateAsync(multiPartPayload);
      toast.success(response.message || "Student profile updated ....");
      navigate(`/student/${studentId}`);
    } catch (error) {
      console.error("Failed to update student:", error);
      console.log(getErrorMessage(error));

      toast.error(getErrorMessage(error));
    }
  };

  return {
    methods,
    onSubmit,
    isPending,
  };
};

export default useUpdateStudentForm;
