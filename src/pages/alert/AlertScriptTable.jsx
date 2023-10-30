import React from 'react';
import CustomTable from '../../components/customTable/CustomTable';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/genericData';

const AlertScriptTable = ({ script }) => {
  const dispatch = useDispatch();
  const tableData = useSelector(
    (store) => store?.generic?.data[0]?.stockAlertResponses
  );
  useEffect(() => {
    dispatch(fetchData(`live-market/stock-alerts?script=${script || ''}`));
  }, [dispatch, script]);
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'alertType',
        header: 'Alert Type',
        size: 120,
        sortable: false,
        Cell: ({ cell }) => {
          return (
            <div>
              {cell.getValue() === 'LOWER_THAN' ? 'Price Below' : 'Price Rise'}
            </div>
          );
        },
      },
      {
        id: 2,
        accessorKey: 'triggerPrice',
        header: 'Alert Trigger',
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'alertMethod',
        header: 'Notification Type',
        size: 150,
        sortable: false,
      },
    ],
    []
  );
  return (
    <>
      <CustomTable
        columns={columns}
        isLoading={true}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        enableColumnActions={false}
        data={tableData}
      />
    </>
  );
};

export default AlertScriptTable;
