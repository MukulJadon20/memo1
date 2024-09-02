/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Table } from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transformImage } from "../../lib/features";

const columns = [
  {
    field: "id", // Corrected "feild" to "field"
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar", // Corrected "feild" to "field"
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name", // Corrected "feild" to "field"
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username", // Corrected "feild" to "field"
    headerName: "Username",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends", // Corrected "feild" to "field"
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups", // Corrected "feild" to "field"
    headerName: "Groups",
    headerClassName: "table-header",
    width: 200,
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.users.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
