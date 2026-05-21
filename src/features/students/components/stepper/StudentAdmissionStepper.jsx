import { Box, Step, Stepper, StepLabel } from "@mui/material";

const StudentAdmissionStepper = ({ steps, activeStep }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StudentAdmissionStepper;
