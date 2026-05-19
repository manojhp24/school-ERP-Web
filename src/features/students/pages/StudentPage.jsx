import { Box } from "@mui/material";
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";
import StudentTable from "../components/StudentTable";
import StudentTableToolbar from "../components/StudentTableToolBar";

const StudentPage = () => {
  return (
    <>
      <PageContainer>
        <PageHeader
          title="Student"
          subtitle="Manage student records, profiles, and academic information"
        />
        <StudentTableToolbar />
        <StudentTable />
      </PageContainer>
    </>
  );
};

export default StudentPage;
