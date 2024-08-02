/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorEl }) => {
  return (
    <Menu open anchorEl={anchorEl} open={false}>
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
        iure delectus nisi iusto voluptatum sint neque veritatis tempora illum?
      </div>
    </Menu>
  );
};

export default FileMenu;
