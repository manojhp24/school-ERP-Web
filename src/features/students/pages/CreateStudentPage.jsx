import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

// Shared page containers & header components
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";

// Local feature wizard components
import StudentAdmissionStepper from "../components/stepper/StudentAdmissionStepper";
import StudentStepperActions from "../components/stepper/StudentStepperActions";
import StudentPersonalStep from "../components/form/StudentPersonalStep";
import StudentParentStep from "../components/form/StudentParentStep";
import StudentAddressStep from "../components/form/StudentAddressStep";
import StudentAdmissionStep from "../components/form/StudentAdmissionStep";

// Feature custom hooks
import useCreateStudentForm from "../hooks/useCreateStudentForm";
import {
  STUDENT_STEP_GUIDES,
  STUDENT_ADMISSION_STEPS,
} from "../constants/studentAdmissionConstants";

const CreateStudentPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { methods, isPending, onSubmit } = useCreateStudentForm();
  console.log(methods.watch());
  // Dynamic step content lookup
  const stepContent = [
    <StudentPersonalStep />,
    <StudentParentStep />,
    <StudentAddressStep />,
    <StudentAdmissionStep />,
  ];

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <PageHeader
          title="Student Onboarding"
          subtitle="Enroll and configure comprehensive student ERP profiles"
        />

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ mt: { xs: 1, md: 2.5 } }}
        >
          {/* Left Column — Sticky Stepper Dashboard Nav */}
          <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: 100 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
                zIndex: 100,
              }}
            >
              {/* Stepper Progress Navigator */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  boxShadow:
                    "0px 1px 3px rgba(0,0,0,0.01), 0px 4px 16px rgba(15, 23, 42, 0.02)",
                  bgcolor: "background.paper",
                }}
              >
                <StudentAdmissionStepper
                  steps={STUDENT_ADMISSION_STEPS}
                  activeStep={activeStep}
                />
              </Paper>

              {/* Dynamic Onboarding Tips Card */}
              <Paper
                elevation={0}
                sx={{
                  display: { xs: "none", md: "block" },
                  p: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(23, 70, 162, 0.02) 0%, rgba(23, 70, 162, 0.00) 100%)",
                  bgcolor: "background.paper",
                }}
              >
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "primary.main",
                    }}
                  >
                    <LightbulbOutlinedIcon sx={{ fontSize: 18 }} />
                    <Typography
                      variant="subtitle2"
                      fontWeight={750}
                      sx={{ letterSpacing: "0.02em" }}
                    >
                      Onboarding Tips
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.825rem", lineHeight: 1.5 }}
                  >
                    {STUDENT_STEP_GUIDES[activeStep].tip}
                  </Typography>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2.5,
                      bgcolor: "background.neutral",
                      borderLeft: "3px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: "block",
                        fontSize: "0.775rem",
                        lineHeight: 1.45,
                      }}
                    >
                      <strong>Requirement:</strong>{" "}
                      {STUDENT_STEP_GUIDES[activeStep].note}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Grid>

          {/* Right Column — Main Form Step Area */}
          <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: { md: "calc(100vh - 240px)" },
                height: "100%",
              }}
            >
              <Box
                key={activeStep}
                sx={{
                  flexGrow: 1,
                  mb: 4,
                }}
              >
                {stepContent[activeStep]}
              </Box>

              {/* Responsive Sticky Actions Footer */}
              <StudentStepperActions
                activeSteps={activeStep}
                setActiveStep={setActiveStep}
                steps={STUDENT_ADMISSION_STEPS}
                onSubmit={methods.handleSubmit(onSubmit)}
                isPending={isPending}
                trigger={methods.trigger}
              />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </FormProvider>
  );
};

export default CreateStudentPage;
