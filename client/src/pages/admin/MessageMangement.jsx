/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Avatar, Stack, Table } from "@mui/material";

const columns = [
  {
    field: "id", // Corrected "feild" to "field"
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments", // Corrected "feild" to "field"
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "contant", // Corrected "feild" to "field"
    headerName: "Contant",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender", // Corrected "feild" to "field"
    headerName: "Sender By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack>
        <Avatar alt={params.row.sender.name} src={params.row.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat", // Corrected "feild" to "field"
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupsChat", // Corrected "feild" to "field"
    headerName: "Groups Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "crated At ", // Corrected "feild" to "field"
    headerName: "Created At",
    headerClassName: "table-header",
    width: 250,
  },
];
const MessageMangement = () => {
  const [rows, setRows] = useState([]);

  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default MessageMangement;
