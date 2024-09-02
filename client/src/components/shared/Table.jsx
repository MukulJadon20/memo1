/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import {DataGrid} from "@mui/x-data-grid";
//import second from "../../constants/colors"

export const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Paper>
        <Typography>{heading}</Typography>
        <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={rowHeight}
        style={{
        height:"80%",
        }}
        sx={{
          border:"none",
          ".table-header":{
            bgcolor:"black",
            color:"white"
          }
        }}/>
      </Paper>
    </Container>
  );
};

export default Table;
