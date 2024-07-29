/* eslint-disable no-unused-vars */
import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";


// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return(
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100vh"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Selected a friend to chat
      </Typography>
    </Box>
  )
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayout()(Home);
