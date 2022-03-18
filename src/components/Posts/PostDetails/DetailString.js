import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";

const DetailString = ({ item, itemTwo, title, avatar }) => {
  const classes = useStyles();

  return (
    <Box className={classes.gridBox}>
      <Card className={classes.cardWrapp}>
        <img className={classes.avatar} src={avatar} alt={title} />
        <Box className={classes.tagName}>
          <Typography className={classes.headingTitle}>{title}</Typography>
        </Box>
        {typeof item === "number" ? (
          <Typography className={classes.typo}>
            {item === 0
              ? "No Users"
              : item / 10 === 1
              ? `${item / 10} User`
              : `${item / 10} Users`}
          </Typography>
        ) : (
          <Typography className={classes.typo}>
            {item} <br /> {itemTwo}
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default DetailString;
