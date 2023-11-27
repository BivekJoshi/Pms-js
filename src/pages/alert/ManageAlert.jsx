import React, { useEffect } from "react";
import { Box, MenuItem, useTheme } from "@mui/material";
import NewFilter from "../../components/newFilter/NewFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  
  fetchData,
  putData,
} from "../../redux/actions/genericData";
import CustomTable from "../../components/customTable/CustomTable";
import { useState } from "react";
import { useMemo } from "react";
import CustomeAlertDialog from "../../components/customeDialog/CustomeDialog";
import { useRemoveWatchListDetail } from "./useAlertPost";
// import Spinner from "../../components/spinner/Spinner";

const ManageAlert = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [params, setparams] = useState({});

  const [tableShow, setTableShow] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState();
  const [tableDataIndex, settableDataIndex] = useState();

  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);

  const id = rowData?.id;
  const { mutate } = useRemoveWatchListDetail({ id });

  useEffect(() => {
    dispatch(fetchData(`live-market/stock-alerts`));
  }, [dispatch]);

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
    mutate(tableDataIndex, {
      onSuccess: () => {
        dispatch(
          fetchData(
            `live-market/stock-alerts?script=${params.script || ""}&alertType=${
              params.alertType || ""
            }`
          )
        );
      },
    });
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
          `live-market/stock-alerts?script=${params.script || ""}&alertType=${
            params.alertType || ""
          }`
        )
      )
    );
  };

  return (
    <div>
      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        showfilter={false}
        submitButtonText="Search"
      />
      <Box marginTop={2}>
        {tableShow ? (
          tableData.length > 0 ? ( // Check if tableData is not empty
            tableData.map((d) => {
              const companyName = props.companyList?.find(
                (data) => data.id === d.companyId
              )?.companyInfo;
              return (
                <>
                  <CustomTable
                    key={d.companyId} // Add a unique key for each CustomTable
                    title={companyName}
                    enableColumnActions
                    columns={columns}
                    isLoading={isLoading}
                    enableEditing={true}
                    headerBackgroundColor="#401686"
                    headerColor={theme.palette.text.alt}
                    state={{
                      isLoading: isLoading,
                      showSkeletons: isLoading,
                    }}
                    editingMode="modal"
                    enableEdit
                    enableFullScreenToggle={false}
                    enableDelete
                    data={d.stockAlertResponses}
                    handleDelete={deleteRow}
                    handleUpdate={handleUpdate}
                    edit
                    delete
                  />
                  <br></br>
                </>
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

      {/*Delete the Row Data */}
      <CustomeAlertDialog
        disagreeLabel={"Yes, Delete !"}
        agreeLabel={"No, Keep It."}
        alertTitle={"Delete Alert"}
        header={"You are going to delete the ''Alert''."}
        confirmhead={"Are u sure ?"}
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleAgree={handleDeleteData}
      />
    </div>
  );
};

export default ManageAlert;
