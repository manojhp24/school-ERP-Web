import { Grid, Box, Typography, Avatar } from "@mui/material";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";

import StudentProfileSection from "./StudentProfileSection";

const ParentDetailBox = ({ title, name, contact }) => (
  <Box
    sx={{
      p: { xs: 2.5, sm: 3 },
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 4,
      bgcolor: "background.paper",
      height: "100%",
      transition: "border-color 0.25s ease-in-out",
      "&:hover": {
        borderColor: "primary.light",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        pb: 1.75,
        mb: 2.5,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Avatar
        sx={{
          width: 30,
          height: 30,
          bgcolor: "primary.lighter",
          color: "primary.main",
          border: "1px solid",
          borderColor: "primary.light",
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: 16 }} />
      </Avatar>
      <Typography
        variant="subtitle2"
        fontWeight={750}
        color="primary.main"
        sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.775rem" }}
      >
        {title}
      </Typography>
    </Box>

    <Grid container spacing={2.5}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.7rem", fontWeight: 650, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Full Name
        </Typography>
        <Typography variant="body2" color="text.primary" fontWeight={700} sx={{ mt: 0.25 }}>
          {name || "—"}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.7rem", fontWeight: 650, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Contact Number
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
          <PhoneIcon sx={{ fontSize: 15, color: "text.secondary" }} />
          <Typography variant="body2" color="text.primary" fontWeight={700}>
            {contact || "—"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const StudentParentCard = ({ parentDetails }) => {
  const {
    fatherName = "",
    motherName = "",
    fatherContactNumber = "",
    motherContactNumber = "",
  } = parentDetails || {};

  return (
    <StudentProfileSection
      title="Parent & Guardian Information"
      subtitle="Authorized family details and primary emergency contacts"
      icon={FamilyRestroomIcon}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ParentDetailBox
            title="Father's Details"
            name={fatherName}
            contact={fatherContactNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ParentDetailBox
            title="Mother's Details"
            name={motherName}
            contact={motherContactNumber}
          />
        </Grid>
      </Grid>
    </StudentProfileSection>
  );
};

export default StudentParentCard;
