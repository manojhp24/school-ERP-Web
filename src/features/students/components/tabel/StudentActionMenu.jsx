import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteStudentModal from "../shared/DeleteStudentModal";
import ActivateStudentModal from "../shared/ActivateStudentModal";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const StudentActionsMenu = ({ student }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isActivateModalOpen, setIsActivateModalOpen] = useState(false);

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

  const handleDeactivateClick = () => {
    setIsDeleteModalOpen(true);
    handleCloseMenu();
  };

  const handleActivateClick = () => {
    setIsActivateModalOpen(true);
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
        <MenuItem
          onClick={() => {
            navigate(`/student/${student._id}`);
            handleCloseMenu();
          }}
        >
          <ListItemIcon
            sx={{ minWidth: "auto !important", color: "text.secondary" }}
          >
            <VisibilityOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="View Profile" />
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <ListItemIcon
            sx={{ minWidth: "auto !important", color: "text.secondary" }}
          >
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>

        {student.isDeleted ? (
          <MenuItem
            onClick={handleActivateClick}
            sx={{ color: "success.main" }}
          >
            <ListItemIcon
              sx={{ minWidth: "auto !important", color: "success.main" }}
            >
              <CheckCircleOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Activate" />
          </MenuItem>
        ) : (
          <MenuItem
            onClick={handleDeactivateClick}
            sx={{ color: "error.main" }}
          >
            <ListItemIcon
              sx={{ minWidth: "auto !important", color: "error.main" }}
            >
              <DeleteOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Deactivate" />
          </MenuItem>
        )}
      </Menu>

      <DeleteStudentModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        student={student}
      />

      <ActivateStudentModal
        open={isActivateModalOpen}
        onClose={() => setIsActivateModalOpen(false)}
        student={student}
      />
    </>
  );
};

export default StudentActionsMenu;
