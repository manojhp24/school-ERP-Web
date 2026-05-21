import Grid from "@mui/material/Grid";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppTextField from "../../../../components/form/AppTextField";

const StudentParentStep = () => {
  return (
    <FormSectionLayout
      title={"Parent Information"}
      subtitle={"Enter parent and guardian details"}
      icon={FamilyRestroomIcon}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label="Father name" required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label="Mother name" required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label="Father contact" required type="number" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label="Mother contact" required type="number" />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentParentStep;
