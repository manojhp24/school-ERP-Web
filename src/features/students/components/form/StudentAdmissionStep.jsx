import { Grid, Typography, Box, Avatar } from "@mui/material";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AppTextField from "../../../../components/form/AppTextField";
import AppSelectField from "../../../../components/form/AppSelectFiled";
import AppDateFiled from "../../../../components/form/AppDateField";

import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

// Static academic placement configurations
const CLASS_OPTIONS = Array.from({ length: 10 }, (_, i) => ({
  label: `Class ${i + 1}`,
  value: `${i + 1}`,
}));

const SECTION_OPTIONS = [
  {
    label: "A",
    value: "A",
  },
  {
    label: "B",
    value: "B",
  },
];

const STATUS_OPTIONS = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
];

const StudentAdmissionStep = () => {
  return (
    <FormSectionLayout
      title="Admission Information"
      subtitle="Enter academic admission details"
      icon={SchoolOutlinedIcon}
    >
      <Grid container spacing={3}>
        {/* Admission & Enrollment Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3.5,
              bgcolor: "background.paper",
              height: "100%",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.01)",
              transition: "border-color 0.2s ease-in-out",
              "&:hover": {
                borderColor: "rgba(23, 70, 162, 0.12)",
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
                  width: 28,
                  height: 28,
                  bgcolor: "rgba(23, 70, 162, 0.08)",
                  color: "primary.main",
                }}
              >
                <AssignmentIndOutlinedIcon sx={{ fontSize: 16 }} />
              </Avatar>
              <Typography
                variant="subtitle2"
                fontWeight={750}
                color="primary.main"
                sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.775rem" }}
              >
                Enrollment Details
              </Typography>
            </Box>

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12 }}>
                <AppTextField
                  name="admission.admissionNumber"
                  label="Admission Number"
                  required
                  type="text"
                  startIcon={<AssignmentIndOutlinedIcon fontSize="small" />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppTextField
                  name="admission.rollNumber"
                  label="Roll Number"
                  required
                  type="text"
                  startIcon={<NumbersOutlinedIcon fontSize="small" />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppDateFiled
                  name="admission.admissionDate"
                  label="Admission Date"
                  required
                  startIcon={<EventOutlinedIcon fontSize="small" />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppSelectField
                  name="admission.status"
                  label="Status"
                  required
                  options={STATUS_OPTIONS}
                  startIcon={<CheckCircleOutlinedIcon fontSize="small" />}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Academic Placement */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3.5,
              bgcolor: "background.paper",
              height: "100%",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.01)",
              transition: "border-color 0.2s ease-in-out",
              "&:hover": {
                borderColor: "rgba(23, 70, 162, 0.12)",
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
                  width: 28,
                  height: 28,
                  bgcolor: "rgba(23, 70, 162, 0.08)",
                  color: "primary.main",
                }}
              >
                <SchoolOutlinedIcon sx={{ fontSize: 16 }} />
              </Avatar>
              <Typography
                variant="subtitle2"
                fontWeight={750}
                color="primary.main"
                sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.775rem" }}
              >
                Academic Placement
              </Typography>
            </Box>

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12 }}>
                <AppSelectField
                  name="admission.className"
                  label="Class"
                  required
                  options={CLASS_OPTIONS}
                  startIcon={<SchoolOutlinedIcon fontSize="small" />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppSelectField
                  name="admission.section"
                  label="Section"
                  required
                  options={SECTION_OPTIONS}
                  startIcon={<ClassOutlinedIcon fontSize="small" />}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppDateFiled
                  name="admission.academicYear"
                  label="Academic year"
                  required
                  views={["year"]}
                  startIcon={<CalendarMonthOutlinedIcon fontSize="small" />}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentAdmissionStep;
