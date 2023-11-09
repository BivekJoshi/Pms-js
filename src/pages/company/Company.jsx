import { useParams } from "react-router-dom";
import { useGetCompanyById } from "../../hooks/company/useCompany";
import { companyData as chartData } from "../dashboard/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ScriptProfile from "./ScriptProfile/ScriptProfile";
import CompanyDetail from "./CompanyDetail";

const Company = () => {
  const { script } = useParams();
  const theme = useTheme();
  const { t } = useTranslation();
  const { data: companyData } = useGetCompanyById(script);

  // console.log(companyData?.script, "daa");
  const cellStyle = {
    borderRight: "1px solid #e0e0e0",
    fontWeight: "bold",
  };
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData("Sector", "270,580.00"),
    createData("Shares Outstanding", "2312"),
    createData("%Changes", companyData?.script?.change + " %"),
    createData("Last Traded On", companyData?.script?.ltp),
    createData(
      "52 Weeks High-Low",
      "(" + companyData?.script?.high + " - " + companyData?.script?.low + ")"
    ),
    createData("120 Date Average", "434.34"),
    createData("1 Year Yield", "2323.32"),
    createData("EPS", "-27,34%"),
    createData("P/E Ratio", "27.82(FY:079-089)"),
    createData("Book Value", "214.69"),
    createData("PBV", "2.67"),
    createData("30-Day Avg Volume", "46,0323.23"),
    createData("Markert Capiltaization", "155,036,592"),
  ];

  return (
    <>
      <Box
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.alt}
        sx={{
          padding: "1rem 2rem",
          borderRadius: "6px",
        }}
      >
        <Typography
          variant="h2"
          style={{
            color: theme.palette.text.dark,
            marginBottom: "1rem",
          }}
        >
          {companyData?.companyInfo?.companyInfo}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={cellStyle}
                      sx={{ backgroundColor: "#401686", color: "#fff" }}
                    >
                      Heading
                    </TableCell>
                    <TableCell>Data</TableCell>
                  </TableRow>
                </TableHead>
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
            <Box sx={{paddingTop:".5rem"}}>
              <CompanyDetail companyData={companyData} />
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <Box
              color={theme.palette.text.main}
              bgcolor={theme.palette.background.alt}
              sx={{
                padding: "1rem 2rem",
                borderRadius: "6px",
              }}
            >
              <Typography variant="h4" style={{ marginBottom: "1rem" }}>
                {t("Nabil Bank Limited 1D")}
              </Typography>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart width={500} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={t("Pvalue")}
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={t("Mvalue")}
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Box
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.alt}
        sx={{
          padding: "1rem 2rem",
          borderRadius: "6px",
        }}
      >
        <ScriptProfile companyData={companyData} />
      </Box>
    </>
  );
};

export default Company;
