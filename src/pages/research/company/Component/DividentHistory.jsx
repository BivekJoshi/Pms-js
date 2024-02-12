import { Grid, useTheme } from "@mui/material";
import React from "react";
import CustomTable from "../../../../components/customTable/CustomTable";
import { useMemo } from "react";

const DividentHistory = () => {
  const theme = useTheme();
  const dataCourse = [
    {
      financialYear: "2077/2078",
      cashDividend: "4.4",
      bonus: "21",
      totalDividend:"21"
    },
    {
      financialYear: "2077/2078",
      cashDividend: "4.4",
      bonus: "21",
      totalDividend:"21"
    },
    {
      financialYear: "2077/2078",
      cashDividend: "4.4",
      bonus: "21",
      totalDividend:"21"
    },
    {
      financialYear: "2077/2078",
      cashDividend: "4.4",
      bonus: "21",
      totalDividend:"21"
    },
    {
      financialYear: "2077/2078",
      cashDividend: "4.4",
      bonus: "21",
      totalDividend:"21"
    },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "financialYear",
        header: "Financial Year",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "cashDividend",
        header: "Cash Dividend (%)",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "bonus",
        header: "Bonus Share (%)",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "totalDividend",
        header: "Total Dividend (%)",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title="Dividend history of the past 5 Years"
      columns={columns}
      //   isLoading={isLoading}
      data={dataCourse}
      //   pageSize={pageSize}
      //   onRowClick={handleRowClick}
      exportAsCSV
      exportAsPdf
      headerBackgroundColor="#401686"
      headerColor={theme.palette.text.alt}
      enablePagination={false}
      enableEditing={false}
      enableColumnResizing={false}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={false}
      // enableTopToolbar={false}
      enableDensityToggle={false}
      enableHiding={false}
      enableFullScreenToggle={false}
      density="comfortable"
    />
  );
};

export default DividentHistory;
