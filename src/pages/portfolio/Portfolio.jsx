import React, { useMemo } from "react";
import CustomTable from "../../components/customTable/CustomTable";
import { Box, Button, Typography, useTheme } from "@mui/material";
import {
  useGetUserInfo,
  useGetUserenPortfolio,
} from "../../hooks/portfolio/usePortfolio";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { data: userPorfolioData, isLoading } = useGetUserenPortfolio();
  const { data: userInfoData, isLoading: loading } = useGetUserInfo();

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
        header: "Close",
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
          <Typography variant="h6">Name: {userInfoData?.clientName}</Typography>
          <Typography variant="h6">980000000</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Market Value</Typography>
          <Typography variant="h6">+ 87422.00</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Today Change</Typography>
          <Typography variant="h6">+ 493.00</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Overall return</Typography>
          <Typography variant="h6">+ 50004.43</Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
          }}
        >
          {t("Export")}
        </Button>
      </Box>
      {!isLoading ? (
        <CustomTable
          title="Portfolio"
          columns={columns}
          data={userPorfolioData}
          isLoading={isLoading}
        />
      ) : (
        <Box
          sx={{
            width: "cover",
            height: "84px",
            backgroundColor: theme.palette.background.alt,
          }}
        />
      )}
    </>
  );
};

export default Portfolio;
