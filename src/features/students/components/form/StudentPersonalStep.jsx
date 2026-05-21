import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
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
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

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
      title="Personal information"
      subtitle="Add student personal info"
      leftContent={<StudentPhotoUpload />}
      icon={PersonIcon}
    >
      <Grid container spacing={1.75} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            label="First name"
            required
            startIcon={<PersonOutlineOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label="Last name" />
        </Grid>
      </Grid>

      <Grid container spacing={1.75} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            label="SATS number"
            required
            startIcon={<BadgeOutlinedIcon />}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectField
            label={"Gender"}
            options={genderOptions}
            startIcon={<WcOutlinedIcon />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1.75}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppDateFiled
            label={"Date of Birth"}
            startIcon={<CakeOutlinedIcon />}
          />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentPersonalStep;
