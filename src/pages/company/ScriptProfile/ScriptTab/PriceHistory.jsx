import React, { useMemo } from 'react';
import NewFilter from '../../../../components/newFilter/NewFilter';
import { useTranslation } from 'react-i18next';
import CustomTable from '../../../../components/customTable/CustomTable';
import { useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { STOCK_PRICE_DETAILS } from '../../../../api/urls/urls';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  clearPaginatedData,
  fetchPaginatedTable,
} from '../../../../redux/actions/paginatedTable';
import CustomPagination from '../../../../components/customPagination/CustomPagination';
import { useEffect } from 'react';

const PriceHistory = ({ companyData }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [tableShow, setTableShow] = useState(false);
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store?.paginatedTable?.data);
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);

  const totalData = useSelector((store) => store?.paginatedTable?.table);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);
  console.log(
    '🚀 ~ file: PriceHistory.jsx:30 ~ PriceHistory ~ pageSize:',
    pageSize
  );

  const [params, setParams] = useState();

  const filterMenuItem = [
    {
      label: t('Select Date'),
      name: 'trDate',
      type: 'date-picker',
      required: true,
      md: 6,
      sm: 12,
    },
  ];
  const fetchData = async () => {
    try {
      const initialFormValues = {
        // Define your initial form values here
        trDate: null, // or a default date
        script: companyData?.companyInfo?.symbol,
        // Add other form fields if needed
      };

      // Fetch data when the component mounts
      dispatch(
        fetchPaginatedTable(
          STOCK_PRICE_DETAILS,
          initialFormValues,
          null,
          'unique'
        )
      );
      setTableShow(true);
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    dispatch(clearPaginatedData());
    const updatedFormValues = {
      script: companyData?.companyInfo?.symbol,
    };
    setParams(updatedFormValues);
    fetchData();
    return () => {
      dispatch(clearPaginatedData());
    };
  }, [dispatch]);

  const handleSearch = (formValues) => {
    const trDate = formValues.trDate
      ? new Date(formValues.trDate).getTime() / 1000
      : null;

    const updatedFormValues = {
      ...formValues,
      script: companyData?.companyInfo?.symbol,
      trDate,
    };
    setParams(updatedFormValues);

    try {
      dispatch(
        fetchPaginatedTable(
          STOCK_PRICE_DETAILS,
          updatedFormValues,
          null,
          'unique'
        )
      );
    } catch (error) {
      toast.error(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'stockDate',
        header: 'Date',
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'ltp',
        header: 'LTP',
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'change',
        header: 'Change',
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: 'changePercent',
        header: 'Change %',
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: 'high',
        header: 'High',
        size: 100,
        sortable: false,
      },

      {
        id: 6,
        accessorKey: 'low',
        header: 'Low',
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: 'previousClose',
        header: 'Open',
        size: 100,
        sortable: false,
      },
      // {
      //   id: 7,
      //   accessorKey: 'quantity',
      //   header: 'Qty.',
      //   size: 100,
      //   sortable: false,
      // },
      // {
      //   id: 8,
      //   accessorKey: 'turnover',
      //   header: 'Turnover',
      //   size: 100,
      //   sortable: false,
      // },
    ],
    []
  );

  return (
    <>
      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        submitButtonText='Search'
        // validate={filterDateValidationSchema}
      />{' '}
      {tableShow ? (
        <>
          <CustomTable
            title='Market Date'
            columns={columns}
            isLoading={isLoading}
            data={Object.values(tableData)}
            pageSize={pageSize}
            // onRowClick={handleRowClick}
            headerBackgroundColor='#401686'
            headerColor={theme.palette.text.alt}
            enableFullScreenToggle={false}
            enableHiding={false}
            // enableColumnFilters={false}
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
                    STOCK_PRICE_DETAILS,
                    params,
                    newPage,
                    'unique',
                    null,
                    totalData
                  )
                );
              }}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default PriceHistory;
