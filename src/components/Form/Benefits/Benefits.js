import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "None",
  },
  {
    value: 10,
    label: "1",
  },
  {
    value: 20,
    label: "2",
  },
  {
    value: 30,
    label: "3",
  },
  {
    value: 40,
    label: "4",
  },
  {
    value: 50,
    label: "5",
  },
  {
    value: 60,
    label: "6",
  },
  {
    value: 70,
    label: "7",
  },
  {
    value: 80,
    label: "8",
  },
  {
    value: 90,
    label: "9",
  },
  {
    value: 100,
    label: "10",
  },
];

const Benefits = ({ heading, name, value, onChange }) => {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      style={{
        margin: "0px 25px",
      }}
    >
      <Typography variant="subtitle1">{heading}</Typography>
      <Slider
        aria-label="Always visible"
        step={10}
        marks={marks}
        name={name}
        value={value}
        onChange={onChange}
        size="small"
        style={{ color: "#00243a" }}
      />
    </Grid>
  );
};

export default Benefits;
