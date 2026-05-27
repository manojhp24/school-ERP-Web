import { Tooltip, IconButton, Box, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const NavbarLeft = ({
  isMobile,
  pageTitle,
  onMenuClick,
  collapsed,
  onToggleCollapse,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      {isMobile ? (
        <IconButton
          onClick={onMenuClick}
          edge="start"
          sx={{ color: "text.primary" }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      ) : (
        <Tooltip title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
          <IconButton
            onClick={onToggleCollapse}
            edge="start"
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            {collapsed ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
          </IconButton>
        </Tooltip>
      )}

      <Typography
        variant="h4"
        color="text.primary"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.01em",
          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.35rem" },
        }}
      >
        {pageTitle}
      </Typography>
    </Box>
  );
};

export default NavbarLeft;
