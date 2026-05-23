import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { studentTableColumns } from "../../constants/studentTableColumns.jsx";
import StudentEmptyState from "../states/StudentEmptyState.jsx";
import StudentTableSkeleton from "./StudentTableSkeleton.jsx";
import useStudents from "../../hooks/useStudents.js";
import StudentErrorState from "../states/StudentErrorState.jsx";

const StudentTable = ({ searchQuery = "", genderFilter = "" }) => {
  const { students, isLoading, isError } = useStudents();

  if (isError) {
    return <StudentErrorState />;
  }

  // Filter students locally in-memory
  const filteredStudents = students.filter((student) => {
    // Gender Filter
    const gender = student.personalDetails?.gender || "";
    if (genderFilter && gender.toLowerCase() !== genderFilter.toLowerCase()) {
      return false;
    }

    // Search Query (SATS number, Name, Father's Name, District)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const satsNumber = (student.satsNumber || "").toLowerCase();
      const firstName = (student.firstName || "").toLowerCase();
      const lastName = (student.lastName || "").toLowerCase();
      const fullName = `${firstName} ${lastName}`.toLowerCase();
      const fatherName = (
        student.parentDetails?.fatherName || ""
      ).toLowerCase();
      const district = (student.addressDetails?.district || "").toLowerCase();

      return (
        satsNumber.includes(query) ||
        fullName.includes(query) ||
        fatherName.includes(query) ||
        district.includes(query)
      );
    }

    return true;
  });

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.03)",
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
          rows={filteredStudents}
          columns={studentTableColumns}
          loading={isLoading}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 25]}
          rowHeight={60}
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
            loadingOverlay: StudentTableSkeleton,
          }}
          slotProps={{
            noRowsOverlay: {
              isFiltered: searchQuery !== "" || genderFilter !== "",
            },
          }}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "background.neutral",
              borderBottom: "1px solid",
              borderColor: "divider",
            },
            "& .MuiDataGrid-columnHeader": {
              padding: "16px 20px",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            },
            "& .MuiDataGrid-cell": {
              padding: "12px 20px",
              borderBottom: "1px solid",
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
            },
            "& .MuiDataGrid-row": {
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "action.hover",
              },
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
            },
            "& .MuiTablePagination-root": {
              color: "text.secondary",
            },
            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
              {
                fontSize: "0.8rem",
              },
          }}
        />
      </Box>
    </Paper>
  );
};

export default StudentTable;
