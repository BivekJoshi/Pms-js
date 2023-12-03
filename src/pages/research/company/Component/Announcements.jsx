import { Grid, Typography } from "@mui/material";
// import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import "./Style.css";
import CustomTable from "../../../../components/customTable/CustomTable";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@emotion/react";

const Announcements = () => {
  const theme = useTheme();
  const [sale, setSale] = useState();
  const dataCourse = [
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
    {
      date: "NEPSE Index Oct 10 2022",
      news: "Ngadi Group Power Limited has posted a net profit of Rs 76.14 million 4th quarter company analysis of the fiscal year 2078/79. (Sunday Ocober 10 2022)",
    },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "date",
        header: "Date",
        size: 20,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "news",
        header: "News & Announcement",
        size: 200,
        sortable: false,
      },
    ],
    []
  );
  useEffect(() => {
    if (dataCourse) {
      setSale(dataCourse);
    }
  }, [dataCourse]);
  return (
    <div>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        paddingBottom="2rem"
      >
        <Typography variant="h3" alignSelf="center">
          Announcements
        </Typography>
        <Grid display="flex" flexDirection="row" gap="2rem">
          <Grid
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
          >
            <Typography>Date From:</Typography>
            <DatePicker label="Search Date From" />
          </Grid>
          <Grid
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="1rem"
          >
            <Typography>Date To:</Typography>
            <DatePicker label="Search Date to" />
          </Grid>
        </Grid>
      </Grid>
      <CustomTable
        title="Market News & Announcements"
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
        enableTopToolbar={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableFullScreenToggle={false}
        density="comfortable"
      />
    </div>
  );
};

export default Announcements;
