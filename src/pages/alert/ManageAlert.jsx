import React from 'react';
import { Autocomplete, Box, MenuItem, Select, TextField } from '@mui/material';
import NewFilter from '../../components/newFilter/NewFilter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData } from '../../redux/actions/genericData';
import CustomTable from '../../components/customTable/CustomTable';
import { useState } from 'react';
import { useMemo } from 'react';
import CustomeAlertDialog from '../../components/customeDialog/CustomeDialog';
import EditAlert from './EditAlert';

const ManageAlert = (props) => {
  const [tableShow, setTableShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState();
  const [tableDataIndex, settableDataIndex] = useState();
  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);
  const [currentAlertType, setCurrentAlertType] = useState();
  console.log(
    '🚀 ~ file: ManageAlert.jsx:20 ~ ManageAlert ~ currentAlertType:',
    currentAlertType
  );
  const dispatch = useDispatch();

  const filterMenuItem = [
    {
      label: 'Script',
      name: 'script',
      type: 'labelAutoComplete',
      md: 4,
      options: props.script,
      sm: 12,
    },
    {
      label: 'Alert Type',
      name: 'alertType',
      type: 'dropDownId',
      dropDownData: props.alertType,
      md: 4,
      sm: 12,
    },
  ];
  const alertType = [
    {
      id: 'HIGHER_THAN',
      label: 'Price Rise',
    },
    {
      id: 'LOWER_THAN',
      label: 'Price Below',
    },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'alertType',
        header: 'Alert Type',
        size: 100,
        sortable: false,
        Edit: (props) => {
          const handleChange = (e, value) => {
            setCurrentAlertType(value?.id);
          };

          return (
            <Autocomplete
              name='alertType'
              getOptionLabel={(option) => option.label}
              options={alertType}
              // value={currentAlertType}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Select an Alert Type'
                  placeholder='Select alert type'
                  variant='outlined'
                  size='small'
                  InputLabelProps={{ shrink: true }}
                  required
                />
              )}
            />
          );
        },
      },
      {
        id: 2,
        accessorKey: 'triggerPrice',
        header: 'AlertTrigger',
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'alertMethod',
        header: 'Notification Delivery Method',
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: 'trType',
        header: 'Alert For',
        size: 100,
      },
    ],
    []
  );
  const handleSearch = (formValues) => {
    setTableShow(true);
    dispatch(
      fetchData(
        `live-market/stock-alerts?script=${formValues.script}&alertType=${formValues.alertType}`
      )
    );
  };
  const deleteRow = (row) => {
    setIsModalOpen(true);
    setRowData(row?.original);
    settableDataIndex(row.index);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleDeleteData = () => {
    if (rowData.id && tableDataIndex) {
      new Promise((resolve, reject) => {
        dispatch(
          deleteData(
            '/live-market/delete/stock-alert',
            rowData.id,
            tableDataIndex,
            resolve,
            reject
          )
        );
      }).then(() => setIsModalOpen(false));
    }
  };
  return (
    <div>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <Box marginTop={2}>
        {tableShow
          ? tableData?.map((d) => {
              const companyName = props.companyList?.find(
                (data) => data.id === d.companyId
              )?.companyInfo;
              return (
                <>
                  <CustomTable
                    title={companyName}
                    enableColumnActions
                    columns={columns}
                    isLoading={isLoading}
                    enableEditing={true}
                    editingMode='modal'
                    enableEdit
                    enableDelete
                    currentAlertType={currentAlertType}
                    data={d.stockAlertResponses}
                    handleDelete={deleteRow}
                    edit
                    delete
                  />
                </>
              );
            })
          : null}
      </Box>
      <CustomeAlertDialog
        disagreeLabel={'Cancel'}
        agreeLabel={'Agree'}
        header={'Are you sure to delete this alert ?'}
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleAgree={handleDeleteData}
      />
    </div>
  );
};

export default ManageAlert;
