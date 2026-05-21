import { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";

const StudentActionsMenu = ({ student }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log("Edit student:", student);
    handleCloseMenu();
  };

  const handleDelete = () => {
    console.log("Delete student:", student);
    handleCloseMenu();
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} size="small">
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{
          paper: {
            elevation: 3,
            sx: {
              minWidth: 140,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
              p: 0.5,
              "& .MuiMenuItem-root": {
                typography: "body2",
                padding: "8px 12px",
                borderRadius: 1,
                gap: 1.5,
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              },
            },
          },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <ListItemIcon sx={{ minWidth: "auto !important", color: "text.secondary" }}>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <ListItemIcon sx={{ minWidth: "auto !important", color: "error.main" }}>
            <DeleteOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default StudentActionsMenu;
