import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Paper,
  Stack,
  Skeleton,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Containers & Custom Hook
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";
import useStudent from "../hooks/useStudent";

// Profile components
import StudentProfileSidebar from "../components/profile/StudentProfileSidebar";
import StudentInfoCard from "../components/profile/StudentInfoCard";
import StudentAdmissionCard from "../components/profile/StudentAdmissionCard";
import StudentParentCard from "../components/profile/StudentParentCard";
import StudentAddressCard from "../components/profile/StudentAddressCard";

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

// Profile Error Screen
const ProfileErrorState = ({ errorMsg }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "error.lighter",
          color: "error.main",
          width: 64,
          height: 64,
          mb: 3,
          border: "1px solid",
          borderColor: "error.light",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 32 }} />
      </Avatar>
      <Typography
        variant="h5"
        fontWeight={750}
        color="text.primary"
        gutterBottom
      >
        Student Profile Not Found
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 380, mb: 4 }}
      >
        {errorMsg ||
          "The student record could not be found or has been removed from the database. Please verify the ID or contact system administration."}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/student")}
        sx={{
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 700,
          px: 3,
          py: 1,
          boxShadow: "none",
        }}
      >
        Back to Directory
      </Button>
    </Box>
  );
};

const StudentProfilePage = () => {
  const { studentId } = useParams();
  const { student: studentData, isLoading, isError } = useStudent(studentId);

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
        <ProfileErrorState />
      </PageContainer>
    );
  }

  // Robustly extract data structures to support both flat and nested schemas
  const studentObj = studentData.student ? studentData.student : studentData;
  const admissionObj = studentData.admission
    ? studentData.admission
    : studentData;
  const parentDetailsObj =
    studentObj.parentDetails || studentData.parentDetails || {};
  const addressDetailsObj =
    studentObj.addressDetails || studentData.addressDetails || {};

  const fullName =
    `${studentObj.firstName || ""} ${studentObj.lastName || ""}`.trim() ||
    "N/A";

  return (
    <PageContainer>
      <PageHeader
        title="Student Profile"
        subtitle={`Viewing detailed ERP database record for ${fullName}`}
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
            <StudentProfileSidebar
              student={studentObj}
              admission={admissionObj}
            />
          </Box>
        </Grid>

        {/* Right Side: Structural Detail Panels */}
        <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
          <Stack spacing={3.5}>
            <StudentInfoCard student={studentObj} />
            <StudentAdmissionCard admission={admissionObj} />
            <StudentParentCard parentDetails={parentDetailsObj} />
            <StudentAddressCard addressDetails={addressDetailsObj} />
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default StudentProfilePage;
