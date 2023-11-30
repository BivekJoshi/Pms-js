import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const About = () => {
  const cellStyle = {
    borderRight: "1px solid #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    fontWeight: "bold",
    textAlign: "center",
  };

  function createData(heading, data) {
    return { heading, data };
  }
  const rows = [
    createData("Sector", "Commercial Bank"),
    createData("Shares Outstanding", "2312"),
    createData("%Changes", "22 832 909 000.00"),
    createData("Last Traded On", "1653/740"),
    createData("52 Weeks High-Low", "1653/740"),
    createData("EPS", "-27,34%"),
    createData("Book Value", "214.69"),
    createData("PBV", "2.67"),
    createData("30-Day Avg Volume", "46,0323.23"),
    createData("Markert Capiltaization", "155,036,592"),
  ];
  return (
    <Grid container>
      <Grid item xs={12} md={5} lg={4} padding="24px 16px">
        <Typography variant="h3" fontWeight="600" paddingBottom="16px">
          Summary
        </Typography>
        <Grid >
          <TableContainer
            component={Paper}
            borderRadius="4px 0"
            border="1px solid red"
          >
            <Table
              aria-label="simple table"
              sx={{ borderTop: "px solid #e0e0e0" }}
            >
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.heading}
                    sx={{ borderTop: "px solid #e0e0e0" }}
                  >
                    <TableCell style={cellStyle}>{row.heading}</TableCell>
                    <TableCell style={{ borderTop: "1px solid #e0e0e0" }}>
                      {row.data}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item xs={0} lg={2}></Grid>
      <Grid item xs={12} md={5} lg={6}>
        hellow
      </Grid>
    </Grid>
  );
};

export default About;
