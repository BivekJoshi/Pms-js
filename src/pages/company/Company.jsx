import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCompanyById } from '../../hooks/company/useCompany';
import { companyData as chartData } from '../dashboard/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { script } = useParams();
  const theme = useTheme();
  const { t } = useTranslation();
  const { data: companyData, isLoading } = useGetCompanyById(script);
  const data = [
    {
      id: 1,
      heading: 'sector',
      data: 3435678675643.0,
    },
    {
      id: 2,
      heading: 'Shares Outstanding',
      data: 573.0,
    },
    {
      id: 3,
      heading: '%change',
      data: '0.88%',
    },
    {
      id: 4,
      heading: 'Last Trade On',
      data: '2023/10/17',
    },
    {
      id: 5,
      heading: '52 Weeks High-Low',
      data: '930.00-560.50',
    },
    {
      id: 6,
      heading: '120 Dat average',
      data: '594.48',
    },
    {
      id: 7,
      heading: '1 year Yield',
      data: '-28.1%',
    },
    {
      id: 8,
      heading: 'EPS',
      data: 'cm',
    },
  ];

  return (
    <Box style={{ margin: '1rem 0.5rem' }}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Typography variant='h5'>Nabil Bank Limited (NBL)</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    border: `1px solid ${theme.palette.background.btn}`,
                    background: theme.palette.background.btn,
                    color: theme.palette.text.alt,
                    fontSize: '1rem',
                  }}
                >
                  Heading
                </TableCell>
                <TableCell
                  style={{
                    border: `1px solid ${theme.palette.background.btn}`,
                    background: theme.palette.background.alt,
                    color: theme.palette.text.main,
                    fontSize: '1rem',
                  }}
                >
                  Data
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((rowData) => (
                <TableRow
                  key={rowData?.id}
                  style={{ background: theme.palette.background.alt }}
                >
                  <TableCell style={{ border: '1px solid grey' }}>
                    {rowData?.heading}
                  </TableCell>
                  <TableCell style={{ border: '1px solid grey' }}>
                    {rowData?.data}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Box
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            sx={{
              padding: '1rem 2rem',
              borderRadius: '6px',
            }}
          >
            <Typography variant='h4' style={{ marginBottom: '1rem' }}>
              {t('Nabil Bank Limited 1D')}
            </Typography>
            <ResponsiveContainer width='100%' height={500}>
              <LineChart width={500} height={300} data={chartData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey={t('Pvalue')}
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <Line type='monotone' dataKey={t('Mvalue')} stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Company;
