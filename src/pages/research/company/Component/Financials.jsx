import React from "react";
import CustomTable from "../../../../components/customTable/CustomTable";
import { useTheme } from "@mui/material";
import { useMemo } from "react";

const Financials = () => {
  const theme = useTheme();
  const dataCourse = [
    {
      particulars: "Paid Up Capital",
      growth: "64092%",
      q4: "22832909.00",
      q3: "22832909.00",
      q2: "22832909.00",
      q1: "22832909.00",
      date: "270580.00",
    },
    {
      particulars: "Share Premium",
      growth: "-99.89%",
      q4: "22832909.00",
      q3: "22832909.00",
      q2: "22832909.00",
      q1: "22832909.00",
      date: "270580.00",
    },
    {
      particulars: "Retained Earnings",
      growth: "64092%",
      q4: "22832909.00",
      q3: "22832909.00",
      q2: "22832909.00",
      q1: "22832909.00",
      date: "270580.00",
    },
    {
      particulars: "Reserves",
      growth: "-99.89%",
      q4: "22832909.00",
      q3: "22832909.00",
      q2: "22832909.00",
      q1: "22832909.00",
      date: "270580.00",
    },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "particulars",
        header: "Particulars Value in 000’",
        size: 200,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "growth",
        header: "YOY Growth",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "q4",
        header: "78/79 Q4",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "q3",
        header: "78/79 Q3",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "q2",
        header: "78/79 Q2",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "q1",
        header: "78/79 Q1",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "date",
        header: "Date",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title="Summary"
      columns={columns}
      //   isLoading={isLoading}
      data={dataCourse}
      //   pageSize={pageSize}
      //   onRowClick={handleRowClick}
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

export default Financials;
