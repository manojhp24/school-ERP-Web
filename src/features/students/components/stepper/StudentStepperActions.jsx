import { Box, Button, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormContext } from "react-hook-form";
// Step fields mapping for targeted react-hook-form validation
const STEP_FIELDS = [
  [
    "student.firstName",
    "student.lastName",
    "student.satsNumber",
    "student.personalDetails.gender",
    "student.personalDetails.dateOfBirth",
  ],
  [
    "student.parentDetails.fatherName",
    "student.parentDetails.fatherContactNumber",
    "student.parentDetails.motherName",
    "student.parentDetails.motherContactNumber",
  ],
  [
    "student.addressDetails.addressLine",
    "student.addressDetails.village",
    "student.addressDetails.district",
    "student.addressDetails.taluk",
    "student.addressDetails.state",
    "student.addressDetails.pincode",
  ],
  [
    "admission.admissionNumber",
    "admission.rollNumber",
    "admission.admissionDate",
    "admission.status",
    "admission.className",
    "admission.section",
    "admission.academicYear",
  ],
];

const StudentStepperActions = ({
  activeSteps,
  setActiveStep,
  steps,
  onSubmit,
  isPending,
  trigger,
}) => {
  const isLastStep = activeSteps === steps.length - 1;
  const {
    formState: { errors },
  } = useFormContext();

  const handleNext = async () => {
    if (trigger) {
      const stepFields = STEP_FIELDS[activeSteps];
      const isStepFormValid = await trigger(stepFields);
      console.log(errors);
      if (!isStepFormValid) {
        toast.error("Please complete all required fields correctly.");
        console.log(
          await trigger(stepFields, {
            shouldFocus: true,
          }),
        );

        return;
      }
    }

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
        bottom: 16,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
        py: 2,
        px: { xs: 2, sm: 3, md: 4 },
        mt: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow:
          "0px -4px 20px rgba(15, 23, 42, 0.02), 0px 10px 30px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        disabled={activeSteps === 0}
        onClick={() => setActiveStep((prev) => prev - 1)}
        startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
        sx={{
          borderRadius: 2.5,
          textTransform: "none",
          fontWeight: 700,
          px: { xs: 2, sm: 3 },
          py: 1,
          borderColor: "divider",
          color: "text.secondary",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            borderColor: "text.disabled",
            backgroundColor: "action.hover",
            color: "text.primary",
            transform: "translateX(-2px)",
          },
          "&.Mui-disabled": {
            borderColor: "divider",
            color: "text.disabled",
          },
        }}
      >
        Back
      </Button>

      {/* Styled Stage Status Badge (Pulse Animation) */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 1.5,
          px: 2.5,
          py: 0.75,
          borderRadius: 20,
          bgcolor: "background.neutral",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            bgcolor: isLastStep ? "success.main" : "primary.main",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: `0 0 0 0 ${isLastStep ? "rgba(22, 163, 74, 0.4)" : "rgba(23, 70, 162, 0.4)"}`,
              },
              "70%": {
                boxShadow: `0 0 0 6px ${isLastStep ? "rgba(22, 163, 74, 0)" : "rgba(23, 70, 162, 0)"}`,
              },
              "100%": {
                boxShadow: `0 0 0 0 ${isLastStep ? "rgba(22, 163, 74, 0)" : "rgba(23, 70, 162, 0)"}`,
              },
            },
          }}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            fontWeight: 600,
            fontSize: "0.775rem",
            letterSpacing: "0.01em",
          }}
        >
          Step {activeSteps + 1} of {steps.length}:{" "}
          <Box component="span" sx={{ color: "text.primary", fontWeight: 750 }}>
            {steps[activeSteps]}
          </Box>
        </Typography>
      </Box>

      <Button
        type="button"
        variant="contained"
        color={isLastStep ? "success" : "primary"}
        onClick={handleNext}
        disabled={isPending}
        endIcon={
          isPending ? null : isLastStep ? (
            <CheckIcon className="end-icon" sx={{ fontSize: 16 }} />
          ) : (
            <ArrowForwardIcon className="end-icon" sx={{ fontSize: 16 }} />
          )
        }
        sx={{
          borderRadius: 2.5,
          textTransform: "none",
          fontWeight: 700,
          px: { xs: 2.5, sm: 3.5 },
          py: 1,
          boxShadow: isLastStep
            ? "0px 4px 12px rgba(22, 163, 74, 0.2)"
            : "0px 4px 12px rgba(23, 70, 162, 0.2)",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            boxShadow: isLastStep
              ? "0px 6px 16px rgba(22, 163, 74, 0.3)"
              : "0px 6px 16px rgba(23, 70, 162, 0.3)",
            transform: "translateY(-1px)",
            "& .end-icon": {
              transform: isLastStep ? "none" : "translateX(3px)",
            },
          },
          "& .end-icon": {
            transition: "transform 0.2s ease-in-out",
          },
        }}
      >
        {isPending ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CircularProgress size={16} color="inherit" />
            <Typography variant="body2" fontWeight={700}>
              Submitting...
            </Typography>
          </Box>
        ) : isLastStep ? (
          "Complete Enrollment"
        ) : (
          "Continue"
        )}
      </Button>
    </Paper>
  );
};

export default StudentStepperActions;
