import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import getErrorMessage from "../../../services/api/apiErrorHandler.js";
import { restoreStudentById } from "../services/studentService.js";

const useRestoreStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: restoreStudentById,
    onSuccess: (data) => {
      toast.success(data.message || "Student profile activated successfully");
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export default useRestoreStudent;
