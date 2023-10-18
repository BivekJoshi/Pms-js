import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewFilter from '../../../components/newFilter/NewFilter';
import CustomTable from '../../../components/customTable/CustomTable';
import toast from 'react-hot-toast';
import { Bill_TRANSACTION } from '../../../api/urls/urls';
import { fetchData } from '../../../redux/actions/transactionData';
import { Box, Button, Modal } from '@mui/material';
import FormModal from '../../../components/formModal/FormModal';
import BillDetail from './BillDetail';
import { useTranslation } from 'react-i18next';

const Bill = () => {
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.generic?.data?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

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
        accessorKey: 'billNo',
        header: 'Bill Number',
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
        accessorKey: 'buyQty',
        header: 'Buy Quantity',
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: 'sellQty',
        header: 'Sell Quantity',
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
    ],
    []
  );

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
            Bill_TRANSACTION +
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
  const handleRowClick = (rowData) => {
    setIsModalOpen(true);
    setSelectedRowData(rowData);
  };
  return (
    <>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <Box marginTop={2}>
        {tableShow ? (
          <CustomTable
            title={t('Bill Report')}
            columns={columns}
            isLoading={isLoading}
            data={tableData}
            onRowClick={handleRowClick}
          />
        ) : null}
      </Box>
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formComponent={
          <>
            <BillDetail rowData={selectedRowData} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant='contained'
                onClick={() => {
                  setIsModalOpen(false);
                }}
                sx={{ mt: 3, ml: 1 }}
                color='error'
              >
                {t("Close")}
              </Button>
            </Box>
          </>
        }
      />
    </>
  );
};

export default Bill;
