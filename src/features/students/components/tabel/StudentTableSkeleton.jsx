import { Stack, Skeleton } from "@mui/material";

const StudentTableSkeleton = () => {
  return (
    <Stack spacing={1} p={2}>
      {Array.from(new Array(8)).map((_, index) => (
        <Skeleton key={index} variant="rounded" height={52} animation="wave" />
      ))}
    </Stack>
  );
};

export default StudentTableSkeleton;
