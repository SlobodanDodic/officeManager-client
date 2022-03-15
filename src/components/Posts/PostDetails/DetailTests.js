import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import moment from "moment";

const DetailTests = ({ avatar, eyes, safety, fire, firstAid }) => {
  const classes = useStyles();

  return (
    <Box className={classes.gridBoxTest}>
      <Card className={classes.cardWrappTest}>
        <img className={classes.avatar} src={avatar} alt="tests" />
        <Typography className={classes.typoTest}>
          <span className={classes.spanTest}>Fire:</span>
          {moment(fire).format("ddd, MMM Do YYYY")}
          <br />
          <span className={classes.spanTest}>Eyes:</span>
          {moment(eyes).format("ddd, MMM Do YYYY")}
          <br />
          <span className={classes.spanTest}>Safety:</span>
          {moment(safety).format("ddd, MMM Do YYYY")}
          <br />
          <span className={classes.spanTest}>First Aid:</span>
          {moment(firstAid).format("ddd, MMM Do YYYY")}
        </Typography>
      </Card>
    </Box>
  );
};

export default DetailTests;
