import { Grid, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTable from "../customTable/CustomTable";
import { BestPerformanceColumns, WorstPerformanceColumns } from "../../pages/dashboard/dashBoardItems";

const PerformanceTable = ({ title, data }) => {
  const theme = useTheme();
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    if (title === "Best Performance") {
      setColumns(BestPerformanceColumns);
    } else if (title === "Worst Performance") {
      setColumns(WorstPerformanceColumns);
    } else {
    }
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
