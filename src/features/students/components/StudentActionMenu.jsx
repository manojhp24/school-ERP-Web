import { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { IconButton, Menu, MenuItem } from "@mui/material";

const StudentActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <MoreVertIcon fontSize="small" />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default StudentActionsMenu;
