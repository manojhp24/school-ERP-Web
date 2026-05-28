import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import useRestoreStudent from "../../hooks/useRestoreStudent";

const ActivateStudentModal = ({ open, onClose, student }) => {
  const { mutate: restoreStudentMutation, isPending } = useRestoreStudent();

  if (!student) return null;

  const studentName = `${student.firstName || ""} ${student.lastName || ""}`.trim() || "this student";

  const handleConfirmActivate = () => {
    restoreStudentMutation(student._id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Dialog
      open={open}
      onClose={isPending ? undefined : onClose}
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 1.5,
          border: "1px solid",
          borderColor: "divider",
          maxWidth: 440,
          boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "success.lighter",
              color: "success.main",
              borderRadius: "50%",
              width: 40,
              height: 40,
              flexShrink: 0,
            }}
          >
            <CheckCircleOutlineIcon fontSize="medium" />
          </Box>
          <Typography
            variant="h6"
            fontWeight={800}
            color="success.main"
            sx={{ letterSpacing: "-0.01em" }}
          >
            Confirm Activation
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ py: 1.5 }}>
        <DialogContentText sx={{ color: "text.primary", fontSize: "0.95rem", lineHeight: 1.5 }}>
          Are you sure you want to activate the student record for <strong>{studentName}</strong>?
          This action will restore their academic status to active and they will appear in all active list views.
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2, pt: 1, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          color="secondary"
          disabled={isPending}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 700,
            px: 2.5,
            borderColor: "divider",
            color: "text.secondary",
            "&:hover": {
              borderColor: "text.primary",
              bgcolor: "action.hover",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirmActivate}
          variant="contained"
          color="success"
          disabled={isPending}
          autoFocus
          startIcon={
            isPending ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <CheckCircleOutlineIcon fontSize="small" />
            )
          }
          sx={{
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 700,
            px: 2.5,
            boxShadow: "none",
            backgroundColor: "success.main",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "success.dark",
            },
          }}
        >
          {isPending ? "Activating..." : "Confirm Activate"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActivateStudentModal;
