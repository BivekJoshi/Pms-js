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
} from '@mui/material';
import React from 'react';
import AlertGraph from './AlertGraph';
import Spinner from '../../components/spinner/Spinner';
import AlertScriptTable from './AlertScriptTable';
import { useTranslation } from 'react-i18next';

const AlertScriptDetails = ({ data, isLoading }) => {
  const { t } = useTranslation();
  const scriptData = data?.script;
  const companyName = data?.companyInfo?.companyInfo;
  const theme = useTheme();
  const cellStyle = {
    borderRight: '1px solid #e0e0e0',
    fontWeight: 'bold',
    padding: '8px 16px',
  };

  return !isLoading ? (
    <div
      style={{
        backgroundColor: theme.palette.background.alt,
        padding: '12px',
        borderRadius: '6px',
      }}
    >
      <div>
        {' '}
        <Typography
          variant='h2'
          style={{
            color: theme.palette.text.dark,
            marginBottom: '1rem',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          {companyName}
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableBody>
                <TableRow>
                  <TableCell style={cellStyle}>{t("Last Traded Price")}</TableCell>
                  <TableCell>{scriptData?.ltp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={cellStyle}>{t("Today’s Change")}</TableCell>
                  <TableCell>{getTodayChanges(scriptData)}</TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell style={cellStyle}>{t("52 week’s Avg")}</TableCell>
                  <TableCell>12312</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={cellStyle}>{t("120 day’s Avg")}</TableCell>
                  <TableCell>12312</TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* <Grid item md={5.5} xs={12}>
          <AlertGraph />
        </Grid> */}
        <Grid item md={6} xs={12}>
          <AlertScriptTable script={scriptData.symbol} />
        </Grid>
      </Grid>
    </div>
  ) : (
    <Spinner />
  );
};
const getTodayChanges = (data) => {
  const color = data?.change < 0 ? 'error' : '#00c853';
  const positive = data?.change > 0 && '+';
  return (
    <Typography color={color}>
      {positive + data?.change}({Math.abs(data?.percent)}%)
    </Typography>
  );
};
export default AlertScriptDetails;
