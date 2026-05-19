import { Button, MenuItem, Stack, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const StudentTableToolbar = () => {
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
          sx={{ width: "100%" }}
        >
          <TextField fullWidth size="small" placeholder="Search students..." />

          <TextField
            select
            size="small"
            defaultValue=""
            sx={{
              width: {
                xs: "100%",
                sm: 180,
              },
            }}
          >
            <MenuItem value="">All Gender</MenuItem>

            <MenuItem value="Male">Male</MenuItem>

            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </Stack>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
            whiteSpace: "nowrap",
          }}
        >
          Add Student
        </Button>
      </Stack>
    </Stack>
  );
};

export default StudentTableToolbar;
