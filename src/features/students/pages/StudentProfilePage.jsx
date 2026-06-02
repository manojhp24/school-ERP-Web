import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Paper,
  Stack,
  Skeleton,
  Button,
  Tooltip,
} from "@mui/material";
import { toast } from "react-toastify";

// Containers & Custom Hook
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";
import useStudent from "../hooks/useStudent";

import EditDocumentIcon from "@mui/icons-material/EditDocument";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Profile components
import StudentProfileSidebar from "../components/profile/StudentProfileSidebar";
import StudentInfoCard from "../components/profile/StudentInfoCard";
import StudentAdmissionCard from "../components/profile/StudentAdmissionCard";
import StudentParentCard from "../components/profile/StudentParentCard";
import StudentAddressCard from "../components/profile/StudentAddressCard";
import StudentErrorState from "../components/states/StudentErrorState";

// Profile Skeleton Loading Screen
const ProfileSkeleton = () => (
  <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: 1 }}>
    {/* Left Sidebar Skeleton */}
    <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4, md: 3.5 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 4.5,
          textAlign: "center",
          bgcolor: "background.paper",
        }}
      >
        <Stack alignItems="center" spacing={3}>
          <Skeleton variant="circular" width={110} height={110} />
          <Skeleton variant="text" width="60%" height={32} />
          <Skeleton
            variant="rectangular"
            width="40%"
            height={24}
            sx={{ borderRadius: 1.5 }}
          />
        </Stack>
        <Box
          sx={{ my: 4, borderBottom: "1px solid", borderColor: "divider" }}
        />
        <Stack spacing={3.5}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Skeleton variant="circular" width={32} height={32} />
              <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                <Skeleton variant="text" width="30%" height={14} />
                <Skeleton variant="text" width="70%" height={20} />
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Grid>

    {/* Right Details Cards Skeletons */}
    <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
      <Stack spacing={3.5}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3, md: 3.5 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 4,
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{ display: "flex", gap: 2, mb: 3.5, alignItems: "center" }}
            >
              <Skeleton variant="circular" width={36} height={36} />
              <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                <Skeleton variant="text" width="20%" height={24} />
                <Skeleton variant="text" width="40%" height={16} />
              </Box>
            </Box>
            <Grid container spacing={2.5}>
              {Array.from({ length: 4 }).map((_, j) => (
                <Grid key={j} size={{ xs: 12, sm: 6 }}>
                  <Skeleton
                    variant="rectangular"
                    height={60}
                    sx={{ borderRadius: 3 }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        ))}
      </Stack>
    </Grid>
  </Grid>
);

const StudentProfilePage = () => {
  const { studentId } = useParams();
  const { student: studentData, isLoading, isError } = useStudent(studentId);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/student/edit/${studentId}`);
  };

  // Handle Loading State
  if (isLoading) {
    return (
      <PageContainer>
        <Box
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            pb: 2.5,
            mb: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ borderRadius: 2.5 }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" width="200px" height={32} />
            <Skeleton variant="text" width="320px" height={20} />
          </Box>
        </Box>
        <ProfileSkeleton />
      </PageContainer>
    );
  }

  // Handle Error/Empty State
  if (isError || !studentData) {
    return (
      <PageContainer>
        <StudentErrorState
          title="Student Profile Not Found"
          message="The requested student profile could not be loaded."
        />
      </PageContainer>
    );
  }

  const { student, admission } = studentData;

  const { parentDetails = {} } = student;

  const { addressDetails = {} } = student;

  const fullName =
    `${student.firstName || ""} ${student.lastName || ""}`.trim() || "N/A";
  console.log(student.isDeleted);
  return (
    <PageContainer>
      <PageHeader
        title="Student Profile"
        subtitle={`Viewing detailed ERP database record for ${fullName}`}
        breadcrumbs={[
          { label: "Student List", path: "/student" },
          { label: "Student Profile", path: `/student/${studentId}` },
        ]}
        actions={
          <Box sx={{ display: "flex", gap: 2 }}>
            <Tooltip title="Edit student">
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditDocumentIcon />}
                onClick={handleUpdateClick}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Edit
              </Button>
            </Tooltip>
            <Tooltip title="Deactivate student">
              <Button
                variant="contained"
                color={student.isDeleted ? "success" : "error"}
                startIcon={
                  student.isDeleted ? (
                    <CheckCircleOutlineIcon />
                  ) : (
                    <DeleteOutlineIcon />
                  )
                }
                onClick={handleUpdateClick}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {student.isDeleted ? "Activate" : "Deactivate"}
              </Button>
            </Tooltip>
          </Box>
        }
      />

      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mt: { xs: 1, md: 2 } }}>
        {/* Left Side: Dynamic Sticky Profile Summary Sidebar */}
        <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: 100 },
              zIndex: 90,
            }}
          >
            <StudentProfileSidebar student={student} admission={admission} />
          </Box>
        </Grid>

        {/* Right Side: Structural Detail Panels */}
        <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
          <Stack spacing={3.5}>
            <StudentInfoCard student={student} />
            <StudentAdmissionCard admission={admission} />
            <StudentParentCard parentDetails={parentDetails} />
            <StudentAddressCard addressDetails={addressDetails} />
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default StudentProfilePage;
