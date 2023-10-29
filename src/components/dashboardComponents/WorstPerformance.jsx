import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import CustomTable from "../customTable/CustomTable";

const WorstPerformance = () => {
  const theme = useTheme();

  const data = [
    {
      indexCode: "MANIND",
      indexvalue: 4949.23,
      pointChange: "+56.98",
      perChange: "+1.01",
    },
    {
      indexCode: "TRDIND",
      indexvalue: 2222.34,
      pointChange: "-3.23",
      perChange: "-343.2",
    },
    {
      indexCode: "MICROIND",
      indexvalue: 12332.121,
      pointChange: "+232.23",
      perChange: "-0.98",
    },
    {
      indexCode: "FININD",
      indexvalue: 23423423,
      pointChange: "-32.45",
      perChange: "-0.91",
    },
  ];

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "indexCode",
        header: "Index Code",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "indexvalue",
        header: "Index Value",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "pointChange",
        header: "Point Change",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "perChange",
        header: "%Change",
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  const data1 = [
    {
      script: "ANBL (10)",
      ltp: 1653.3,
      pp: 1700.2,
      change: "10.00%",
    },
    {
      script: "UNL (20)",
      ltp: 23423.32,
      pp: 324234.32,
      change: "34%",
    },
    {
      script: "CHCL (60)",
      ltp: 12332.121,
      pp: 2212.12,
      change: "98%",
    },
    {
      script: "NBL (50)",
      ltp: 2342,
      pp: 332.45,
      change: "19%",
    },
  ];

  const columns1 = useMemo(
    () => [
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
        header: "PP",
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
    ],
    []
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Box
          bgcolor={theme.palette.background.alt}
          color={theme.palette.text.main}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem  2rem",
            borderRadius: "6px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: theme.palette.text.dark,
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Worst Performance
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: theme.palette.text.dark,
              marginBottom: "1rem",
            }}
          >
            Index Watch
          </Typography>
          <CustomTable
            title=""
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
            headerBackgroundColor={theme.palette.background.btn}
            headerColor={theme.palette.text.alt}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Typography
          variant="h6"
          style={{
            color: theme.palette.text.dark,
            marginBottom: "1rem",
            marginTop: "3.8rem",
          }}
        >
          Worst Performance
        </Typography>
        <CustomTable
          title=""
          columns={columns1}
          data={data1}
          enablePagination={false}
          enableEditing={false}
          enableColumnResizing={false}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          headerBackgroundColor="#D32F2F"
          headerColor={theme.palette.text.alt}
        />
      </Grid>
    </Grid>
  );
};

export default WorstPerformance;
