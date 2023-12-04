import React from "react";
import CustomTable from "../../../../components/customTable/CustomTable";
import { Grid, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

const MarketDepth = () => {
  const theme = useTheme();
  const salerData = [
    { order: "1", qty: "30", price: "21" },
    { order: "2", qty: "307", price: "2100" },
    { order: "3", qty: "100", price: "218" },
  ];
  const BayerData = [
    { order: "1", qty: "30", price: "21" },
    { order: "2", qty: "307", price: "2198" },
    { order: "3", qty: "100", price: "21123" },
  ];
  const salercolumns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "order",
        header: "Order",
        size: 120,
        sortable: false,
        Footer: () => {
          return <Typography>Total</Typography>
        }
      },
      {
        id: 2,
        accessorKey: "qty",
        header: "Qty",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "price",
        header: "Price",
        size: 100,
        sortable: false,
        
      },
    ],
    []
  );
  const Bayercolumns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "order",
        header: "Order",
        size: 120,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "qty",
        header: "Qty",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "price",
        header: "Price",
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  const addTotalRow = (data) => {
    const totalRow = {
      order: "Total",
      qty: data.reduce((total, item) => total + parseInt(item.qty, 10), 0),
      price: data.reduce((total, item) => total + parseInt(item.price, 10), 0),
    };
    return [...data, totalRow];
  };

  const salerDataWithTotal = addTotalRow(salerData);
  const BayerDataWithTotal = addTotalRow(BayerData);
  return (
    <>
    <Grid
      item
      xs={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding="0 7px 7px 7px"
    >
      <CustomTable
        columns={salercolumns}
        //   isLoading={isLoading}
        title="Buyer"
        data={salerDataWithTotal}
        enableTopToolbar={true}
        enablePagination={false}
        enableEditing={false}
        enableColumnResizing={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={false}
        density="comfortable"
        bodyCellPadding="10px 20px"
      />

      
    </Grid>
    <Grid
      item
      xs={12}
      // bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={1}
    >
      <CustomTable
        columns={Bayercolumns}
        //   isLoading={isLoading}
        title="Seller"
        data={BayerDataWithTotal}
        boldTotalRow={true}
        enableTopToolbar={true}
        enablePagination={false}
        enableEditing={false}
        enableColumnResizing={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={false}
        density="comfortable"
        bodyCellPadding="10px 20px"
      />

      
    </Grid>
    </>
  );
};

export default MarketDepth;
