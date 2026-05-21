import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../services/studentService";

const useStudents = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  return {
    students: data?.data || [],
    isLoading,
    isError,
    error,
  };
};

export default useStudents;
