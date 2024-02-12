import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTable from "../customTable/CustomTable";
import {
  researchSectorNewsColumns,
  researchSectorPerformanceColumns,
} from "../../pages/research/researchData";

const SectorTable = ({ title, data }) => {
  const theme = useTheme();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (title === "Sector Performance") {
      setColumns(researchSectorPerformanceColumns);
    } else if (title === "Hydro News & Announcement") {
      setColumns(researchSectorNewsColumns);
    } else if (title === "Top Gainers") {
      setColumns(researchSectorPerformanceColumns);
    } else if (title === "Top Loosers") {
      setColumns(researchSectorPerformanceColumns);
    } else if (title === "Hydro Tree Map") {
      setColumns(researchSectorNewsColumns);
    } else {
      return [];
    }
  }, [title]);

  return (
    <Grid
      item
      xs={12} sm={12} md={12} lg={12} xl={12}
      bgcolor={theme.palette.background.alt}
      borderRadius={"6px"}
      padding={2}
      sx={{ height: "100%" }}
    >
      <Typography
        variant="h3"
        style={{
          color: theme.palette.text.dark,
          fontWeight: "600",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <CustomTable
        title={title}
        columns={columns}
        data={data}
        exportAsCSV
        exportAsPdf
        enablePagination={false}
        enableEditing={false}
        enableColumnResizing={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        headerBackgroundColor="#401686"
        headerColor={theme.palette.text.alt}
      />
    </Grid>
  );
};

export default SectorTable;
