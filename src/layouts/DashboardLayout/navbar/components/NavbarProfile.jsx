import { Tooltip, Avatar, useTheme } from "@mui/material";

const NavbarProfile = () => {
  const theme = useTheme();
  return (
    <Tooltip title="Account Settings">
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: `0px 2px 6px ${theme.palette.primary.lighter}`,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        MK
      </Avatar>
    </Tooltip>
  );
};

export default NavbarProfile;
