/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation;

 //const [members, setMembers] = useState(sampleUsers);
  //const [selectedMembers, setSelectedMembers] = useState([]);
//id
  // const selectMemberHandler = () => {
  //   setSelectedMembers((Prev) =>
  //     Prev.include(id)
  //       ? Prev.filter((currElement) => currElement !== id)
  //       : [...Prev, id]
  //   );
  // };
  // console.log(selectedMembers);

  const  closeHandler=()=>{};
  const submitHandler = () => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} Width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem
              user={i}
              key={i._id}
             // handler={selectMemberHandler}
              //isAdded={selectedMembers.include(i._id)}
            />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contaibed" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
