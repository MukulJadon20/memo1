// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
//import { sampleChats } from "../../constants/sample";

const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <>
        <Title />
        <Header />

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
           <ChatList chats={sampleChats}/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            bgcolor={"primary-main"}
          >
            {" "}
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100vh"}
            sx={{
              display: { xs: "none", sm: "block" },
              padding:"2rem",
              bgcolor:"rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>       
      </>
    );
  };
};

export default AppLayout;
