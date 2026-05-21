import { Box, Button } from "@mui/material";

const StudentStepperActions = ({ activeSteps, setActiveStep, steps }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Button
        variant="contained"
        disabled={activeSteps === 0}
        onClick={() => setActiveStep((prev) => prev - 1)}
      >
        BACK
      </Button>
      <Button
        variant="contained"
        onClick={() => setActiveStep((prev) => prev + 1)}
      >
        {activeSteps === 3 ? "SUBMIT" : "NEXT"}
      </Button>
    </Box>
  );
};

export default StudentStepperActions;
