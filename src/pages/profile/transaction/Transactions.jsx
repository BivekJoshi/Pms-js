import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewFilter from '../../../components/newFilter/NewFilter';
import CustomTable from '../../../components/customTable/CustomTable';
import toast from 'react-hot-toast';
import { SHARE_TRANSACTION } from '../../../api/urls/urls';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { transactionType } from '../../../utility/dropdownData';
import { filterDateValidationSchema } from '../../../form/validations/filterDateValidate';
import { fetchPaginatedTable } from '../../../redux/actions/paginatedTable';
import CustomPagination from '../../../components/customPagination/CustomPagination';

const Transactions = () => {
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);
  const tableData = useSelector((store) => store?.paginatedTable?.data);

  const totalData = useSelector((store) => store?.paginatedTable?.total);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

  const [params, setParams] = useState();
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
    {
      label: 'Transaction Type',
      name: 'trType',
      type: 'dropDownId',
      dropDownData: transactionType,

      md: 4,
      sm: 12,
    },
  ];

  const handleSearch = (formValues) => {
    const dateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const dateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;

    if (dateFrom && dateTo) {
      const updatedFormValues = {
        ...formValues,
        dateFrom,
        dateTo,
      };
      setParams(updatedFormValues);
      try {
        dispatch(
          fetchPaginatedTable(
            SHARE_TRANSACTION,
            updatedFormValues,
            null,
            'transactionNo'
          )
        );
        setTableShow(true);
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <>
      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
      />
      <Box marginTop={2}>
        {tableShow && (
          <>
            <CustomTable
              title='Transaction Report'
              columns={columns}
              isLoading={isLoading}
              data={Object.values(tableData)}
              pageSize={pageSize}
            />
            <div
              style={{
                paddingTop: '16px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <CustomPagination
                pages={totalPages}
                activePage={currentPage}
                handleChangePage={(newPage) => {
                  dispatch(
                    fetchPaginatedTable(
                      SHARE_TRANSACTION,
                      params,
                      newPage,
                      'transactionNo',
                      null,
                      totalData
                    )
                  );
                }}
              />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default Transactions;
