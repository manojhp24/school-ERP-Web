import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const AppDateFiled = ({ label, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        fullWidth
        {...props}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default AppDateFiled;
