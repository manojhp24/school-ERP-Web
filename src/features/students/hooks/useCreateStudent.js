import { useMutation } from "@tanstack/react-query";
import { createStudentAdmission } from "../services/studentService";

const useCreateStudent = () => {
  return useMutation({
    mutationFn: createStudentAdmission,
  });
};

export default useCreateStudent;
