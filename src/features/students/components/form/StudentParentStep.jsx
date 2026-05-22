import { Grid, Typography, Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppTextField from "../../../../components/form/AppTextField";

const StudentParentStep = () => {
  return (
    <FormSectionLayout
      title={"Parent & Guardian Details"}
      subtitle={"Enter parent or guardian contact information"}
      icon={FamilyRestroomIcon}
    >
      <Grid container spacing={4}>
        {/* Father's Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              pb: 1,
              mb: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="primary.main"
              sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Father's Information
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                name="student.parentDetails.fatherName"
                label="Father's Name"
                required
                type="text"
                startIcon={<PersonOutlineIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                name="student.parentDetails.fatherContactNumber"
                label="Father's Contact Number"
                required
                type="text"
                startIcon={<PhoneIcon fontSize="small" />}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Mother's Details */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              pb: 1,
              mb: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="primary.main"
              sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              Mother's Information
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                name="student.parentDetails.motherName"
                label="Mother's Name"
                required
                type="text"
                startIcon={<PersonOutlineIcon fontSize="small" />}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <AppTextField
                name="student.parentDetails.motherContactNumber"
                label="Mother's Contact Number"
                required
                type="text"
                startIcon={<PhoneIcon fontSize="small" />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentParentStep;
