import Grid from "@mui/material/Grid";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppTextField from "../../../../components/form/AppTextField";

const StudentAddressStep = () => {
  return (
    <FormSectionLayout
      title={"Address Information"}
      subtitle={"Enter student residential details"}
      icon={LocationOnOutlinedIcon}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Address Line"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Village"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"State"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"District"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Taluk"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Pincode"} required type="number" />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentAddressStep;
