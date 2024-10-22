import React from "react";
import CustomTable from "../../../../components/customTable/CustomTable";
import { Grid, useTheme } from "@mui/material";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const CourseofSale = () => {
  const theme = useTheme();
  const [sale, setSale] = useState();
   const data = [
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    // { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "time",
        header: "Time",
        size: 120,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "volume1",
        header: "Volume",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "volume2",
        header: "Volume",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "value",
        header: "Value (Rs)",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  useEffect(() => {
    if (data) {
      setSale(data);
    }
  }, [data]);
  return (
    <Grid
      item
      xs={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={2}
    >
      <CustomTable
        columns={columns}
        // title="CourseofSale"
        //   isLoading={isLoading}
        data={data}
        exportAsCSV
        exportAsPdf
        enablePagination={false}
        enableTopToolbar={false}
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
      />
    </Grid>
  );
};

export default CourseofSale;
