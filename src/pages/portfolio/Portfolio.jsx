import { useMemo, useState } from "react";
import CustomTable from "../../components/customTable/CustomTable";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import {
  useGetUserInfo,
  useGetUserenPortfolio,
} from "../../hooks/portfolio/usePortfolio";
import { useTranslation } from "react-i18next";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { data: userPorfolioData, isLoading } = useGetUserenPortfolio();
  const { data: userInfoData, isLoading: loading } = useGetUserInfo();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "script",
        header: "Symbol",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "quantity",
        header: "Quantity",
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "ltp",
        header: "LTP",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "changePercent",
        header: "Change Percent",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "previousClose",
        header: "Close Price",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        header: "Total Gain/Loss",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        header: "Today's Gain/Loss",
        size: 100,
        sortable: false,
        Cell: ({ row }) => {
          const todayGain = row?.original?.ltp - row?.original?.previousClose;
          if (todayGain < 0) {
            return (
              <Typography style={{ color: "red" }}>
                {Math.abs(todayGain)}
              </Typography>
            );
          } else {
            return <Typography>{Math.abs(todayGain)}</Typography>;
          }
        },
      },
      {
        id: 8,
        header: "Market Value",
        size: 100,
        sortable: false,
        Cell: ({ row }) => {
          const marketValue = handleMarketValue(row?.original);
          return marketValue;
        },
      },
    ],
    []
  );

  const handleMarketValue = (row) => {
    const ltp = row?.ltp;
    const quantity = row?.quantity;
    return ltp * quantity;
  };

  const handleExportExcel = () => {
    if (userPorfolioData && userPorfolioData.length > 0) {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Portfolio");

      worksheet.getRow(1).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {argb: "EE7214"},
      };
      // worksheet.getRow(1).font = {
      //   bold: true,
      // };
      worksheet.columns = [
        {
          header: "Symbol",
          key: "script",
          width: 15,
        },
        {
          header: "Quantity",
          key: "quantity",
          width: 15,
        },
        {
          header: "LTP",
          key: "ltp",
          width: 15,
        },
        {
          header: "Change Percent",
          key: "changePercent",
          width: 15,
        },
        {
          header: "Close Price",
          key: "previousClose",
          width: 15,
        },
        {
          header: "Market Value",
          key: "marketValue",
          width: 15,
        },
      ];

      userPorfolioData.forEach((item) => {
        worksheet.addRow({
          script: item?.script,
          quantity: item?.quantity,
          ltp: item?.ltp,
          changePercent: item?.changePercent,
          previousClose: item?.previousClose,
          marketValue: handleMarketValue(item),
        });
      });

      workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, "Portfolio.xlsx");
      });
    }
  };

  const handleRowClick = (rowData) => {
    navigate(`/company/${rowData?.original?.script}`);
  };

  return (
    <>
      <Box
        bgcolor={theme.palette.background.alt}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          padding: "1rem 1rem",
        }}
      >
        <Box>
          <Typography variant="h6">
            {t("Name")} : {userInfoData?.clientName}
          </Typography>
          <Typography variant="h6">980000000</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{t("Market Value")}</Typography>
          <Typography variant="h6">+ 87422.00</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{t("Today Change")}</Typography>
          <Typography variant="h6">+ 493.00</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{t("Overall return")}</Typography>
          <Typography variant="h6">+ 50004.43</Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            textTransform: "none",
          }}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {t("Export")}
        </Button>
      </Box>
      {!isLoading ? (
        <Box>
          <CustomTable
            title={t("Portfolio")}
            columns={columns}
            data={userPorfolioData}
            isLoading={isLoading}
            enableFullScreenToggle
            headerBackgroundColor="#401686"
            headerColor={theme.palette.text.alt}
            onRowClick={handleRowClick}
            enableRowNumbers={true}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "cover",
            height: "84px",
            backgroundColor: theme.palette.background.alt,
          }}
        />
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleExportExcel}>Export as Excel</MenuItem>
      </Menu>
    </>
  );
};

export default Portfolio;
