import { useQuery } from "@tanstack/react-query";
import { getStudentById } from "../services/studentService";

const useStudent = (studentId) => {
  const query = useQuery({
    queryKey: ["student", studentId],
    queryFn: () => getStudentById(studentId),
    enabled: Boolean(studentId),
  });

  return {
    student: query.data?.data ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};

export default useStudent;
