import { TextField, MenuItem, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const AppSelectField = ({
  name,
  label,
  options,
  startIcon,
  endIcon,
  ...props
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          value={field.value || ""}
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
      )}
    />
  );
};

export default AppSelectField;
