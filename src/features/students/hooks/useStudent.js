import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudentById, getStudents } from "../services/studentService";

const useStudent = (id) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["student", id],
    queryFn: async () => {
      try {
        const res = await getStudentById(id);
        return res;
      } catch (err) {
        console.warn("Single-fetch failed, falling back to listing API:", err);
        const listRes = await getStudents();
        const studentList = listRes?.data || [];
        const found = studentList.find((s) => s._id === id);
        if (found) {
          return { data: found };
        }
        throw err;
      }
    },
    enabled: !!id,
    retry: 1,
    // Try to find the student in the pre-existing list cache for instantaneous loading
    initialData: () => {
      if (!id) return undefined;
      const studentsResponse = queryClient.getQueryData(["students"]);
      const studentList = studentsResponse?.data || [];
      const cachedStudent = studentList.find((s) => s._id === id);
      if (cachedStudent) {
        return { data: cachedStudent };
      }
      return undefined;
    },
  });

  return {
    student: data?.data || null,
    isLoading,
    isError,
    error,
  };
};

export default useStudent;
