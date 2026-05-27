import { Avatar, Box, Chip, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import StudentActionsMenu from "../components/tabel/StudentActionMenu";
import { colorTokens } from "../../../theme/palette";

export const studentTableColumns = [
  {
    field: "satsNumber",
    headerName: "SATS Number",
    flex: 1.2,
    minWidth: 170,
    renderCell: (params) => {
      return (
        <Typography
          variant="body2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 600,
            color: "text.secondary",
            bgcolor: "background.neutral",
            px: 1,
            py: 0.25,
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
            fontSize: "0.8rem",
          }}
        >
          {params.row.satsNumber}
        </Typography>
      );
    },
  },

  {
    field: "fullName",
    headerName: "Student Name",
    flex: 1.5,
    minWidth: 220,
    renderCell: (params) => {
      const { firstName = "", lastName = "" } = params.row;
      const firstLetter = firstName ? firstName.charAt(0).toUpperCase() : "";
      const lastLetter = lastName ? lastName.charAt(0).toUpperCase() : "";
      const initials = `${firstLetter}${lastLetter}` || "?";

      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "0.8rem",
              fontWeight: 600,
              bgcolor: colorTokens.navy[50],
              color: colorTokens.navy[600],
              border: "1px solid",
              borderColor: colorTokens.navy[100],
            }}
          >
            {initials}
          </Avatar>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            {`${firstName} ${lastName}`}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => {
      const gender = params.row.personalDetails?.gender || "";
      if (!gender) return "-";

      const isMale = gender.toLowerCase() === "male";
      return (
        <Chip
          label={gender}
          size="small"
          sx={{
            fontWeight: 500,
            fontSize: "0.75rem",
            bgcolor: isMale ? colorTokens.navy[50] : colorTokens.purple[50],
            color: isMale ? colorTokens.navy[700] : colorTokens.purple[900],
            border: "1px solid",
            borderColor: isMale
              ? colorTokens.navy[100]
              : colorTokens.purple[100],
            borderRadius: "6px",
            height: 24,
            px: 0.5,
          }}
        />
      );
    },
  },

  {
    field: "fatherName",
    headerName: "Father Name",
    flex: 1.5,
    minWidth: 200,
    renderCell: (params) => {
      return (
        <Typography variant="body2" color="text.primary">
          {params.row.parentDetails?.fatherName || "-"}
        </Typography>
      );
    },
  },

  {
    field: "fatherContact",
    headerName: "Father Contact",
    flex: 1.3,
    minWidth: 180,
    renderCell: (params) => {
      const contact = params.row.parentDetails?.fatherContactNumber || "";
      if (!contact) return "-";
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            color: "text.secondary",
          }}
        >
          <PhoneIcon sx={{ fontSize: 16, opacity: 0.7 }} />
          <Typography variant="body2" color="text.secondary">
            {contact}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: "district",
    headerName: "District",
    flex: 1.2,
    minWidth: 180,
    renderCell: (params) => {
      const district = params.row.addressDetails?.district || "";
      if (!district) return "-";
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            color: "text.secondary",
          }}
        >
          <LocationOnIcon sx={{ fontSize: 16, opacity: 0.7 }} />
          <Typography variant="body2" color="text.secondary">
            {district}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: "action",
    headerName: "Actions",
    minWidth: 100,
    renderCell: (params) => {
      return <StudentActionsMenu student={params.row} />;
    },
  },
];
