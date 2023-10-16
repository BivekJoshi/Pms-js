import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewFilter from "../../../components/newFilter/NewFilter";
import CustomTable from "../../../components/customTable/CustomTable";
import toast from "react-hot-toast";
import { Bill_TRANSACTION, RECEIPT_TRANSACTION } from "../../../api/urls/urls";
import { fetchData } from "../../../redux/actions/transactionData";
import { Box } from "@mui/material";

const ReceiptPayment = () => {
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const tableData = useSelector((store) => store?.generic?.data?.content);
  const isLoading = useSelector((store) => store?.generic?.processing);

  const columns = useMemo(() => [
    {
      id: 1,
      accessorKey: "trDate",
      header: "Date",
      size: 100,
      sortable: false,
    },
    {
      id: 2,
      accessorKey: "voucherType",
      header: "Voucher",
      size: 120,
      sortable: false,
    },
    {
      id: 3,
      accessorKey: "particulars",
      header: "Particulars",
      size: 100,
      sortable: false,
    },
    {
      id: 4,
      accessorKey: "referenceNo",
      header: "Reference No",
      size: 100,
      sortable: false,
    },

    {
      id: 5,
      accessorKey: "voucherNo",
      header: "Voucher No",
      size: 100,
      sortable: false,
    },
  ]);

  const filterMenuItem = [
    {
      label: "Date From",
      name: "dateFrom",
      type: "date-picker",
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: "Date To",
      name: "dateTo",
      type: "date-picker",
      required: true,
      md: 4,
      sm: 12,
    },
    {
        label: "Transaction Type",
        name: "type",
        type: "input-type",
        required: true,
        md: 4,
        sm: 12,
      },
  ];


  const handleSearch = (formValues) => {
    const epochDateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const epochDateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;
    
    if (epochDateFrom && epochDateTo) {
      setTableShow(true);
      try {
        dispatch(
          fetchData(
            RECEIPT_TRANSACTION +
              `?pageNumber=0&dateFrom=${epochDateFrom}&dateTo=${epochDateTo}&type=${formValues.type}`
          )
        );
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Please provide both date values...");
    }
  };

  return (
    <>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />
      <Box marginTop={2}>
        {tableShow ? (
          <CustomTable
            title="Receipt Report"
            columns={columns}
            isLoading={isLoading}
            data={tableData}
          />
        ) : null}
      </Box>
    </>
  );
};

export default ReceiptPayment;
