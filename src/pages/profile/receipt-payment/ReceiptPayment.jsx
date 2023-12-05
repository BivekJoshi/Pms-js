import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewFilter from "../../../components/newFilter/NewFilter";
import CustomTable from "../../../components/customTable/CustomTable";
import toast from "react-hot-toast";
import { RECEIPT_TRANSACTION } from "../../../api/urls/urls";

import { Box, Typography, useTheme } from "@mui/material";
import CustomPagination from "../../../components/customPagination/CustomPagination";
import { fetchPaginatedTable } from "../../../redux/actions/paginatedTable";
import { useTranslation } from "react-i18next";
import { receiptPaymentType } from "../../../utility/dropdownData";
import { filterDateValidationSchema } from "../../../form/validations/filterDateValidate";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import DownloadIcon from "@mui/icons-material/Download";

const ReceiptPayment = ({ tradeDate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const [trType, setTrType] = useState(false);

  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.paginatedTable?.data);

  const isLoading = useSelector((store) => store?.paginatedTable?.processing);
  const totalData = useSelector((store) => store?.paginatedTable?.total);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

  const [params, setParams] = useState();
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Date",
        size: 60,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "voucherType",
        header: "Voucher",
        size: 20,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "particulars",
        header: "Particulars",
        size: 130,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "referenceNo",
        header: "Reference No",
        size: 120,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: "voucherNo",
        header: "Voucher No",
        size: 80,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "amount",
        header: "Amount",
        size: 80,
        sortable: false,
      },
    ],
    []
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
      name: "type",
      type: "dropDownId",
      dropDownData: receiptPaymentType,
      md: 4,
      sm: 12,
    },
  ];

  const handleSearch = (formValues) => {
    setTrType(formValues?.type);
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
            RECEIPT_TRANSACTION,
            updatedFormValues,
            null,
            "unique"
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
          <Typography variant="h4">Receipt/Payment Report</Typography>
          <Typography variant="h7">
            Last Transaction Date: <b>{tradeDate}</b>
          </Typography>
          <br />
          <Typography variant="h7">
            Transaction Type:{" "}
            <b>
              {trType === "P"
                ? "Payment"
                : trType === "R"
                ? "Receipt"
                : trType === "B"
                ? "Both"
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
        tradeDate={tradeDate}
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
        submitButtonText="Search"
      />
      <Box marginTop={2}>
        {tableShow && (
          <>
            <CustomTable
              title="Receipt Report"
              columns={columns}
              isLoading={isLoading}
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
                      RECEIPT_TRANSACTION,
                      params,
                      newPage,
                      "unique",
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

export default ReceiptPayment;
