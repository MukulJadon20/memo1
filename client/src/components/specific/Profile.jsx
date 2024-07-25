import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
//import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"right something about your self"} />
      <ProfileCard
        heading={"Username"}
        text={"m.u.k.u.l--20"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Mukul Jadon"} Icon={<FaceIcon/>} />

      <ProfileCard heading={"Joined"} text={moment('2024-07-24T12:30:00.000z').fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;
