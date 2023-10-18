import React from "react";
import { Box, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material"; // Import the delete icon
import NewFilter from "../../components/newFilter/NewFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/actions/genericData";
import CustomTable from "../../components/customTable/CustomTable";
import { useState } from "react";
import { useMemo } from "react";
import { DELETE_DATA } from "../../redux/types/types";

const ManageAlert = (props) => {
  const [tableShow, setTableShow] = useState(false);
  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);
  const dispatch = useDispatch();

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
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "alertType",
        header: "Alert Type",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "triggerPrice",
        header: "AlertTrigger",
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "alertMethod",
        header: "Notification Delivery Method",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  const handleSearch = (formValues) => {
    console.log(formValues);
    dispatch(
      fetchData(
        `live-market/stock-alerts?script=${formValues.script}&alertType=${formValues.alertType}`
      )
    );
    setTableShow(true);
  };
  const deleteData = () => {
    dispatch({ type: DELETE_DATA });
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
                    editingMode="row"
                    enableEdit
                    enableDelete
                    data={d.stockAlertResponses}
                    handleDelete={(data) => console.log(data)}
                    edit
                    delete
                  />
                </>
              );
            })
          : null}
      </Box>
    </div>
  );
};

export default ManageAlert;
