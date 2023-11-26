import { Box, Typography, useTheme } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import CustomTable from '../../../components/customTable/CustomTable';
import { useDispatch, useSelector } from 'react-redux';
import { Bill_TRANSACTION_BILL_DETAIL } from '../../../api/urls/urls';
import { fetchData } from '../../../redux/actions/genericData';
import toast from 'react-hot-toast';

const BillDetail = ({ rowData }) => {
  console.log('🚀 ~ file: BillDetail.jsx:10 ~ BillDetail ~ rowData:', rowData);
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);

  useEffect(() => {
    try {
      dispatch(
        fetchData(
          Bill_TRANSACTION_BILL_DETAIL + `/${rowData?.original?.billNo}`
        )
      );
    } catch (error) {
      toast.error('Please select RowData');
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'script',
        header: 'Script',
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'billNo',
        header: 'Bill Number',
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'buyQty',
        header: 'Buy Quantity',
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: 'sellQty',
        header: 'Sell Quantity',
        size: 100,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: 'commission',
        header: 'Commission',
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: 'Is Settled',
        header: 'isSettled',
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: 'amount',
        header: 'Amount',
        size: 100,
        sortable: false,
      },
      {
        id: 8,
        accessorKey: 'rate',
        header: 'Rate',
        size: 100,
        sortable: false,
      },
      {
        id: 9,
        accessorKey: 'trDate',
        header: 'Tr Date',
        size: 100,
        sortable: false,
      },
      {
        id: 10,
        accessorKey: 'transactionType',
        header: 'Tr Type',
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  const theme = useTheme();

  return (
    <div>
      <Box
        bgcolor={theme.palette.background.alt}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          padding: '1rem 1rem',
        }}
      >
        <Box>
          <Typography variant='h6'>Bill No.</Typography>
          <Typography variant='h6'>{tableData?.billNo}</Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Amount</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalAmount).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Sebon Commission</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalSebonCommission).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Commission</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalCommission).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total CGT</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalCgt).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Stock Commission</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalStockCommission).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total DP Charge</Typography>
          <Typography variant='h6'>
            {Number(tableData?.totalDpCharge).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Buy Quantity</Typography>
          <Typography variant='h6'>{tableData?.totalBuyQuantity}</Typography>
        </Box>
        <Box>
          <Typography variant='h6'>Total Sell Quantity</Typography>
          <Typography variant='h6'>{tableData?.totalSellQuantity}</Typography>
        </Box>
      </Box>

      <CustomTable
        title='Bill Detail'
        columns={columns}
        data={tableData.detail}
        isLoading={isLoading}
      />
    </div>
  );
};

export default BillDetail;
