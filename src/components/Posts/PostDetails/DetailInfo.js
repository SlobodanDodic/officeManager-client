import React from "react";
import useStyles from "./styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const DetailInfo = ({ avatar, title, item, itemDebt }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.boxInfo}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{
            color: "#981f2e",
            textDecoration: "underline",
            marginBottom: "15px",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid container className={classes.innerGrid}>
        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
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
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle2">{itemDebt}</Typography>
          <img
            style={{
              width: "105px",
              filter: "drop-shadow(1px 1px 17px grey)",
            }}
            src={avatar}
            alt={title}
          />
        </Grid>

        <Grid item xs={6}>
          {item?.map((user, id) => (
            <Typography variant="subtitle2" key={id}>
              {user}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailInfo;
