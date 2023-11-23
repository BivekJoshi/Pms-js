import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ACCOUNT_TRANSACTION } from '../../../api/urls/urls';
import NewFilter from '../../../components/newFilter/NewFilter';
import { fetchData } from '../../../redux/actions/genericData';
import CustomTable from '../../../components/customTable/CustomTable';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { filterDateValidationSchema } from '../../../form/validations/filterDateValidate';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DownloadIcon from '@mui/icons-material/Download';

const Statement = ({ tradeDate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.generic);
  const isLoading = useSelector((store) => store?.generic?.processing);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'trDate',
        header: 'Date',
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'voucherType',
        header: 'Voucher',
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'particulars',
        header: 'Particulars',
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: 'referenceNo',
        header: 'Reference No',
        size: 100,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: 'voucherNo',
        header: 'Voucher No',
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  const filterMenuItem = [
    {
      label: t('Date From'),
      name: 'dateFrom',
      type: 'date-picker',
      required: true,
      md: 6,
      sm: 12,
    },
    {
      label: t('Date To'),
      name: 'dateTo',
      type: 'date-picker',
      required: true,
      md: 6,
      sm: 12,
      max: new Date().toISOString().slice(0, 10),
    },
  ];

  const handleSearch = (formValues) => {
    const epochDateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const epochDateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;

    if (epochDateFrom && epochDateTo) {
      setTableShow(true);
      try {
        dispatch(
          fetchData(
            ACCOUNT_TRANSACTION +
              `?dateFrom=${epochDateFrom}&dateTo=${epochDateTo}`
          )
        );
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <>
       <Box
        sx={{
          display: "flex",
          width: "cover",
          backgroundColor: theme.palette.background.alt,
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          borderRadius:'6px'
        }}
      >
        <div>
          <Typography variant="h4">Statement Report</Typography>
          <Typography variant="h7">Last Transaction Date: 2078-01-09</Typography>
          <br/>
          <Typography variant="h7">Transaction Type: Sell</Typography>
        </div>
        <div style={{display:"flex",gap:'7px'}}>
          <LocalPrintshopOutlinedIcon/>
          <DownloadIcon/>
        </div>
      </Box>
      <br />
      <NewFilter
        tradeDate={tradeDate}
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
      />
      <Box marginTop={2}>
        {tableShow ? (
          <CustomTable
            title='Statement Report'
            columns={columns}
            isLoading={isLoading}
            data={tableData}
          />
        ) : null}
      </Box>
    </>
  );
};

export default Statement;
