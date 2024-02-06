import { Box, Divider, Typography, useTheme } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import CustomTable from "../../../components/customTable/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { Bill_TRANSACTION_BILL_DETAIL } from "../../../api/urls/urls";
import { fetchData } from "../../../redux/actions/genericData";
import toast from "react-hot-toast";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const BillDetail = ({ rowData }) => {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store?.generic?.data);
  const isLoading = useSelector((store) => store?.generic?.processing);

  useEffect(() => {
    try {
      dispatch(
        fetchData(
          Bill_TRANSACTION_BILL_DETAIL + `/${rowData?.original?.billNo}`
        )
      );
    } catch (error) {
      toast.error("Please select RowData");
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Tr Date",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "script",
        header: "Script",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        header: "Quantity",
        size: 100,
        sortable: false,
        Cell: ({ row }) => row.original.buyQty + row.original.sellQty,
      },
      {
        id: 4,
        accessorKey: "rate",
        header: "Rate",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "commission",
        header: "Commission",
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
    ],
    []
  );

  return (
    <div>
      <Box>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Bill Detail</Typography>
          {/* <div style={{ display: "flex", gap: "1rem" }}>
            <PictureAsPdfOutlinedIcon />
            <PrintOutlinedIcon />
            <EmailOutlinedIcon />
          </div> */}
        </div>
        <br />
        <Divider />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h6">
              <b>Bill No : </b>
              {""} {tableData?.billNo}
            </Typography>
            <Typography variant="h6">
              <b>Total Amount : </b>
              {""} {Number(tableData?.totalAmount).toFixed(2)}
            </Typography>
          </div>
          <div>
            {rowData?.original?.trType === "S" && (
              <Typography variant="h6">
                <b>Total CGT : </b>
                {""} {Number(tableData?.totalCgt).toFixed(2)}
              </Typography>
            )}
            <Typography variant="h6">
              <b>Total Commission : </b>
              {""} {Number(tableData?.totalCommission).toFixed(2)}
            </Typography>
          </div>

          <div></div>
        </div>
        <br />
        <Typography variant="h6">
          As per your order dated <b>{rowData?.original?.trDate}</b> we have{" "}
          <b style={{ borderBottom: "1px solid black" }}>
            {rowData?.original?.trType === "P" ? "Purchased" : "Sold"}
          </b>{" "}
          these undernoted stocks.
        </Typography>
        <br />
        <CustomTable
          title="Bill Detail"
          columns={columns}
          data={tableData.detail}
          isLoading={isLoading}
          enablePagination={false}
          enableEditing={false}
          enableColumnResizing={false}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
        />
      </Box>
    </div>
  );
};

export default BillDetail;
