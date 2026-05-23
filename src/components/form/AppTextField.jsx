import { TextField, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

// Reusable styling token for enterprise-grade School ERP form inputs
export const commonInputStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "background.paper",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "divider",
      transition: "all 0.2s ease-in-out",
    },
    "&:hover fieldset": {
      borderColor: "text.disabled",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
      borderWidth: "1.5px",
    },
    "& .MuiInputAdornment-root": {
      color: "text.secondary",
      transition: "color 0.2s ease-in-out",
    },
    "&.Mui-focused .MuiInputAdornment-root": {
      color: "primary.main",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.875rem",
    "&.Mui-focused": {
      color: "primary.main",
    },
  },
  "& .MuiFormHelperText-root": {
    mx: 1,
    mt: 0.5,
    fontSize: "0.75rem",
  },
};

const AppTextField = ({ name, label, required, rules, startIcon, endIcon, sx, ...props }) => {
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
        />
      )}
    />
  );
};

export default AppTextField;
