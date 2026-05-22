import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

const StudentStepperActions = ({
  activeSteps,
  setActiveStep,
  steps,
  onSubmit,
  isPending,
}) => {
  const isLastStep = activeSteps === steps.length - 1;
  const handelNext = () => {
    if (isLastStep) {
      onSubmit();
      return;
    }
    setActiveStep((prev) => prev + 1);
  };
  return (
    <Paper
      elevation={0}
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        py: 2,
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: -2, sm: -3, md: -4 },
        mt: { xs: 4, md: 5 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px -4px 16px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        disabled={activeSteps === 0}
        onClick={() => setActiveStep((prev) => prev - 1)}
        startIcon={<ArrowBackIcon fontSize="small" />}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          px: 2.5,
          py: 1,
          borderColor: "divider",
          color: "text.secondary",
          "&:hover": {
            borderColor: "text.disabled",
            backgroundColor: "action.hover",
          },
        }}
      >
        Back
      </Button>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontWeight: 500,
          display: { xs: "none", md: "block" },
        }}
      >
        Step {activeSteps + 1} of {steps.length}:{" "}
        <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
          {steps[activeSteps]}
        </Box>
      </Typography>

      <Button
        variant="contained"
        color={activeSteps === 3 ? "success" : "primary"}
        onClick={handelNext}
        endIcon={
          isLastStep ? (
            <CheckIcon fontSize="small" />
          ) : (
            <ArrowForwardIcon fontSize="small" />
          )
        }
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          px: 3,
          py: 1,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        {isPending
          ? "Submitting...."
          : isLastStep
            ? "Submit Admission"
            : "Continue"}
      </Button>
    </Paper>
  );
};

export default StudentStepperActions;
