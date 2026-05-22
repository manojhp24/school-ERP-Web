import { FormProvider } from "react-hook-form";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";
import StudentAdmissionStepper from "../components/stepper/StudentAdmissionStepper";
import StudentStepperActions from "../components/stepper/StudentStepperActions";
import StudentPersonalStep from "../components/form/StudentPersonalStep";
import StudentParentStep from "../components/form/StudentParentStep";
import StudentAddressStep from "../components/form/StudentAddressStep";
import StudentAdmissionStep from "../components/form/StudentAdmissionStep";
import studentFormDefaultValues from "../constants/studentFormDefaultValues";
import useCreateStudent from "../hooks/useCreateStudent";
import useCreateStudentForm from "../hooks/useCreateStudentForm";

const CreateStudentPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { methods, isPending, onSubmit } = useCreateStudentForm();
  const steps = [
    "Personal Information",
    "Parent Information",
    "Address Information",
    "Admission Information",
  ];
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
          title="Create Student"
          subtitle="Add and manage student information"
        />
        <StudentAdmissionStepper steps={steps} activeStep={activeStep} />
        <Box>{stepContent[activeStep]}</Box>
        <StudentStepperActions
          activeSteps={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          onSubmit={methods.handleSubmit(onSubmit)}
          isPending={isPending}
        />
      </PageContainer>
    </FormProvider>
  );
};

export default CreateStudentPage;
