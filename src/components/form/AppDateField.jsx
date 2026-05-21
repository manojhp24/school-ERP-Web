import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputAdornment } from "@mui/material";

const AppDateFiled = ({ label, startIcon, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        {...props}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
            InputProps: {
              startAdornment: startIcon ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ) : null,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default AppDateFiled;
