import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const AppDateFiled = ({ name, label, startIcon, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
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
                input: {
                  startAdornment: startIcon ? (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
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
