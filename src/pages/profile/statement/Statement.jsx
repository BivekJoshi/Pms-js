import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TRANSACTION } from "../../../api/urls/urls";
import NewFilter from "../../../components/newFilter/NewFilter";
import { fetchData } from "../../../redux/actions/genericData";
import CustomTable from "../../../components/customTable/CustomTable";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { filterDateValidationSchema } from "../../../form/validations/filterDateValidate";
import { fetchPaginatedTable } from "../../../redux/actions/paginatedTable";
import CustomPagination from "../../../components/customPagination/CustomPagination";
import { useEffect } from "react";
import { Chip } from "@mui/material";
import { Button } from "@mui/material";
import FormModal from "./../../../components/formModal/FormModal";
import Paymentmethod from "./../SubscriptionTab/Paymentmethod";
import { getNumberIntoCurrency } from "../../../utility/calculatorValues";

const Statement = ({ tradeDate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const { t } = useTranslation();
  const tableData = useSelector((store) => store?.paginatedTable?.data);
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);

  const totalData = useSelector((store) => store?.paginatedTable?.total);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemsPerPage);

  const [params, setParams] = useState();
  const [paymentModal, setPaymentModal] = useState(false);
  const [debit, setDebit] = useState();
  const [credit, setCredit] = useState();
  const [amount, setAmount] = useState();
  const [text, setText] = useState();

  useEffect(() => {
    const data = Object.values(tableData);
    if (data.length > 0) {
      const { totalDebit, totalCredit, totalAmount } = data?.reduce(
        (acc, curr) => {
          acc.totalDebit += Number(curr.dr) ?? 0;
          acc.totalCredit += Number(curr.cr) ?? 0;
          acc.totalAmount += Number(curr.balance) ?? 0;
          return acc;
        },
        { totalDebit: 0, totalCredit: 0, totalAmount: 0 }
      );

      setDebit(totalDebit.toFixed(2));
      setCredit(totalCredit);
      setAmount(totalAmount);
      setText("Total");
    } else {
      setDebit("");
      setCredit("");
      setAmount("");
      setText("");
    }
  }, [tableData]);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Transaction Date",
        size: 100,
        sortable: false,
        Footer: () => {
          return <span>{text}</span>;
        },
      },
      {
        id: 3,
        accessorKey: "stDate",
        header: "Settlement Date",
        size: 60,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "referenceNo",
        header: "Ref No.",
        size: 90,
        sortable: false,
      },
      // {
      //   id: 5,
      //   accessorKey: "voucherNo",
      //   header: "Voucher No.",
      //   size: 90,
      //   sortable: false,
      // },
      {
        id: 6,
        accessorKey: "particulars",
        header: "Particular",
        size: 140,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "dr",
        header: "Debit",
        size: 60,
        sortable: false,
        Footer: () => {
          return <Typography style={{ width: "auto" }}>{debit}</Typography>;
        },
      },
      {
        id: 8,
        accessorKey: "cr",
        header: "Credit",
        size: 60,
        sortable: false,
        Footer: () => {
          return <Typography style={{ width: "auto" }}>{credit}</Typography>;
        },
      },
      {
        id: 9,
        accessorKey: "balance",
        header: "Balance", 
        size: 60,
        sortable: false,
        Cell: ({renderedCellValue}) => (
          <span>{getNumberIntoCurrency(renderedCellValue)}</span>
        ),
        Footer: () => {
          return <Typography style={{ width: "auto" }}>{getNumberIntoCurrency(amount)}</Typography>;
        },
      },
    ],
    [debit, credit, amount]
  );

  const filterMenuItem = [
    {
      label: "Fiscal Year",
      name: "fy",
      type: "fiscal-year",
      md: 4,
      sm: 12,
    },
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
      max: new Date().toISOString().slice(0, 10),
    },
  ];

  const handleSearch = (formValues) => {
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
            ACCOUNT_TRANSACTION,
            updatedFormValues,
            null,
            "id"
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography variant="h4">{t("Statement Report")}</Typography>
          <Typography variant="h7">
            {t("Last Transaction Date")} : <b>{tradeDate}</b>
          </Typography>
          <div style={{ display: "flex", gap: "16px" }}>
            <Chip color="error" label="Balance : Rs, 23,154 CR" />{" "}
            <Button variant="contained" onClick={() => setPaymentModal(true)}>
              {" "}
              Initiate Payment
            </Button>
          </div>
        </div>
      </Box>
      <br />
      <NewFilter
        tradeDate={tradeDate}
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        validate={filterDateValidationSchema}
        submitButtonText="Search"
        enableFiscalYear
      />
      <Box marginTop={2}>
        {tableShow && (
          <>
            <CustomTable
              title={t("Statement Report")}
              columns={columns}
              isLoading={isLoading}
              exportAsCSV
              exportAsPdf
              data={Object.values(tableData)}
              pageSize={100}
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
                      "id",
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
      {paymentModal && (
        <FormModal
          open={open}
          onClose={() => setPaymentModal(false)}
          width="378px"
          formComponent={
            <Paymentmethod onClose={() => setPaymentModal(false)} />
          }
        />
      )}
    </>
  );
};

export default Statement;
