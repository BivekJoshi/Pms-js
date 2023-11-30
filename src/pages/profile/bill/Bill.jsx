import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewFilter from "../../../components/newFilter/NewFilter";
import CustomTable from "../../../components/customTable/CustomTable";
import toast from "react-hot-toast";
import { Bill_TRANSACTION } from "../../../api/urls/urls";
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import FormModal from "../../../components/formModal/FormModal";
import BillDetail from "./BillDetail";
import { fetchPaginatedTable } from "../../../redux/actions/paginatedTable";
import CustomPagination from "../../../components/customPagination/CustomPagination";
import { useTranslation } from "react-i18next";
import { filterDateValidationSchema } from "../../../form/validations/filterDateValidate";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { transactionTypBill, transactionType } from "../../../utility/dropdownData";
import { useEffect } from "react";

const Bill = ({ tradeDate }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [tableShow, setTableShow] = useState(false);
  const tableData = useSelector((store) => store?.paginatedTable?.data);
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);

  const totalData = useSelector((store) => store?.paginatedTable?.total);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

  const [params, setParams] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [trType, setTrType] = useState(false);
  const { t } = useTranslation();

  const [amount, setAmount] = useState();
  const [commission, setCommission] = useState();
  
  useEffect(() => {
    const { totalAmount, totalCommission } = Object.values(tableData)?.reduce(
      (acc, curr) => {
        acc.totalAmount += curr.amount ?? 0;
        acc.totalCommission += curr.rate ?? 0;
        return acc;
      },
      { totalAmount: 0, totalCommission: 0 }
    );
  
    setAmount(totalAmount);
    setCommission(parseFloat(totalCommission.toFixed(2)));
  }, [tableData]);
  

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Date",
        size: 100,
        sortable: false,
        Footer: () => (
          <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
            Total Amount
          </Typography>
        ),
      },
      {
        id: 2,
        accessorKey: "billNo",
        header: "Bill Number",
        size: 120,
        sortable: false,
        // Cell:(value)=>{
        //   console.log(value?.cell?.row?.original,"rowData ma")
          
        // }
      },
      {
        id: 3,
        accessorKey: "trType",
        header: "Transaction Type",
        size: 100,
        sortable: false,
        Cell: (value) => {
          if (value?.cell?.row?.original?.trType === "P") {
            return "Purchase";
          } else {
            return "Sell";
          }
        },
      },
      {
        id: 4,
        accessorKey: "script",
        header: "Script",
        size: 100,
        sortable: false,
        Cell: ({ row }) => {
          if (row?.original?.trType === "P") {
            return "Purchase";
          } else if (row?.original?.trType === "S") {
            return "Sell";
          } else return row?.original?.trType;
        },
      },
      {
        id: 5,
        accessorKey: "rate",
        header: "Rate",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "amount",
        header: "Amount",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "commission",
        header: "Comission",
        size: 100,
        sortable: false,
      },
      {
        id: 8,
        accessorKey: "isSettled",
        header: "Settlement Status",
        size: 100,
        sortable: false,
        Cell: (value) => {
          if (value?.cell?.row?.original?.isSettled === true) {
            return (<b style={{color:"green"}}>Settled</b>);
          } else {
            return (<b style={{color:"red"}}>Unsettled</b>);
          }
        },
      },
    ],
    [amount, commission]
  );

  const filterMenuItem = [
    {
      label: t("Date From"),
      name: "dateFrom",
      type: "date-picker",
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: t("Date To"),
      name: "dateTo",
      type: "date-picker",
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: "Transaction Type",
      name: "transactionType",
      type: "dropDownId",
      dropDownData: transactionTypBill,
      md: 4,
      sm: 12,
    },
  ];

  const handleSearch = (formValues) => {
    setTrType(formValues?.transactionType);
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
            Bill_TRANSACTION,
            updatedFormValues,
            null,
            "billNo"
          )
        );
        setTableShow(true);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Please provide both date values...");
    }
  };
  const handleRowClick = (rowData) => {
    setIsModalOpen(true);
    setSelectedRowData(rowData);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "cover",
          backgroundColor: theme.palette.background.alt,
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          borderRadius: "6px",
        }}
      >
        <div>
          <Typography variant="h4">Bills Report</Typography>
          <Typography variant="h7">
            Last Transaction Date: <b>{tradeDate}</b>
          </Typography>
          <br/>
          <Typography variant="h7">
            Transaction Type:{" "}
            <b>
              {trType === "P"
                ? "Purchase"
                : trType === "S"
                ? "Sell"
                : "--"}
            </b>
          </Typography>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <LocalPrintshopOutlinedIcon />
          <DownloadIcon />
        </div>
      </Box>
      <br />
      <NewFilter
        inputField={filterMenuItem}
        tradeDate={tradeDate}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
        submitButtonText="Search"
      />
      <Box marginTop={2}>
        {tableShow ? (
          <>
            <CustomTable
              title="Bill Report"
              columns={columns}
              isLoading={isLoading}
              data={Object.values(tableData)}
              pageSize={pageSize}
              onRowClick={handleRowClick}
            />
            <div
              style={{
                paddingTop: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CustomPagination
                pages={totalPages}
                activePage={currentPage}
                handleChangePage={(newPage) => {
                  dispatch(
                    fetchPaginatedTable(
                      Bill_TRANSACTION,
                      params,
                      newPage,
                      "billNo",
                      null,
                      totalData
                    )
                  );
                }}
              />
            </div>
          </>
        ) : null}
      </Box>
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width={1400}
        formComponent={
          <>
            <BillDetail rowData={selectedRowData} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                onClick={() => {
                  setIsModalOpen(false);
                }}
                sx={{ mt: 3, ml: 1, textTransform: "none" }}
                color="error"
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
