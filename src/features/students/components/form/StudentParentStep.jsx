import { Grid, Typography, Box, Avatar } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppTextField from "../../../../components/form/AppTextField";

const StudentParentStep = () => {
  return (
    <FormSectionLayout
      title="Parent & Guardian Details"
      subtitle="Enter parent or guardian contact information"
      icon={FamilyRestroomIcon}
    >
      <Grid container spacing={3}>
        {/* Father's Details Card */}
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
                <PersonOutlineIcon sx={{ fontSize: 16 }} />
              </Avatar>
              <Typography
                variant="subtitle2"
                fontWeight={750}
                color="primary.main"
                sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.775rem" }}
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
          </Box>
        </Grid>

        {/* Mother's Details Card */}
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
                <PersonOutlineIcon sx={{ fontSize: 16 }} />
              </Avatar>
              <Typography
                variant="subtitle2"
                fontWeight={750}
                color="primary.main"
                sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.775rem" }}
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
          </Box>
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentParentStep;
