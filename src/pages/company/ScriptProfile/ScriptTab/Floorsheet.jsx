import { useTheme } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import NewFilter from '../../../../components/newFilter/NewFilter';
import CustomTable from '../../../../components/customTable/CustomTable';
import toast from 'react-hot-toast';
import CustomPagination from '../../../../components/customPagination/CustomPagination';
import {
  clearPaginatedData,
  fetchPaginatedTable,
} from '../../../../redux/actions/paginatedTable';
import { FLOOR_SHEET_DETAILS } from '../../../../api/urls/urls';
import { useEffect } from 'react';
import { getErrorMessage } from '../../../../utility/getErrorMessage';

const Floorsheet = ({ companyData }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const [tableKey, setTableKey] = useState(0); 
  const tableData = useSelector((store) => store?.paginatedTable?.data);
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);

  let totalData = useSelector((store) => store?.paginatedTable?.table);
  let totalPages = useSelector((store) => store?.paginatedTable?.pages);
  let currentPage = useSelector((store) => store?.paginatedTable?.page);

  let pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

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
          FLOOR_SHEET_DETAILS,
          initialFormValues,
          null,
          'unique'
        )
      );

      setTableShow(true);
    } catch (error) {
      toast.error(getErrorMessage(error));
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
  }, [dispatch,companyData?.companyInfo?.symbol]);

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
          FLOOR_SHEET_DETAILS,
          updatedFormValues,
          null,
          'unique'
        )
      );
      setTableShow(true);
      setTableKey((key) => key + 1);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };
  useEffect(() => {
    if (tableKey > 0) {
      fetchData();
    }
  }, [tableKey, dispatch]);
  
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'trDate',
        header: 'Date',
        size: 200,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'amount',
        header: 'Amount',
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'buyer',
        header: 'Buyer',
        size: 100,
        sortable: false,
      },
      {
        id: 4,
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
        id: 6,
        accessorKey: 'seller',
        header: ' Seller',
        size: 100,
        sortable: false,
      },
      // {
      //   id: 7,
      //   accessorKey: 'symbol',
      //   header: 'Symbol',
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
      />
      {tableShow ? (
        <>
          <CustomTable
            title='Market Date'
            columns={columns}
            isLoading={isLoading}
            data={Object.values(tableData)}
            pageSize={pageSize}
            // headerColor={theme.palette.text.main}
            headerBackgroundColor='#006E17'
            headerColor='red'
            // onRowClick={handleRowClick}
            // headerBackgroundColor='#401686'
            // headerColor={theme.palette.text.alt}
            enableFullScreenToggle={false}
            enableHiding={false}
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
                    FLOOR_SHEET_DETAILS,
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

export default Floorsheet;
