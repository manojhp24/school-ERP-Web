import studentFormDefaultValues from "../constants/studentFormDefaultValues";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useCreateStudent from "./useCreateStudent";
import getErrorMessage from "../../../services/api/apiErrorHandler";
import { useEffect } from "react";
import generateAcademicYear from "../utils/generateAcademicYear";

const useCreateStudentForm = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: studentFormDefaultValues,
  });
  const { mutateAsync, isPending, isError, error, isSuccess, data } =
    useCreateStudent();
  const onSubmit = async (formData) => {
    try {
      const payload = {
        ...formData,

        student: {
          ...formData.student,

          personalDetails: {
            ...formData.student.personalDetails,

            dateOfBirth:
              formData.student.personalDetails.dateOfBirth?.format(
                "YYYY-MM-DD",
              ),
          },
        },

        admission: {
          ...formData.admission,

          admissionDate: formData.admission.admissionDate?.format("YYYY-MM-DD"),

          academicYear: generateAcademicYear(formData.admission.admissionDate),
        },
      };
      const response = await mutateAsync(payload);
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isSuccess && data) {
      toast.success(data?.message);

      methods.reset();

      navigate("/student");
    }
  }, [isSuccess, data]);
  useEffect(() => {
    if (isError) {
      const message = getErrorMessage(error);

      toast.error(message);
      console.trace;
    }
  }, [isError, error]);
  return {
    methods,
    onSubmit,
    isPending,
  };
};

export default useCreateStudentForm;
