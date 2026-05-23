import { Grid } from "@mui/material";
import StudentPhotoUpload from "./StudentPhotoUpload";
import AppTextField from "../../../../components/form/AppTextField";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppSelectField from "../../../../components/form/AppSelectFiled";
import AppDateFiled from "../../../../components/form/AppDateField";

// Static gender options definition
const GENDER_OPTIONS = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const StudentPersonalStep = () => {
  return (
    <FormSectionLayout
      title="Personal Information"
      subtitle="Enter student personal details"
      leftContent={<StudentPhotoUpload />}
      icon={PersonIcon}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.firstName"
            label="First Name"
            required
            startIcon={<PersonOutlineOutlinedIcon fontSize="small" />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.lastName"
            label="Last Name"
            required
            startIcon={<PersonOutlineOutlinedIcon fontSize="small" />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.satsNumber"
            label="SATS Number"
            required
            startIcon={<BadgeOutlinedIcon fontSize="small" />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AppSelectField
            name="student.personalDetails.gender"
            label="Gender"
            options={GENDER_OPTIONS}
            startIcon={<WcOutlinedIcon fontSize="small" />}
            required
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AppDateFiled
            name="student.personalDetails.dateOfBirth"
            label="Date of Birth"
            startIcon={<CakeOutlinedIcon fontSize="small" />}
            required
          />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentPersonalStep;
