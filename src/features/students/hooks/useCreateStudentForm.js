import studentFormDefaultValues from "../constants/studentFormDefaultValues";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCreateStudent from "./useCreateStudent";
import getErrorMessage from "../../../services/api/apiErrorHandler";
import { useEffect } from "react";
import generateAcademicYear from "../utils/generateAcademicYear";
import { zodResolver } from "@hookform/resolvers/zod";
import studentAdmissionSchema from "../validations/studentAdmissionSchema";
import buildStudentAdmissionPayload from "../utils/buildStudentAdmissionPayload";
import buildStudentFormData from "../utils/buildStudentFormData";

const useCreateStudentForm = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: zodResolver(studentAdmissionSchema),
    mode: "onChange",
    defaultValues: studentFormDefaultValues,
  });
  const { mutateAsync, isPending } = useCreateStudent();
  const onSubmit = async (formData) => {
    try {
      const payload = buildStudentAdmissionPayload(formData);

      const multiPartData = buildStudentFormData(payload);

      const response = await mutateAsync(multiPartData);
      toast.success(response.message);
      navigate("/student");

      methods.reset();
    } catch (error) {
      console.error("Failed to submit student admission:", error);
      toast.error(getErrorMessage(error));
    }
  };
  return {
    methods,
    onSubmit,
    isPending,
  };
};

export default useCreateStudentForm;
