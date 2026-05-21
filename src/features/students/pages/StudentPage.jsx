import { useState } from "react";
import PageContainer from "../../../components/PageContainer";
import PageHeader from "../../../components/PageHeader";
import StudentTable from "../components/tabel/StudentTable";
import StudentTableToolbar from "../components/tabel/StudentTableToolBar";

const StudentPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  return (
    <>
      <PageContainer>
        <PageHeader
          title="Student"
          subtitle="Manage student records, profiles, and academic information"
        />
        <StudentTableToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
        <StudentTable
          searchQuery={searchQuery}
          genderFilter={genderFilter}
        />
      </PageContainer>
    </>
  );
};

export default StudentPage;
