import {
  Button,
  Stack,
  IconButton,
  Tooltip,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
          <TextField
            fullWidth
            size="small"
            placeholder="Search by SATS, Name, Father Name, District..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </InputAdornment>
              ),

              endAdornment: searchQuery ? (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setSearchQuery("")}
                    edge="end"
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
          />

          <TextField
            select
            fullWidth
            size="small"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterListIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: {
                xs: "100%",
                sm: 180,
              },
              maxWidth: {
                sm: 200,
              },
            }}
          >
            <MenuItem value="">All Gender</MenuItem>

            <MenuItem value="Male">Male</MenuItem>

            <MenuItem value="Female">Female</MenuItem>
          </TextField>

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
