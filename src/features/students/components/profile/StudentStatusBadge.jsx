import { Chip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const StudentStatusBadge = ({ status }) => {
  const isActive = status?.toLowerCase() === "active";

  return (
    <Chip
      icon={
        isActive ? (
          <CheckCircleOutlineIcon sx={{ fontSize: "14px !important" }} />
        ) : (
          <RemoveCircleOutlineIcon sx={{ fontSize: "14px !important" }} />
        )
      }
      label={status || "Inactive"}
      size="small"
      sx={{
        fontWeight: 650,
        fontSize: "0.75rem",
        borderRadius: "6px",
        height: 24,
        px: 0.5,
        backgroundColor: isActive ? "success.lighter" : "error.lighter",
        color: isActive ? "success.dark" : "error.dark",
        border: "1px solid",
        borderColor: isActive ? "success.light" : "error.light",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        "& .MuiChip-icon": {
          color: "inherit",
          marginRight: "4px !important",
        },
      }}
    />
  );
};

export default StudentStatusBadge;
