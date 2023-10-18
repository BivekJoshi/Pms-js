import React, { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ACCOUNT_TRANSACTION } from '../../../api/urls/urls';
import NewFilter from '../../../components/newFilter/NewFilter';
import { fetchData } from '../../../redux/actions/genericData';
import CustomTable from '../../../components/customTable/CustomTable';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Statement = () => {
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.generic);
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
  ]);

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

export default Statement;
