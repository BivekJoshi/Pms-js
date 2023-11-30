import React, { useEffect, useMemo, useState } from "react";
import CustomTable from "../../../components/customTable/CustomTable";
import { Grid, useTheme } from "@mui/material";

const MarketDepth = () => {
  const theme = useTheme();
  const [data, setData] = useState();

  const staticData = [
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
    { time: "10:00:00", volume1: "2037.92", volume2: "18.96", value: "3000" },
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
    if (staticData) {
      setData(staticData);
    } else {
      return <>"No Data Found"</>;
    }
  }, [staticData]);
  
  return (
    <Grid
      item
      xs={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={2}
    >
      {data && (
        <CustomTable
          columns={columns}
          //   isLoading={isLoading}
          data={data}
          enableTopToolbar={false}
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
        />
      )}
    </Grid>
  );
};

export default MarketDepth;
