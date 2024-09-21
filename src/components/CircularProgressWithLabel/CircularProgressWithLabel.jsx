import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex" width="50px">
      <CircularProgress
        color="success"
        variant="determinate"
        {...props}
        value={props.value * 10}
        size={50}
        thickness={3.6}
        sx={{ transform: "rotate(-90deg)" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="#FFF">
          {`${props.value}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
