import { TextField, InputAdornment } from "@mui/material";

const AppTextField = ({ label, startIcon, endIcon, ...props }) => {
  return (
    <TextField
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
    />
  );
};

export default AppTextField;
