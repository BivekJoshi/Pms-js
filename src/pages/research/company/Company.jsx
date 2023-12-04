import React from "react";
import { Grid, Tab, useTheme } from "@mui/material";
import StockExchange from "./Component/StockExchange";
import MarketDepth from "./Component/MarketDepth";
import CourseofSale from "./Component/CourseofSale";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import About from "./Component/About";
import Announcements from "./Component/Announcements";
import DividentHistory from "./Component/DividentHistory";
import Report from "./Component/Report";
import Financials from "./Component/Financials";
import Forcastes from "./Component/Forcastes";
import CompanyHeader from './Component/CompanyHeader';

const ResearchCompany = () => {
  const [value, setValue] = useState("1");
  const [valueDown, setValueDown] = useState("3");
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeDown = (event, newValueDown) => {
    setValueDown(newValueDown);
  };

  const labelStyle = {
    backgroundColor: "#EBEDEF",
    marginLeft: ".5rem",
    textTransform: "none",
    borderRadius: ".5rem",
    color: "black",
  };
  const activeLabelStyle = {
    // ...labelStyle,
    borderTop: "2px solid #401686",
    backgroundColor: "#fff",
    textTransform: "none",
    color: "black",
    marginLeft: ".5rem",
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CompanyHeader />
      </Grid>
      <Grid item xs={12} md={5} lg={5} xl={5}>
        <div
          style={{
            background: theme.palette.background.alt,
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              indicatorColor="none"
              textColor={theme.palette.text.main}
              sx={{ pl: "1rem" }}
            >
              <Tab
                label="Market Depth"
                value="1"
                style={value === "1" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Course of Sale"
                value="2"
                style={value === "2" ? activeLabelStyle : labelStyle}
              />
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
        <StockExchange height={500} />
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            background: theme.palette.background.alt,
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          <TabContext value={valueDown}>
            <TabList
              onChange={handleChangeDown}
              indicatorColor="none"
              textColor={theme.palette.text.main}
              sx={{ pl: "1rem" }}
            >
              <Tab
                label="About"
                value="3"
                style={valueDown === "3" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Announcements"
                value="4"
                style={valueDown === "4" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Financials"
                value="5"
                style={valueDown === "5" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Reports"
                value="6"
                style={valueDown === "6" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Dividend History"
                value="7"
                style={valueDown === "7" ? activeLabelStyle : labelStyle}
              />
              <Tab
                label="Forcastes & Trends"
                value="8"
                style={valueDown === "8" ? activeLabelStyle : labelStyle}
              />
            </TabList>
            <TabPanel value="3">
              <About />
            </TabPanel>
            <TabPanel value="4">
              <Announcements/>
            </TabPanel>
            <TabPanel value="5">
              <Financials />
            </TabPanel>
            <TabPanel value="6">
              <Report/>
            </TabPanel>
            <TabPanel value="7">
             <DividentHistory/>
            </TabPanel>
            <TabPanel value="8">
              <Forcastes />
            </TabPanel>
          </TabContext>
        </div>
      </Grid>
    </Grid>
  );
};

export default ResearchCompany;
