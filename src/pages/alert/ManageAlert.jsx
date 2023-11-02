import React, { useEffect } from "react";
import { Box, MenuItem, useTheme } from "@mui/material";
import NewFilter from "../../components/newFilter/NewFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  fetchData,
  putData,
} from "../../redux/actions/genericData";
import CustomTable from "../../components/customTable/CustomTable";
import { useState } from "react";
import { useMemo } from "react";
import CustomeAlertDialog from "../../components/customeDialog/CustomeDialog";

const ManageAlert = (props) => {
  const [tableShow, setTableShow] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState();
  const [tableDataIndex, settableDataIndex] = useState();
  const [params, setparams] = useState({});
  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    // Your data fetching logic here using the fetchData action
    // For example:
    dispatch(
      fetchData(
        `live-market/stock-alerts?script=${params.script || ''}&alertType=${params.alertType || ''}`
      )
    );
    setTableShow(true);
  }, [dispatch]);
  const filterMenuItem = [
    {
      label: "Script",
      name: "script",
      type: "labelAutoComplete",
      md: 4,
      options: props.script,
      sm: 12,
    },
    {
      label: "Alert Type",
      name: "alertType",
      type: "dropDownId",
      dropDownData: props.alertType,
      md: 4,
      sm: 12,
    },
  ];
  const alertType = [
    {
      id: "HIGHER_THAN",
      label: "Price Rise",
    },
    {
      id: "LOWER_THAN",
      label: "Price Below",
    },
  ];
  const alertFor = [
    { id: "SELL", label: "Sell" },
    { id: "PURCHASE", label: "Purchase" },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "alertType",
        header: "Alert Type",
        size: 100,
        sortable: false,

        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: alertType.map((state) => (
            <MenuItem key={state?.id} value={state?.id}>
              {state?.label}
            </MenuItem>
          )),
        },
        Cell: ({ cell }) => {
          return (
            <div>
              {cell.getValue() === "LOWER_THAN" ? "Price Below" : "Price Rise"}
            </div>
          );
        },
      },
      {
        id: 2,
        accessorKey: "triggerPrice",
        header: "AlertTrigger",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "alertMethod",
        header: "Notification Delivery Method",
        size: 100,
        sortable: false,
        editable: false,
      },
      {
        id: 4,
        accessorKey: "transactionType",
        header: "Alert For",
        size: 100,
        muiTableBodyCellEditTextFieldProps: {
          select: true, //change to select for a dropdown
          children: alertFor.map((state) => (
            <MenuItem key={state?.id} value={state?.id}>
              {state?.label}
            </MenuItem>
          )),
        },
        Cell: ({ cell }) => {
          return <div>{cell.getValue() === "SELL" ? "Sell" : "Purchase"}</div>;
        },
      },
    ],
    []
  );
  const handleSearch = (formValues) => {
    setTableShow(true);
    setparams(formValues);
    dispatch(
      fetchData(
        `live-market/stock-alerts?script=${formValues.script || ""}&alertType=${
          formValues.alertType || ""
        }`
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
    if (rowData.id) {
      new Promise((resolve, reject) => {
        dispatch(
          deleteData(
            "/live-market/delete/stock-alert",
            rowData.id,
            tableDataIndex,
            resolve,
            reject
          )
        );
      }).then(() => setIsModalOpen(false));
    }
  };
  const handleUpdate = (row, changeData) => {
    new Promise((resolve, reject) => {
      dispatch(
        putData(
          "/live-market/update/stock-alert",
          row.original.id,
          changeData,
          resolve,
          reject
        )
      );
    }).then(() =>
      dispatch(
        fetchData(
          `live-market/stock-alerts?script=${params.script}&alertType=${params.alertType}`
        )
      )
    );
  };

  return (
    <div>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <Box marginTop={2}>
        {tableShow ? (
          tableData && tableData.length > 0 ? ( // Check if tableData is not empty
            tableData.map((d) => {
              const companyName = props.companyList?.find(
                (data) => data.id === d.companyId
              )?.companyInfo;
              return (
                <CustomTable
                  key={d.companyId} // Add a unique key for each CustomTable
                  title={companyName}
                  enableColumnActions
                  columns={columns}
                  isLoading={true}
                  enableEditing={true}
                  state={{
                    isLoading: isLoading,
                    showSkeletons: isLoading,
                  }}
                  editingMode="modal"
                  enableEdit
                  enableDelete
                  data={d.stockAlertResponses}
                  handleDelete={deleteRow}
                  handleUpdate={handleUpdate}
                  edit
                  delete
                />
              );
            })
          ) : (
            !tableShow &&
            <Box
              sx={{
                width: "cover",
                height: "84px",
                backgroundColor: theme.palette.background.alt,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              No Script Found
            </Box>
          )
        ) : null}
      </Box>
      <CustomeAlertDialog
        disagreeLabel={"Cancel"}
        agreeLabel={"Agree"}
        header={"Are you sure to delete this alert ?"}
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleAgree={handleDeleteData}
      />
    </div>
  );
};

export default ManageAlert;
