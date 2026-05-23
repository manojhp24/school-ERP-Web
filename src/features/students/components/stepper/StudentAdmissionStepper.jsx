import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

// Static definitions for vertical onboarding stepper navigation
const STEP_DETAILS = [
  { label: "Personal Information", desc: "Basic details & photo", icon: PersonOutlineIcon },
  { label: "Parent Information", desc: "Parent/Guardian contacts", icon: FamilyRestroomIcon },
  { label: "Address Information", desc: "Residential location", icon: LocationOnOutlinedIcon },
  { label: "Admission Information", desc: "Academic placement", icon: SchoolOutlinedIcon },
];

const StudentAdmissionStepper = ({ steps, activeStep }) => {
  const progressPercent = ((activeStep + 1) / steps.length) * 100;

  return (
    <Box>
      {/* Desktop & Tablet View (md and up) - Vertical Stepper */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Stack spacing={0.5} sx={{ position: "relative" }}>
          {STEP_DETAILS.map((step, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;
            const StepIcon = step.icon;

            return (
              <Box key={step.label} sx={{ display: "flex", position: "relative", pb: index === STEP_DETAILS.length - 1 ? 0 : 3.5 }}>
                {/* Connecting Line */}
                {index !== STEP_DETAILS.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 20,
                      top: 40,
                      bottom: 0,
                      width: 2,
                      bgcolor: isCompleted ? "success.main" : "divider",
                      transition: "background-color 0.3s ease",
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Step Node */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "2px solid",
                    ...(isCompleted
                      ? {
                        bgcolor: "success.lighter",
                        borderColor: "success.main",
                        color: "success.main",
                      }
                      : isActive
                        ? {
                          bgcolor: "primary.lighter",
                          borderColor: "primary.main",
                          color: "primary.main",
                          boxShadow: "0px 0px 0px 4px rgba(23, 70, 162, 0.15)",
                        }
                        : {
                          bgcolor: "background.paper",
                          borderColor: "divider",
                          color: "text.disabled",
                        }),
                  }}
                >
                  {isCompleted ? (
                    <CheckIcon sx={{ fontSize: 18, fontWeight: 800 }} />
                  ) : (
                    <StepIcon sx={{ fontSize: 18 }} />
                  )}
                </Box>

                {/* Step Info */}
                <Box sx={{ ml: 2.5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={isActive || isCompleted ? 700 : 500}
                    color={isActive ? "primary.main" : isCompleted ? "text.primary" : "text.secondary"}
                    sx={{
                      fontSize: "0.9rem",
                      transition: "color 0.3s ease",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={isActive ? "text.primary" : "text.secondary"}
                    sx={{
                      fontSize: "0.75rem",
                      mt: 0.5,
                      fontWeight: isActive ? 500 : 400,
                      opacity: isUpcoming ? 0.75 : 0.9,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* Mobile & Tablet View (sm and down) - Progress bar */}
      <Box sx={{ display: { xs: "block", md: "none" }, px: 1, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 750,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "primary.main",
              fontSize: "0.75rem",
            }}
          >
            Step {activeStep + 1} of {steps.length}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            {steps[activeStep]}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 6,
            borderRadius: 3,
            bgcolor: "divider",
            "& .MuiLinearProgress-bar": {
              borderRadius: 3,
              bgcolor: "primary.main",
              background: "linear-gradient(90deg, #2563EB 0%, #1746A2 100%)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default StudentAdmissionStepper;
