import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { studentTableColumns } from "../constants/studentTableColumns.jsx";
import StudentEmptyState from "./StudentEmptyState.jsx";
import StudentTableSkeleton from "./StudentTableSkeleton.jsx";

const rows = [
  //   {
  //     _id: "6a08236bce3ae4c471c43158",
  //     firstName: "Rahul",
  //     lastName: "HS",
  //     satsNumber: "789456127",
  //     parentDetails: {
  //       fatherName: "Srinivas",
  //       motherName: "Roopa",
  //       fatherContactNumber: "6366196233",
  //       motherContactNumber: "9945651884",
  //     },
  //     personalDetails: {
  //       gender: "Male",
  //       dateOfBirth: "2003-11-24T00:00:00.000Z",
  //     },
  //     addressDetails: {
  //       village: "Hosaundavadi",
  //       taluk: "Sri Ranga Patna",
  //       district: "Mandya",
  //       state: "Karnataka",
  //       pincode: "571607",
  //     },
  //   },
];

const StudentTable = () => {
  const loading = false;
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
          rows={rows}
          columns={studentTableColumns}
          loading={loading}
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
