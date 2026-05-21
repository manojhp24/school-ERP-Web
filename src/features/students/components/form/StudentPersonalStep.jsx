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

const StudentPersonalStep = () => {
  const genderOptions = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];
  return (
    <FormSectionLayout
      title="Personal Information"
      subtitle="Enter student personal details"
      leftContent={<StudentPhotoUpload />}
      icon={PersonIcon}
    >
      <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            label="First Name"
            required
            startIcon={<PersonOutlineOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            label="Last Name"
            required
            startIcon={<PersonOutlineOutlinedIcon />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: 2.5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            label="SATS Number"
            required
            startIcon={<BadgeOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectField
            label={"Gender"}
            options={genderOptions}
            startIcon={<WcOutlinedIcon />}
            required
          />
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppDateFiled
            label={"Date of Birth"}
            startIcon={<CakeOutlinedIcon />}
            required
          />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentPersonalStep;
