import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { commonInputStyles } from "./AppTextField";

const AppDateFiled = ({ name, label, required, rules, startIcon, sx, ...props }) => {
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            value={field.value || null}
            onChange={(date) => field.onChange(date)}
            label={label}
            {...props}
            slotProps={{
              textField: {
                fullWidth: true,
                size: "small",
                required: required,
                error: !!error && (isTouched || isSubmitted),
                helperText: !!error && (isTouched || isSubmitted) ? error?.message : "",
                sx: {
                  ...commonInputStyles,
                  ...sx,
                },
                InputProps: {
                  startAdornment: startIcon ? (
                    <InputAdornment position="start">{startIcon}</InputAdornment>
                  ) : null,
                },
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default AppDateFiled;
