import { useState } from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTranslation } from "react-i18next";
import CustomTable from "../../components/customTable/CustomTable";
import { useMemo } from "react";

const CompanyDetail = ({ companyData }) => {
  const theme = useTheme();
  const [value, setValue] = useState();
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabLabelStyle = {
    backgroundColor: "#EBEDEF",
    marginLeft: ".5rem",
    textTransform: "none",
    borderRadius: ".5rem",
    color: "black",
  };
  const activeLabelStyle = {
    borderTop: "2px solid #401686",
    backgroundColor: "#fff",
    textTransform: "none",
    color: "black",
    marginLeft: ".5rem",
  };
  return (
    <Box color={theme.palette.text.main}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} sx={{display:"flex", justifyContent:"space-between"}}>
            {/* <Tab
              label={<Typography>{t('% Dividend')}</Typography>}
              value='0'
              style={value === '0' ? activeLabelStyle : tabLabelStyle}
            /> */}
            <Tab
              label={<Typography>{t("% Bonus")}</Typography>}
              value="1"
              style={value === "1" ? activeLabelStyle : tabLabelStyle}
            />
            <Tab
              label={<Typography>{t("Right Share")}</Typography>}
              value="2"
              style={value === "2" ? activeLabelStyle : tabLabelStyle}
            />
          </TabList>
        </Box>

        {/* <TabPanel value='0'>
          <Dividend companyData={companyData} />
        </TabPanel> */}
        <TabPanel value='1'>
          <Bonus companyData={companyData} />
        </TabPanel>
        <TabPanel value="2">
          <RightShare companyData={companyData} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default CompanyDetail;

export const Dividend = ({ companyData }) => {
  const theme = useTheme();

  const filteredData = companyData?.dividend.filter(
    (row) => row?.fiscalYear && row?.cash
  );

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "fiscalYear",
        header: "Fiscal Year",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "cash",
        header: "Value",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title=""
      columns={columns}
      data={filteredData}
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
      enableRowNumbers={true}
    />
  );
};
export const Bonus = ({ companyData }) => {
  const theme = useTheme();

  const filteredData = companyData?.dividend.filter(
    (row) => row.fiscalYear && row.bonus
  );


  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "fiscalYear",
        header: "Fiscal Year",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "bonus",
        header: "Bonus",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title=""
      columns={columns}
      data={filteredData}
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
      enableRowNumbers={true}
    />
  );
};
export const RightShare = ({ companyData }) => {
  const theme = useTheme();

  const filteredData = companyData?.dividend.filter(
    (row) => row.fiscalYear && row.right
  );

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "fiscalYear",
        header: "Fiscal Year",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "right",
        header: "Right",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title=""
      columns={columns}
      data={filteredData}
      enablePagination={false}
      enableEditing={false}
      enableColumnResizing={false}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      headerBackgroundColor="#401686"
      headerColor= {theme.palette.text.alt }
      enableRowNumbers={true}
    />
  );
};
