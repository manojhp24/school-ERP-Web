import { Grid, Typography, Box } from "@mui/material";
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

const StudentAdmissionStep = () => {
  const classOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `Class ${i + 1}`,
    value: `${i + 1}`,
  }));
  const sectionOptions = [
    {
      label: "A",
      value: "A",
    },
    {
      label: "B",
      value: "B",
    },
  ];
  const statusOptions = [
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];

  return (
    <FormSectionLayout
      title={"Admission Information"}
      subtitle={"Enter academic admission details"}
      icon={SchoolOutlinedIcon}
    >
      <Grid container spacing={4}>
        {/* Admission & Enrollment Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ pb: 1, mb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="primary.main"
              sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Enrollment Details
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                label={"Admission Number"}
                required
                type="text"
                startIcon={<AssignmentIndOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                label={"Roll Number"}
                required
                type="text"
                startIcon={<NumbersOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppDateFiled
                label={"Admission Date"}
                startIcon={<EventOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppSelectField
                label={"Status"}
                options={statusOptions}
                startIcon={<CheckCircleOutlinedIcon fontSize="small" />}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Academic Placement */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ pb: 1, mb: 2, borderBottom: "1px solid", borderColor: "divider" }}>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="primary.main"
              sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Academic Placement
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <AppSelectField
                label={"Class"}
                options={classOptions}
                startIcon={<SchoolOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppSelectField
                label={"Section"}
                required
                options={sectionOptions}
                startIcon={<ClassOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppDateFiled
                label={"Academic year"}
                views={["year"]}
                startIcon={<CalendarMonthOutlinedIcon fontSize="small" />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentAdmissionStep;
