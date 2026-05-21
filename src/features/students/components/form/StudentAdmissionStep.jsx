import { Grid } from "@mui/material";
import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AppTextField from "../../../../components/form/AppTextField";
import AppSelectField from "../../../../components/form/AppSelectFiled";
import AppDateFiled from "../../../../components/form/AppDateField";

const StudentAdmissionStep = () => {
  const classOptions = Array.from({ length: 10 }, (_, i) => ({
    label: `Class ${i + 1}`,
    value: `${i + 1}`,
  }));
  const sectionOptions = [
    {
      label: "A",
      value: "A",
    },
    {
      label: "B",
      value: "B",
    },
  ];
  const statusOptions = [
    {
      label: "Active",
      value: "Active",
    },
    {
      label: "Inactive",
      value: "Inactive",
    },
  ];

  return (
    <FormSectionLayout
      title={"Admission Information"}
      subtitle={"Enter academic admission details"}
      icon={SchoolOutlinedIcon}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Admission Number"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField label={"Roll Number"} required type="text" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectField label={"Class"} options={classOptions} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectField label={"Section"} required options={sectionOptions} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppDateFiled label={"Academic year"} views={["year"]} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppDateFiled label={"Admission Date"} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectField label={"Status"} options={statusOptions} />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentAdmissionStep;
