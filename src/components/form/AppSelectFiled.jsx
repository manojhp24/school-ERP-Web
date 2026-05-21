import { TextField, MenuItem, InputAdornment } from "@mui/material";

const AppSelectField = ({ label, options, startIcon, endIcon, ...props }) => {
  return (
    <TextField
      select
      fullWidth
      variant="outlined"
      label={label}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,

        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null,
      }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AppSelectField;
