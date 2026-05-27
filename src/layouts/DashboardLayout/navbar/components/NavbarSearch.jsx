import { Box, OutlinedInput, useTheme } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavbarSearch = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        width: 260,
      }}
    >
      <OutlinedInput
        size="small"
        placeholder="Search students, classes..."
        startAdornment={
          <SearchOutlinedIcon
            fontSize="small"
            sx={{ color: "text.secondary", mr: 1 }}
          />
        }
        endAdornment={
          <Box
            sx={{
              px: 0.75,
              py: 0.25,
              borderRadius: 1,
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: theme.palette.background.neutral,
              color: "text.secondary",
              fontSize: "0.65rem",
              fontWeight: 700,
            }}
          >
            ⌘K
          </Box>
        }
        sx={{
          width: "100%",
          height: 36,
          borderRadius: 2,
          fontSize: "0.85rem",
          backgroundColor: theme.palette.background.neutral,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.divider,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
};

export default NavbarSearch;
