/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { bgGradient } from "../../constants/colors";
import { Navigate } from "react-router-dom";


const isAdmin=true;

const AdminLogin = () => {
  const secretkey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

if(isAdmin) return <Navigate to="/admin/dashboard" />;


  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretkey.value}
              onChange={secretkey.changeHandler}
            />

            <Button
              sx={{
                marginTop: "1rem",
              }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
