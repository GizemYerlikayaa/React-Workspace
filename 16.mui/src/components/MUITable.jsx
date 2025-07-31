import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MUITable() {
  const rows = [
    {
      id: 1,
      firstName: "Gizem",
      lastName: "Yerlikaya",
      age: 22,
    },
    {
      id: 1,
      firstName: "Enes",
      lastName: "Bayram",
      age: 26,
    },
    {
      id: 1,
      firstName: "Kadir",
      lastName: "Aba",
      age: 50,
    },
    {
      id: 1,
      firstName: "Sinem Sena",
      lastName: "Gökdemir",
      age: 22,
    },
  ];

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>İSİM</TableCell>
            <TableCell>SOYİSİM</TableCell>
            <TableCell>YAŞ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MUITable;
