import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewFilter from '../../../components/newFilter/NewFilter';
import CustomTable from '../../../components/customTable/CustomTable';
import toast from 'react-hot-toast';
import { SHARE_TRANSACTION } from '../../../api/urls/urls';
import { fetchData } from '../../../redux/actions/transactionData';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Transactions = () => {
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.generic?.data?.content);
  const totalElements = useSelector(
    (store) => store?.generic?.data?.totalElements
  );

  const isLoading = useSelector((store) => store?.generic?.processing);

  const columns = useMemo(() => [
    {
      id: 1,
      accessorKey: 'trDate',
      header: 'Date',
      size: 100,
      sortable: false,
    },
    {
      id: 2,
      accessorKey: 'transactionNo',
      header: 'Transaction Number',
      size: 120,
      sortable: false,
    },
    {
      id: 3,
      accessorKey: 'trType',
      header: 'Transaction Type',
      size: 100,
      sortable: false,
    },
    {
      id: 4,
      accessorKey: 'script',
      header: 'Script',
      size: 100,
      sortable: false,
    },

    {
      id: 5,
      accessorKey: 'quantity',
      header: 'Quantity',
      size: 100,
      sortable: false,
    },
    {
      id: 6,
      accessorKey: 'rate',
      header: 'Rate',
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
  ]);

  const filterMenuItem = [
    {
      label: t('Date From'),
      name: 'dateFrom',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: t('Date To'),
      name: 'dateTo',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
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
            SHARE_TRANSACTION +
              `?pageNumber=0&dateFrom=${epochDateFrom}&dateTo=${epochDateTo}`
          )
        );
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error('Please provide both date values...');
    }
  };

  return (
    <>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <Box marginTop={2}>
        {tableShow ? (
          <CustomTable
            title='Transaction Report'
            columns={columns}
            isLoading={isLoading}
            data={tableData}
          />
        ) : null}
      </Box>
    </>
  );
};

export default Transactions;
