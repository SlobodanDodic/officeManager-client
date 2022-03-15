import React from "react";
import {
  CircularProgress,
  Box,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";

const Loading = () => {
  return (
    <Box
      style={{
        marginTop: "10vh",
      }}
    >
      <Divider />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
        }}
      >
        <CircularProgress
          style={{
            color: "#fb7c1b",
            marginRight: "20px",
          }}
        />

        <Typography>Loading...</Typography>
      </Container>
      <Divider />
    </Box>
  );
};

export default Loading;
