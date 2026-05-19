import StudentActionsMenu from "../components/StudentActionMenu";
export const studentTableColumns = [
  {
    field: "satsNumber",
    headerName: "SATS Number",
    flex: 1.2,
    minWidth: 170,
  },

  {
    field: "fullName",
    headerName: "Student Name",
    flex: 1.5,
    minWidth: 220,

    renderCell: (params) => {
      const { firstName, lastName } = params.row;

      return `${firstName} ${lastName}`;
    },
  },

  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    minWidth: 120,

    renderCell: (params) => {
      return params.row.personalDetails?.gender || "-";
    },
  },

  {
    field: "fatherName",
    headerName: "Father Name",
    flex: 1.5,
    minWidth: 200,

    renderCell: (params) => {
      return params.row.parentDetails?.fatherName || "-";
    },
  },

  {
    field: "fatherContact",
    headerName: "Father Contact",
    flex: 1.3,
    minWidth: 180,

    renderCell: (params) => {
      return params.row.parentDetails?.fatherContactNumber || "-";
    },
  },

  {
    field: "district",
    headerName: "District",
    flex: 1.2,
    minWidth: 180,

    renderCell: (params) => {
      return params.row.addressDetails?.district || "-";
    },
  },
  {
    field: "action",
    headerName: "Actions",
    minWidth: 100,

    renderCell: () => {
      return <StudentActionsMenu />;
    },
  },
];
