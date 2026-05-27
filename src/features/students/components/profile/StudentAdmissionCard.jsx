import { Grid, Box, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import dayjs from "dayjs";

import StudentProfileSection from "./StudentProfileSection";

const AdmissionItem = ({ icon: Icon, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      p: 2,
      bgcolor: "background.neutral",
      borderRadius: 3,
      border: "1px solid",
      borderColor: "divider",
      height: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 2,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        color: "primary.main",
      }}
    >
      <Icon sx={{ fontSize: 16 }} />
    </Box>
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.7rem", fontWeight: 650, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {label}
      </Typography>
      <Typography variant="body2" color="text.primary" fontWeight={700} sx={{ mt: 0.25 }}>
        {value || "—"}
      </Typography>
    </Box>
  </Box>
);

const StudentAdmissionCard = ({ admission }) => {
  const {
    admissionNumber = "",
    rollNumber = "",
    admissionDate = "",
    status = "",
    className = "",
    section = "",
    academicYear = "",
  } = admission || {};

  const formattedAdmissionDate = admissionDate ? dayjs(admissionDate).format("DD MMMM YYYY") : "N/A";

  return (
    <StudentProfileSection
      title="Academic & Admission Placement"
      subtitle="Official enrollment record details and current classroom configurations"
      icon={SchoolOutlinedIcon}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={AssignmentIndOutlinedIcon}
            label="Admission Number"
            value={admissionNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={NumbersOutlinedIcon}
            label="Roll Number"
            value={rollNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={SchoolOutlinedIcon}
            label="Class Name"
            value={className ? `Class ${className}` : ""}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={ClassOutlinedIcon}
            label="Class Section"
            value={section}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={CalendarMonthOutlinedIcon}
            label="Academic Year"
            value={academicYear}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AdmissionItem
            icon={EventOutlinedIcon}
            label="Admission Date"
            value={formattedAdmissionDate}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <AdmissionItem
            icon={CheckCircleOutlinedIcon}
            label="Academic Status"
            value={status}
          />
        </Grid>
      </Grid>
    </StudentProfileSection>
  );
};

export default StudentAdmissionCard;
