import { Grid, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import dayjs from "dayjs";

import StudentProfileSection from "./StudentProfileSection";

const calculateAge = (dobString) => {
  if (!dobString) return "N/A";
  const birth = dayjs(dobString);
  if (!birth.isValid()) return "N/A";
  const now = dayjs();
  const diffYears = now.diff(birth, "year");
  return `${diffYears} years old`;
};

const InfoItem = ({ icon: Icon, label, value }) => (
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

const StudentInfoCard = ({ student }) => {
  const { firstName = "", lastName = "", satsNumber = "", personalDetails = {} } = student || {};
  const { gender = "", dateOfBirth = "" } = personalDetails;

  const formattedDOB = dateOfBirth ? dayjs(dateOfBirth).format("DD MMMM YYYY") : "N/A";
  const calculatedAgeText = dateOfBirth ? calculateAge(dateOfBirth) : "N/A";

  return (
    <StudentProfileSection
      title="Personal Information"
      subtitle="Comprehensive bio-data and identification records"
      icon={PersonIcon}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={PersonOutlineIcon}
            label="First Name"
            value={firstName}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={PersonOutlineIcon}
            label="Last Name"
            value={lastName}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={BadgeOutlinedIcon}
            label="SATS Number"
            value={satsNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={WcOutlinedIcon}
            label="Gender"
            value={gender}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={CakeOutlinedIcon}
            label="Date of Birth"
            value={formattedDOB}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoItem
            icon={HourglassEmptyOutlinedIcon}
            label="Calculated Age"
            value={calculatedAgeText}
          />
        </Grid>
      </Grid>
    </StudentProfileSection>
  );
};

export default StudentInfoCard;
