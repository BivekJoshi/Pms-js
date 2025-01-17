import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewFilter from "../../../components/newFilter/NewFilter";
import CustomTable from "../../../components/customTable/CustomTable";
import toast from "react-hot-toast";
import { SHARE_TRANSACTION } from "../../../api/urls/urls";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
// import { transactionType } from "../../../utility/dropdownData";
import { filterDateValidationSchema } from "../../../form/validations/filterDateValidate";
import { fetchPaginatedTable } from "../../../redux/actions/paginatedTable";
import CustomPagination from "../../../components/customPagination/CustomPagination";
import { getNumberIntoCurrency } from "../../../utility/calculatorValues";

const Transactions = ({ tradeDate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const [trType, setTrType] = useState(false);

  const { t } = useTranslation();
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);
  const tableData = useSelector((store) => store?.paginatedTable?.data);

  const totalData = useSelector((store) => store?.paginatedTable?.total);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);
  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

  const [params, setParams] = useState();
  const [amount, setAmount] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    const data = Object.values(tableData);
    const newData = data.length;
    if (newData > 0) {
      const totalAmount = data.reduce(
        (acc, curr) => acc + (curr.amount ?? 0),
        0
      );
      setAmount(totalAmount);
      setText("Total Amount");
    } else {
      setAmount("");
      setText("");
    }
  }, [tableData]);

  const transactionType = [
    {
      label: t("Sell"),
      id: "S",
    },
    {
      label: t("Purchase"),
      id: "P",
    },
    {
      label: t("Both"),
      id: "B",
    },
  ];

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Date",
        size: 80,
        sortable: false,
        Footer: () => {
          return <span>{text}</span>;
        },
      },
      {
        id: 2,
        accessorKey: "transactionType",
        header: "Transaction Type",
        size: 100,
        sortable: false,
        Cell: ({ renderedCellValue }) => {
          if (renderedCellValue === "P") {
            return "Purchase";
          } else if (renderedCellValue === "S") {
            return "Sell";
          } else return renderedCellValue;
        },
      },
      // {
      //   id: 3,
      //   accessorKey: "transactionNo",
      //   header: "Transaction Number",
      //   size: 120,
      //   sortable: false,
      // },

      {
        id: 4,
        accessorKey: "script",
        header: "Script",
        size: 80,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: "quantity",
        header: "Quantity",
        size: 80,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "rate",
        header: "Rate",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "amount",
        header: "Amount",
        size: 100,
        sortable: false,
        Cell: ({ renderedCellValue }) => (
          <span>{getNumberIntoCurrency(renderedCellValue)}</span>
        ),
        Footer: () => {
          return (
            <Typography style={{ width: "auto" }}>
              {getNumberIntoCurrency(amount)}
            </Typography>
          );
        },
      },
    ],
    [amount, text]
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
      label: t("Transaction Type"),
      name: "transactionType",
      type: "dropDownId",
      dropDownData: transactionType,
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
            SHARE_TRANSACTION,
            updatedFormValues,
            null,
            "transactionNo"
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
          <Typography variant="h4">{t("Transaction Report")}</Typography>
          <Typography variant="h7">
            {t("Last Transaction Date")} : <b>{tradeDate}</b>
          </Typography>
          <br />
          <Typography variant="h7">
            {t("Transaction Type")} :{" "}
            <b>
              {trType === "P"
                ? "Purchase"
                : trType === "S"
                ? "Sell"
                : trType === "B"
                ? "Both"
                : "Both"}
            </b>
          </Typography>
        </div>
      </Box>
      <br />
      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
        tradeDate={tradeDate}
        submitButtonText="Search"
      />
      <Box marginTop={2}>
        {tableShow && (
          <>
            <CustomTable
              title={t("Transaction Report")}
              columns={columns}
              isLoading={isLoading}
              exportAsCSV
              exportAsPdf
              data={Object.values(tableData)}
              pageSize={pageSize}
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
                      SHARE_TRANSACTION,
                      params,
                      newPage,
                      "transactionNo",
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
