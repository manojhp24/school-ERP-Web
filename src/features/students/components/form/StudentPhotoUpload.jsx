import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const StudentPhotoUpload = () => {
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

  return (
    <Stack
      sx={{
        alignItems: "center",
        gap: 1.25,
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          width: 162,
          height: 162,
          borderRadius: "50%",
          border: "2px dashed",
          borderColor: "text.disabled",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 0.5,
        }}
      >
        <Avatar sx={{ width: 142, height: 142, bgcolor: "action.hover" }}>
          <CameraAltOutlinedIcon
            sx={{ fontSize: 36, color: "text.secondary" }}
          />
        </Avatar>
      </Box>

      <Typography variant="subtitle1" fontWeight={500} letterSpacing={-0.2}>
        Upload Student Photo
      </Typography>

      <Typography variant="body2" color="text.disabled" sx={{ mt: -0.5 }}>
        JPG, PNG up to 2MB
      </Typography>

      <Button
        component="label"
        variant="outlined"
        startIcon={<CloudUploadIcon />}
        sx={{
          mt: 0.5,
          borderRadius: 2,
          textTransform: "none",
          px: 2.5,
          py: 1,
          fontSize: 13,
          borderColor: "divider",
        }}
      >
        Upload Photo
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={(event) => console.log(event.target.files)}
        />
      </Button>
    </Stack>
  );
};

export default StudentPhotoUpload;
