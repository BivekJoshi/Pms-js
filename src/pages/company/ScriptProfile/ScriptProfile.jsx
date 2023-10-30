import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About from "./ScriptTab/About";
import PriceHistory from "./ScriptTab/PriceHistory";
import Floorsheet from "./ScriptTab/Floorsheet";
import QuarterlyReport from "./ScriptTab/QuarterlyReport";

const ScriptProfile = ({companyData}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    backgroundColor:"#fff",
    textTransform: "none",
    color:"black",
    marginLeft:".5rem",
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab
              label="About"
              value="1"
              style={value === "1" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label="Price History"
              value="2"
              style={value === "2" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label="Floorsheet"
              value="3"
              style={value === "3" ? activeLabelStyle : labelStyle}
            />
            <Tab
              label="Quarterly Report"
              value="4"
              style={value === "4" ? activeLabelStyle : labelStyle}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About companyData={companyData}/>
        </TabPanel>
        <TabPanel value="2">
          <PriceHistory companyData={companyData}/>
        </TabPanel>
        <TabPanel value="3">
          <Floorsheet />
        </TabPanel>
        <TabPanel value="4">
          <QuarterlyReport />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ScriptProfile;
