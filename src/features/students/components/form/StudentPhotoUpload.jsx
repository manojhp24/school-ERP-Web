import { useState } from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormContext } from "react-hook-form";
import { colorTokens } from "../../../../theme/palette";

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
  width: 130,
  height: 130,
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",
  border: `2px dashed ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "scale(1.02)",
    boxShadow: "0px 4px 12px rgba(23, 70, 162, 0.12)",
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
  backgroundColor: "rgba(15, 23, 42, 0.7)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  opacity: 0,
  transition: "opacity 0.25s ease",
  gap: 4,
  borderRadius: "50%",
}));

const StudentPhotoUpload = () => {
  const { setValue, watch } = useFormContext();
  const studentImage = watch("student.personalDetails.studentImage");
  const [localPreview, setLocalPreview] = useState(null);

  const preview =
    localPreview || (typeof studentImage === "string" ? studentImage : null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setLocalPreview(URL.createObjectURL(file));
    setValue("student.personalDetails.studentImage", file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        gap: 2.5,
        width: "100%",
      }}
    >
      <PhotoWrapper component="label">
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {preview ? (
          <Avatar src={preview} sx={{ width: "100%", height: "100%" }} />
        ) : (
          <Avatar
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: colorTokens?.navy?.[50] || "background.neutral",
              color: colorTokens?.navy?.[600] || "text.secondary",
            }}
          >
            <CameraAltOutlinedIcon sx={{ fontSize: 32 }} />
          </Avatar>
        )}
        <UploadOverlay className="upload-overlay">
          <CloudUploadIcon sx={{ fontSize: 24 }} />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            {preview ? "Change Photo" : "Upload Photo"}
          </Typography>
        </UploadOverlay>
      </PhotoWrapper>

      <Box>
        <Typography
          variant="subtitle2"
          fontWeight={750}
          color="text.primary"
          sx={{ fontSize: "0.875rem" }}
        >
          Student Profile Photo
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mt: 0.5, fontWeight: 500 }}
        >
          Supports JPG, PNG up to 2MB
        </Typography>
      </Box>

      <Button
        component="label"
        variant="outlined"
        color="primary"
        startIcon={<CloudUploadIcon />}
        sx={{
          borderRadius: 2.5,
          textTransform: "none",
          fontWeight: 700,
          px: 2.5,
          py: 0.75,
          fontSize: "0.825rem",
          borderColor: "divider",
          color: "text.primary",
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
            backgroundColor: "rgba(23, 70, 162, 0.04)",
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
