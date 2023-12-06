import { useParams } from "react-router-dom";
import { useGetCompanyById, useGetfloorsheetById } from "../../hooks/company/useCompany";
import { lineData } from "../dashboard/dashBoardItems";
import { Box, Grid, Paper, Table, TableBody, TableCell } from "@mui/material";
import { TableContainer, TableHead, TableRow } from "@mui/material";
import { Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ScriptProfile from "./ScriptProfile/ScriptProfile";
import CompanyDetail from "./CompanyDetail";
import LineChartDash from "../../components/dashboardComponents/LineChart";
import { useSelector } from "react-redux";

const Company = () => {
  const { script } = useParams();
  const theme = useTheme();
  const { t } = useTranslation();
  const { data: companyData } = useGetCompanyById(script);

  const cellStyle = {
    borderRight: '1px solid #e0e0e0',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData('Sector', '270,580.00'),
    createData('Shares Outstanding', '2312'),
    createData('%Changes', companyData?.script?.change + ' %'),
    createData('Last Traded On', companyData?.script?.ltp),
    createData(
      '52 Weeks High-Low',
      '(' + companyData?.script?.high + ' - ' + companyData?.script?.low + ')'
    ),
    createData('120 Date Average', '434.34'),
    createData('1 Year Yield', '2323.32'),
    createData('EPS', '-27,34%'),
    createData('P/E Ratio', '27.82(FY:079-089)'),
    createData('Book Value', '214.69'),
    createData('PBV', '2.67'),
    createData('30-Day Avg Volume', '46,0323.23'),
    createData('Markert Capiltaization', '155,036,592'),
  ];

  return (
    <Box
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        padding: '1rem 2rem',
        borderRadius: '6px',
      }}
    >
      <Typography
        variant='h2'
        style={{
          color: theme.palette.text.dark,
          marginBottom: '1rem',
        }}
      >
        {companyData?.companyInfo?.companyInfo}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <TableContainer component={Paper} borderRadius='4px 0'>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow sx={{ borderSpacing: "1px" }}>
                  <TableCell
                    style={cellStyle}
                    sx={{ backgroundColor: '#401686', color: '#fff' }}
                  >
                    Heading
                  </TableCell>
                  <TableCell
                    sx={{
                      // border: '1px solid #401686',
                      // borderLeft: '2px solid #401686',
                      // borderRight: '2px solid #401686',
                      borderTop:'1px solid #6692C4'
                    }}
                  >
                    Data
                  </TableCell>
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
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Box
            sx={{ padding: "1rem 2rem", display: { sm: "block", md: "none" } }}
          >
            <CompanyDetail companyData={companyData} />
          </Box>
          <Box
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            sx={{
              padding: '1rem 2rem',
              borderRadius: '6px',
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "1rem" }}>
              {companyData?.companyInfo?.companyInfo}
            </Typography>

            <LineChartDash
              height={400}
              lineData={lineData}
              companyData={companyData}
            />
          </Box>
          <Box
            sx={{
              padding: { sm: '1rem 2rem', md: '0 2rem' },
              display: { sm: 'none', md: 'block' },
            }}
          >
            <CompanyDetail companyData={companyData} />
          </Box>
        </Grid>
      </Grid>

      <br />
      <Box
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.alt}
        sx={{
          padding: '1rem 2rem',
          borderRadius: '6px',
        }}
      >
        <ScriptProfile companyData={companyData} />
      </Box>
    </Box>
  );
};

export default Company;
