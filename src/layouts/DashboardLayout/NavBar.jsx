import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import { getPageTitle } from "./getPageTitle";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = ({ isMobile, onMenuClick }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        minHeight: 64,
        justifyContent: "center",
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isMobile && (
            <IconButton onClick={onMenuClick}>
              <MenuOutlinedIcon />
            </IconButton>
          )}

          <Typography variant="h5" color="text.primary">
            {pageTitle}
          </Typography>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton>
            <Badge badgeContent={`${99}+`} color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              width: 36,
              height: 36,
              bgcolor: "primary.main",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
