import React from "react";
import {  Grid, Tab, useTheme } from "@mui/material";
import StockExchange from "../Component/StockExchange";
import MarketDepth from "../Component/MarketDepth";
import CourseofSale from "../Component/CourseofSale";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

const ResearchCompany = () => {
  const [value, setValue] = useState("1");
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <div style={{ background: theme.palette.background.alt, borderRadius:"5px" }}>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              indicatorColor="secondary"
              textColor={theme.palette.text.main}
            >
              <Tab label="Market Depth" value="1" />
              <Tab label="Course of Sale" value="2" />
            </TabList>
            <TabPanel value="1">
              <MarketDepth />
            </TabPanel>
            <TabPanel value="2">
              <CourseofSale />
            </TabPanel>
          </TabContext>
        </div>
      </Grid>
      <Grid item xs={12} md={7} lg={7} xl={7}>
        <StockExchange height={400}/>
      </Grid>
    </Grid>
  );
};

export default ResearchCompany;
