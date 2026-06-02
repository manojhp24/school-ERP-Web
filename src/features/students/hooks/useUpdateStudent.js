import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudentById } from "../services/studentService.js";

const useUpdateStudent = (studentId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateStudentById(studentId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["student", studentId] });
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export default useUpdateStudent;
