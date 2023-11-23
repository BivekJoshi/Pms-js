import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomTable from "../customTable/CustomTable";
import { useMemo } from "react";

const PerformanceTable = ({ title, data }) => {
  const theme = useTheme();

  const columns = useMemo(() => {
    if (title === "Best Performance") {
      return [
        {
          id: 1,
          accessorKey: "script",
          header: "Script(Qty.)",
          size: 100,
          sortable: false,
        },
        {
          id: 2,
          accessorKey: "ltp",
          header: "LTP",
          size: 100,
          sortable: false,
        },
        {
          id: 3,
          accessorKey: "pp",
          header: "CP",
          size: 100,
          sortable: false,
        },
        {
          id: 4,
          accessorKey: "change",
          header: "Change(%)",
          size: 100,
          sortable: false,
        },
      ];
    } else if (title === "Worst Performance") {
      return [
        {
          id: 1,
          accessorKey: "script",
          header: "Script(Qty.)",
          size: 100,
          sortable: false,
        },
        {
          id: 2,
          accessorKey: "ltp",
          header: "LTP",
          size: 100,
          sortable: false,
        },
        {
          id: 3,
          accessorKey: "pp",
          header: "CP",
          size: 100,
          sortable: false,
        },
        {
          id: 4,
          accessorKey: "change",
          header: "Change(%)",
          size: 100,
          sortable: false,
        },
      ];
    }
    return [];
  }, [title]);

  const headerBackgroundColorMapping = {
    "Best Performance": "#006E17",
    "Worst Performance": "#D32F2F",
  };

  const headerBackgroundColor =
    headerBackgroundColorMapping[title] || theme.palette.background.main;

  return (
    <Grid
      item
      xs={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={2}
    >
      <Typography
        variant="h6"
        style={{
          color: theme.palette.text.dark,
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <CustomTable
        title={title}
        columns={columns}
        data={data}
        enablePagination={false}
        enableEditing={false}
        enableColumnResizing={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        headerBackgroundColor={headerBackgroundColor}
        headerColor={theme.palette.text.alt}
      />
    </Grid>
  );
};

export default PerformanceTable;
