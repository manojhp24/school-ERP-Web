import { Grid, Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

import StudentProfileSection from "./StudentProfileSection";

const AddressItem = ({ icon: Icon, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 1.5,
      p: 2,
      bgcolor: "background.neutral",
      borderRadius: 3,
      border: "1px solid",
      borderColor: "divider",
      height: "100%",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 2,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        color: "primary.main",
      }}
    >
      <Icon sx={{ fontSize: 16 }} />
    </Box>
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", fontSize: "0.7rem", fontWeight: 650, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {label}
      </Typography>
      <Typography variant="body2" color="text.primary" fontWeight={700} sx={{ mt: 0.25 }}>
        {value || "—"}
      </Typography>
    </Box>
  </Box>
);

const StudentAddressCard = ({ addressDetails }) => {
  const {
    addressLine = "",
    village = "",
    taluk = "",
    district = "",
    state = "",
    pincode = "",
  } = addressDetails || {};

  return (
    <StudentProfileSection
      title="Residential Address"
      subtitle="Permanent home location and geographical mapping details"
      icon={LocationOnIcon}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12 }}>
          <AddressItem
            icon={HomeOutlinedIcon}
            label="Address Line"
            value={addressLine}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddressItem
            icon={LocationCityOutlinedIcon}
            label="Village / Locality"
            value={village}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddressItem
            icon={LocationOnIcon}
            label="District"
            value={district}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddressItem
            icon={ExploreOutlinedIcon}
            label="Taluk / Sub-division"
            value={taluk}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddressItem
            icon={MapOutlinedIcon}
            label="State"
            value={state}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <AddressItem
            icon={LocalPostOfficeOutlinedIcon}
            label="Pincode"
            value={pincode}
          />
        </Grid>
      </Grid>
    </StudentProfileSection>
  );
};

export default StudentAddressCard;
