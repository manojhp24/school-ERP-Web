import { useParams, useNavigate } from "react-router-dom";
import { FormProvider } from "react-hook-form";
import { Box, Button, CircularProgress, Stack, Paper } from "@mui/material";
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";

import StudentAdmissionStepper from "../components/stepper/StudentAdmissionStepper";
import StudentStepperActions from "../components/stepper/StudentStepperActions";
import StudentPersonalStep from "../components/form/StudentPersonalStep";
import StudentParentStep from "../components/form/StudentParentStep";
import StudentAddressStep from "../components/form/StudentAddressStep";
import StudentAdmissionStep from "../components/form/StudentAdmissionStep";

import useStudent from "../hooks/useStudent";
import useUpdateStudentForm from "../hooks/useUpdateStudentForm";

const EditStudentPage = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { student, isLoading, isError } = useStudent(studentId);
  const { methods, onSubmit, isPending } = useUpdateStudentForm(
    studentId,
    student,
  );

  if (isLoading) {
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <CircularProgress />
    </Box>;
  }

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <PageHeader
          title="Edit student profile"
          subtitle="Modify ERP student credentials, background, and academic data"
          breadcrumbs={[
            { label: "Student List", path: "/student" },
            { label: "Student Profile", path: `/student/${studentId}` },
            { label: "Edit Profile", path: `/student/edit/${studentId}` },
          ]}
        />
        <Stack spacing={4} sx={{ mt: 3, mb: 12 }}>
          <StudentPersonalStep />
          <StudentParentStep />
          <StudentAddressStep />
          <StudentAdmissionStep />
        </Stack>
        <Paper
          elevation={4}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            p: 2.5,
            bgcolor: "background.paper",
            borderTop: "1px solid",
            borderColor: "divider",
            zIndex: 1100,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(`/student/${studentId}`)}
            disabled={isPending}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={methods.handleSubmit(onSubmit)}
            disabled={isPending}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            {isPending ? (
              <CircularProgress
                enableTrackSlot
                size="30px"
                aria-label="Loading…"
              />
            ) : (
              "Save Changes"
            )}
          </Button>
        </Paper>
      </PageContainer>
    </FormProvider>
  );
};

export default EditStudentPage;
