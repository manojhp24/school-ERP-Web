import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import getErrorMessage from "../../../services/api/apiErrorHandler.js";
import { deleteStudentById } from "../services/studentService.js";

const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteStudentById,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export default useDeleteStudent;
