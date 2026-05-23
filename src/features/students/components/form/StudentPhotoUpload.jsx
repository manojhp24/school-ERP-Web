import { useState } from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PhotoWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 140,
  height: 140,
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",
  border: `2px dashed ${theme.palette.text.disabled}`,
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    "& .upload-overlay": {
      opacity: 1,
    },
  },
}));

const UploadOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(15, 23, 42, 0.65)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  opacity: 0,
  transition: "opacity 0.25s ease",
  gap: 4,
}));

const StudentPhotoUpload = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      console.log("Selected student photo:", file);
    }
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        gap: 2,
        p: { xs: 3, md: 2, lg: 3 },
        bgcolor: "background.paper",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        width: "100%",
        maxWidth: { xs: 240, md: "100%" },
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.02)",
      }}
    >
      <PhotoWrapper component="label">
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {preview ? (
          <Avatar src={preview} sx={{ width: 128, height: 128 }} />
        ) : (
          <Avatar sx={{ width: 128, height: 128, bgcolor: "background.neutral" }}>
            <CameraAltOutlinedIcon
              sx={{ fontSize: 32, color: "text.secondary" }}
            />
          </Avatar>
        )}
        <UploadOverlay className="upload-overlay">
          <CloudUploadIcon sx={{ fontSize: 24 }} />
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {preview ? "Change Photo" : "Upload Photo"}
          </Typography>
        </UploadOverlay>
      </PhotoWrapper>

      <Box sx={{ mt: 0.5 }}>
        <Typography variant="subtitle2" fontWeight={600} color="text.primary">
          Student Profile Photo
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
          Supports JPG, PNG up to 2MB
        </Typography>
      </Box>

      <Button
        component="label"
        variant="outlined"
        color="primary"
        startIcon={<CloudUploadIcon />}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          px: 2.5,
          py: 0.75,
          fontSize: "0.8rem",
          borderColor: "divider",
          color: "text.primary",
          "&:hover": {
            borderColor: "text.secondary",
            backgroundColor: "action.hover",
          },
        }}
      >
        Select File
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>
    </Stack>
  );
};

export default StudentPhotoUpload;
