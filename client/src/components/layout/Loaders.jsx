/* eslint-disable no-unused-vars */
import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <Grid container height={"Calc(100vh-4rem)"} spacing={"1rem"}>
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        height={"100%"}
      >
        <Skeleton varient="rounded" height={"100vh"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <Stack spacing={"1rem"}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} varient="rectangular" height={"10rem"} />
        ))}
        </Stack>
        <Skeleton varient="rectangular" />
      </Grid>
      <Grid
        item
        md={4}
        lg={3}
        height={"100%"}
        sx={{
          display: { xs: "none", sm: "block" },
          padding: "2rem",
          bgcolor: "rgba(0,0,0,0.85)",
        }}
      >
        <Skeleton varient="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};