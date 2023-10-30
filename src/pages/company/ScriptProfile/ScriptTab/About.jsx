import React from "react";
import {
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(heading, data) {
  return { heading, data };
}



const About = ({companyData}) => {

  const rows = [
    createData("Symbol", companyData?.companyInfo?.symbol),
    createData("Company Name", companyData?.companyInfo?.companyInfo),
    createData("Sector", companyData?.companyInfo?.sector),
    createData("Listed Shares", "270,907,908.00"),
    createData("Paidup Values", "100.00"),
    createData(" Total Paidup Value", "27,056,453,343.00"),
  ];

  const cellStyle = {
    borderRight: "1px solid #e0e0e0",
    fontWeight: "bold",
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.heading}>
                  <TableCell style={cellStyle}>{row.heading}</TableCell>
                  <TableCell>{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>

  );
}

export default About;
