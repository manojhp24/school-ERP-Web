import { Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

import FormSectionLayout from "../../../../components/form/FormSectionLayout";
import AppTextField from "../../../../components/form/AppTextField";

const StudentAddressStep = () => {
  return (
    <FormSectionLayout
      title={"Residential Address"}
      subtitle={"Enter student permanent residential and region details"}
      icon={LocationOnOutlinedIcon}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <AppTextField
            name="student.addressDetails.addressLine"
            label={"Address Line"}
            required
            type="text"
            startIcon={<HomeOutlinedIcon fontSize="small" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.addressDetails.village"
            label={"Village / Locality"}
            required
            type="text"
            startIcon={<LocationCityOutlinedIcon fontSize="small" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.addressDetails.district"
            label={"District"}
            required
            type="text"
            startIcon={<LocationOnOutlinedIcon fontSize="small" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.addressDetails.taluk"
            label={"Taluk / Sub-division"}
            required
            type="text"
            startIcon={<ExploreOutlinedIcon fontSize="small" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.addressDetails.state"
            label={"State"}
            required
            type="text"
            startIcon={<MapOutlinedIcon fontSize="small" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <AppTextField
            name="student.addressDetails.pincode"
            label={"Pincode"}
            required
            type="text"
            startIcon={<LocalPostOfficeOutlinedIcon fontSize="small" />}
          />
        </Grid>
      </Grid>
    </FormSectionLayout>
  );
};

export default StudentAddressStep;
