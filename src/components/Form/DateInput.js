import React from "react";
import { TextField } from "@material-ui/core";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const DateInput = ({ label, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        disableFuture
        inputFormat="dd.MMM.yyyy"
        mask=""
        openTo="year"
        views={["year", "month", "day"]}
        renderInput={(params) => <TextField {...params} />}
        label={label}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
