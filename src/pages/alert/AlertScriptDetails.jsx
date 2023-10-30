import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AlertGraph from "./AlertGraph";
import Spinner from "../../components/spinner/Spinner";
import AlertScriptTable from "./AlertScriptTable";

const AlertScriptDetails = ({ data, isLoading }) => {
  const scriptData = data?.script;
  const companyName = data?.companyInfo?.companyInfo;
  const theme = useTheme();
  const cellStyle = {
    borderRight: "1px solid #e0e0e0",
    fontWeight: "bold",
    padding: "8px 16px",
  };

  return !isLoading ? (
    <div
      style={{
        backgroundColor: theme.palette.background.alt,
        padding: "12px",
        borderRadius: "6px",
      }}
    >
      <div>
        {" "}
        <Typography
          variant="h2"
          style={{
            color: theme.palette.text.dark,
            marginBottom: "1rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {companyName}
        </Typography>
      </div>
      <div className="company-details" style={{ display: "flex", gap: "16px" }}>
        {" "}
        <Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell style={cellStyle}>Last traded price</TableCell>
                    <TableCell>{scriptData?.ltp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={cellStyle}>Today’s Change</TableCell>
                    <TableCell>{getTodayChanges(scriptData)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={cellStyle}>52 week’s Avg</TableCell>
                    <TableCell>12312</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={cellStyle}>120 day’s Avg</TableCell>
                    <TableCell>12312</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <div className="graph">
          <AlertGraph />
        </div>
        <div>
          <AlertScriptTable script={scriptData.symbol} />
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
const getTodayChanges = (data) => {
  const color = data?.change < 0 ? "error" : "#00c853";
  const positive = data?.change > 0 && "+";
  return (
    <Typography color={color}>
      {positive + data?.change}({Math.abs(data?.percent)}%)
    </Typography>
  );
};
export default AlertScriptDetails;
