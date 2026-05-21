import { Box, Step, Stepper, StepLabel, Typography, LinearProgress } from "@mui/material";

const StudentAdmissionStepper = ({ steps, activeStep }) => {
  const progressPercent = ((activeStep + 1) / steps.length) * 100;

  return (
    <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
      {/* Desktop & Tablet View (sm and up) */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-labelContainer": {
              mt: 1,
            },
            "& .MuiStepLabel-label": {
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "text.secondary",
            },
            "& .MuiStepLabel-label.Mui-active": {
              fontWeight: 600,
              color: "primary.main",
            },
            "& .MuiStepLabel-label.Mui-completed": {
              fontWeight: 600,
              color: "success.main",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Mobile View (xs only) */}
      <Box sx={{ display: { xs: "block", sm: "none" }, px: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 1 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "primary.main",
            }}
          >
            Step {activeStep + 1} of {steps.length}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
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
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default StudentAdmissionStepper;
