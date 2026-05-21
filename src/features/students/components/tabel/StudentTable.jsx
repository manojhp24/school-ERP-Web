import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { studentTableColumns } from "../../constants/studentTableColumns.jsx";
import StudentEmptyState from "../states/StudentEmptyState.jsx";
import StudentTableSkeleton from "./StudentTableSkeleton.jsx";
import useStudents from "../../hooks/useStudents.js";
import StudentErrorState from "../states/StudentErrorState.jsx";

const StudentTable = () => {
  const { students, isLoading, isError } = useStudents();

  if (isError) {
    return <StudentErrorState />;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        sx={{
          minWidth: 900,
          height: {
            xs: 500,
            md: 650,
          },
        }}
      >
        <DataGrid
          rows={students}
          columns={studentTableColumns}
          loading={isLoading}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 25]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
          slots={{
            noRowsOverlay: StudentEmptyState,
          }}
        />
      </Box>
    </Paper>
  );
};

export default StudentTable;
