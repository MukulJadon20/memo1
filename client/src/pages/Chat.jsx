/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { InputBox } from "../components/styles/StyledComponent";
import AppLayout from "../components/layout/AppLayout";
import { SampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";
//import FileMenu from "../components/dialogs/FileMenu";
//import AppLayout from '../components/styles/layout/AppLayout'


const user={
  _id:"gharwala",
  name:"mukuljadon",
}

function Chat() {
  // const containerRef = useRef(null);

  
  return (
    <Fragment>
      <Stack
        // ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247,247,247,1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >

        {
          SampleMessage.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user}/>
          ))
        }
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100vh"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
           
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here..." />

          <IconButton
          type="submit"
          sx={{
            rotate: "-30deg",
            backgroundColor: "#ea7070",
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark",
            },
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      {/* <FileMenu /> */}
    </Fragment>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayout()(Chat);
