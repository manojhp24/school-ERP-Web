import { TextField, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const AppTextField = ({ name, label, startIcon, endIcon, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          value={field.value || ""}
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
      )}
    />
  );
};

export default AppTextField;
