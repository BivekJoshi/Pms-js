import React from "react";
import CustomTable from "../../../components/customTable/CustomTable";
import { useMemo } from "react";
import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";

const MarketNews = () => {
  const theme = useTheme();
  const data = [
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
        size: 1,
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
  return (
    <Grid
      item
      xs={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={2}
    >
      <CustomTable
        title="Market News & Announcements"
        columns={columns}
        //   isLoading={isLoading}
        data={data}
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
    </Grid>
  );
};

export default MarketNews;
