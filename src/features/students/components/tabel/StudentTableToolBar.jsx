import { Button, Stack, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import AppTextField from "../../../../components/form/AppTextField";
import AppSelectField from "../../../../components/form/AppSelectFiled";

const StudentTableToolbar = ({
  searchQuery,
  setSearchQuery,
  genderFilter,
  setGenderFilter,
}) => {
  const navigate = useNavigate();
  const isFiltered = searchQuery !== "" || genderFilter !== "";

  const handleResetFilters = () => {
    setSearchQuery("");
    setGenderFilter("");
  };

  return (
    <Stack direction="column" spacing={2} mb={3}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", md: "center" }}
        justifyContent="space-between"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", sm: "center" }}
          sx={{ width: "100%" }}
        >
          <AppTextField
            size="small"
            placeholder="Search by SATS, Name, Father Name, District..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startIcon={<SearchIcon fontSize="small" sx={{ color: "text.secondary" }} />}
            endIcon={
              searchQuery ? (
                <IconButton
                  size="small"
                  onClick={() => setSearchQuery("")}
                  edge="end"
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ) : null
            }
          />

          <AppSelectField
            size="small"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            startIcon={<FilterListIcon fontSize="small" sx={{ color: "text.secondary" }} />}
            options={[
              { label: "All Gender", value: "" },
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            sx={{
              minWidth: {
                xs: "100%",
                sm: 180,
              },
              maxWidth: {
                sm: 200,
              },
            }}
          />

          {isFiltered && (
            <Tooltip title="Reset all filters">
              <Button
                variant="text"
                color="secondary"
                onClick={handleResetFilters}
                startIcon={<RestartAltIcon />}
                sx={{
                  whiteSpace: "nowrap",
                  alignSelf: { xs: "flex-start", sm: "center" },
                  height: 40,
                }}
              >
                Reset
              </Button>
            </Tooltip>
          )}
        </Stack>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/student/create")}
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
            height: 40,
            whiteSpace: "nowrap",
            px: 3,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          Add Student
        </Button>
      </Stack>
    </Stack>
  );
};

export default StudentTableToolbar;
