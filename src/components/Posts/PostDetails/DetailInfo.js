import React from "react";
import useStyles from "./styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const DetailInfo = ({ title, item, itemDebt }) => {
  const classes = useStyles();

  return (
    <Grid item xs="auto" className={classes.boxInfoGrid}>
      <Paper
        style={{
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "#fb7c1b",
            marginBottom: "15px",
            letterSpacing: "3px",
            filter: "drop-shadow(2px 2px 3px grey)",
            backgroundColor: "#00243a",
            borderRadius: "5px",
            textAlign: "center",
            padding: "5px",
            border: "1px solid #fb7c1b",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            color: "#981f2e",
            textDecoration: "underline",
            marginBottom: "5px",
          }}
        >
          Debt:
        </Typography>

        <Typography variant="subtitle2">{itemDebt}</Typography>

        <Typography
          variant="subtitle2"
          style={{
            color: "#981f2e",
            textDecoration: "underline",
            marginBottom: "5px",
          }}
        >
          Users:
        </Typography>
        {item?.map((user, id) => (
          <Typography variant="subtitle2" key={id}>
            {user}
          </Typography>
        ))}
      </Paper>
    </Grid>
  );
};

export default DetailInfo;
