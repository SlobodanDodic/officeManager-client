import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import moment from "moment";

const DetailDate = ({ item, title, avatar }) => {
  const classes = useStyles();

  return (
    <Box className={classes.gridBox}>
      <Card className={classes.cardWrapp}>
        <img className={classes.avatar} src={avatar} alt={title} />
        <Box className={classes.tagName}>
          <Typography className={classes.headingTitle}>{title}</Typography>
        </Box>
        <Typography className={classes.typo}>
          {moment(item).format("ddd, MMM Do YYYY")}
        </Typography>
      </Card>
    </Box>
  );
};

export default DetailDate;
