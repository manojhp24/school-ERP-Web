import { TextField, MenuItem, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { commonInputStyles } from "./AppTextField";

const AppSelectField = ({
  name,
  label,
  options = [],
  required,
  rules,
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? `${label} is required` : false,
        ...rules,
      }}
      render={({ field, fieldState: { error, isTouched }, formState: { isSubmitted } }) => (
        <TextField
          {...field}
          value={field.value || ""}
          select
          fullWidth
          size="small"
          variant="outlined"
          label={label}
          required={required}
          error={!!error && (isTouched || isSubmitted)}
          helperText={!!error && (isTouched || isSubmitted) ? error?.message : ""}
          sx={{
            ...commonInputStyles,
            ...sx,
          }}
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
