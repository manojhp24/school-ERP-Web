import { useState } from "react";
import { Box, Button, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreIcon from "@mui/icons-material/Restore";
import { toast } from "react-toastify";

const StudentProfileHeader = ({ studentName, satsNumber }) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleEditClick = () => {
    toast.info("Edit Student feature is currently under active development!");
  };

  const handleDeleteConfirm = () => {
    setIsDeleted(true);
    setOpenDeleteDialog(false);
    toast.error(`Student profile (${studentName}) has been marked as Inactive/Deleted.`);
  };

  const handleRestoreClick = () => {
    setIsDeleted(false);
    toast.success(`Student profile (${studentName}) has been successfully restored to Active status!`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        pb: 2.5,
        mb: 1.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          onClick={() => navigate("/student")}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2.5,
            bgcolor: "background.paper",
            boxShadow: "0px 1px 2px rgba(0,0,0,0.02)",
            p: 1.25,
            color: "text.primary",
            transition: "all 0.2s ease",
            "&:hover": {
              borderColor: "text.secondary",
              bgcolor: "action.hover",
            },
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <Box sx={{ mt: 0.5 }}>
          <Typography
            variant="h4"
            fontWeight={800}
            color="text.primary"
            sx={{ letterSpacing: "-0.01em", fontSize: { xs: "1.5rem", sm: "1.75rem" } }}
          >
            Student Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
            {studentName ? `Viewing profile of ${studentName}` : "Student detailed record database"}
            {satsNumber && ` (SATS: ${satsNumber})`}
          </Typography>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
        {!isDeleted ? (
          <>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEditClick}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                px: 2.5,
                py: 0.9,
                fontSize: "0.825rem",
                borderColor: "divider",
                color: "text.primary",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.02)",
                "&:hover": {
                  borderColor: "text.secondary",
                  backgroundColor: "action.hover",
                },
              }}
            >
              Edit Details
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteOutlineIcon />}
              onClick={() => setOpenDeleteDialog(true)}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                px: 2.5,
                py: 0.9,
                fontSize: "0.825rem",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: "error.dark",
                },
              }}
            >
              Delete Student
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="success"
            startIcon={<RestoreIcon />}
            onClick={handleRestoreClick}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              px: 2.5,
              py: 0.9,
              fontSize: "0.825rem",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "success.dark",
              },
            }}
          >
            Restore Record
          </Button>
        )}
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 1.5,
            border: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 750, color: "error.main" }}>
          Confirm Student Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "text.primary", fontSize: "0.95rem" }}>
            Are you sure you want to deactivate/delete the student record for <strong>{studentName}</strong>? This action will set their academic status to inactive.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={() => setOpenDeleteDialog(false)}
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: 2.5, textTransform: "none", fontWeight: 700 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
            autoFocus
            sx={{ borderRadius: 2.5, textTransform: "none", fontWeight: 700, boxShadow: "none" }}
          >
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StudentProfileHeader;
