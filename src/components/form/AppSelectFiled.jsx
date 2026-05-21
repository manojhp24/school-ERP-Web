import { TextField, MenuItem } from "@mui/material";

const AppSelectField = ({ label, options, ...props }) => {
  return (
    <TextField select fullWidth label={label}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AppSelectField;
