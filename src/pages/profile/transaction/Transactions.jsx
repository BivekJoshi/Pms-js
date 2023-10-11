import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewFilter from '../../../components/newFilter/NewFilter';
import CustomTable from '../../../components/customTable/CustomTable';
import toast from 'react-hot-toast';
import { ACCOUNT_TRANSACTION, SHARE_TRANSACTION } from '../../../api/urls/urls';
import { fetchData } from '../../../redux/actions/transactionData';

const Transactions = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store?.generic?.data?.content);
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
      id: 6,
      accessorKey: 'transactionNo',
      header: 'Transaction Number',
      size: 120,
      sortable: false,
    },
    {
      id: 2,
      accessorKey: 'trType',
      header: 'Transaction Type',
      size: 100,
      sortable: false,
    },
    {
      id: 1,
      accessorKey: 'script',
      header: 'Script',
      size: 100,
      sortable: false,
    },

    {
      id: 3,
      accessorKey: 'quantity',
      header: 'Quantity',
      size: 100,
      sortable: false,
    },
    {
      id: 5,
      accessorKey: 'rate',
      header: 'Rate',
      size: 100,
      sortable: false,
    },
    {
      id: 4,
      accessorKey: 'amount',
      header: 'Amount',
      size: 100,
      sortable: false,
    },
  ]);

  const filterMenuItem = [
    {
      label: 'Date From',
      name: 'dateFrom',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: 'Date To',
      name: 'dateTo',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
    },
  ];

  // const symbols = symbolsArray.map((item) => item.symbol);

  const handleSearch = (formValues) => {
    const epochDateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const epochDateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;
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
  };

  return (
    <>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <CustomTable
        title='Transaction Report'
        columns={columns}
        isLoading={isLoading}
        data={tableData}
      />
    </>
  );
};

export default Transactions;
