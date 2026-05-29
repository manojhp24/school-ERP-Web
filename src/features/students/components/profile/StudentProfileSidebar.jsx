import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";

import StudentStatusBadge from "./StudentStatusBadge";
import { colorTokens } from "../../../../theme/palette";

const StudentProfileSidebar = ({ student, admission }) => {
  const { firstName = "", lastName = "", satsNumber = "", parentDetails = {}, personalDetails = {} } = student || {};
  const { className = "", section = "", rollNumber = "", academicYear = "", status = "Active" } = admission || {};

  const firstLetter = firstName ? firstName.charAt(0).toUpperCase() : "";
  const lastLetter = lastName ? lastName.charAt(0).toUpperCase() : "";
  const initials = `${firstLetter}${lastLetter}` || "?";
  const imageUrl = personalDetails?.studentImage;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, sm: 4, md: 3.5 },
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4.5,
        boxShadow: "0px 1px 3px rgba(0,0,0,0.01), 0px 4px 16px rgba(15, 23, 42, 0.02)",
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      {/* Profile Photo / Initials */}
      <Stack alignItems="center" spacing={2.5}>
        <Avatar
          src={imageUrl}
          sx={{
            width: 110,
            height: 110,
            fontSize: "2.25rem",
            fontWeight: 800,
            bgcolor: colorTokens.navy[50],
            color: colorTokens.navy[600],
            border: "3px solid",
            borderColor: colorTokens.navy[100],
            boxShadow: "0px 4px 14px rgba(23, 70, 162, 0.08)",
          }}
        >
          {initials}
        </Avatar>

        <Box>
          <Typography
            variant="h5"
            fontWeight={800}
            color="text.primary"
            sx={{ letterSpacing: "-0.01em", wordBreak: "break-word" }}
          >
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              mt: 0.75,
              fontFamily: "monospace",
              bgcolor: "background.neutral",
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              fontWeight: 650,
            }}
          >
            <BadgeOutlinedIcon sx={{ fontSize: 13, color: "primary.main" }} />
            SATS: {satsNumber || "N/A"}
          </Typography>
        </Box>

        <StudentStatusBadge status={status} />
      </Stack>

      <Divider sx={{ my: 3.5 }} />

      {/* Main Placement Specs */}
      <Stack spacing={2.5} textAlign="left">
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "rgba(23, 70, 162, 0.04)",
              color: "primary.main",
              border: "1px solid",
              borderColor: "rgba(23, 70, 162, 0.08)",
            }}
          >
            <SchoolOutlinedIcon sx={{ fontSize: 16 }} />
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.725rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Class & Section
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={750}>
              {className ? `Class ${className}` : "N/A"} - Section {section || "N/A"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "rgba(23, 70, 162, 0.04)",
              color: "primary.main",
              border: "1px solid",
              borderColor: "rgba(23, 70, 162, 0.08)",
            }}
          >
            <NumbersOutlinedIcon sx={{ fontSize: 16 }} />
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.725rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Roll Number
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={750}>
              #{rollNumber || "N/A"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "rgba(23, 70, 162, 0.04)",
              color: "primary.main",
              border: "1px solid",
              borderColor: "rgba(23, 70, 162, 0.08)",
            }}
          >
            <CalendarTodayOutlinedIcon sx={{ fontSize: 15 }} />
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.725rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Academic Year
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={750}>
              {academicYear || "N/A"}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "rgba(23, 70, 162, 0.04)",
              color: "primary.main",
              border: "1px solid",
              borderColor: "rgba(23, 70, 162, 0.08)",
            }}
          >
            <PhoneOutlinedIcon sx={{ fontSize: 16 }} />
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.725rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Parent Contact
            </Typography>
            <Typography variant="body2" color="text.primary" fontWeight={750}>
              {parentDetails?.fatherContactNumber || parentDetails?.motherContactNumber || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
};

export default StudentProfileSidebar;
