import React, { useMemo } from "react";
import CustomTable from "../../components/customTable/CustomTable";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import {
  useGetTransactionPortfolio,
  useGetUserenPortfolio,
} from "../../hooks/portfolio/usePortfolio";

const Portfolio = () => {
  const theme = useTheme();
  const { data: userPorfolioData, isLoading } = useGetUserenPortfolio();

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
      {/* <CButton
        title={'Add Portfolio'}
        color={theme.palette.text.main}
        bgcolor={theme.palette.background.btn}
        padding={'1rem'}
        textAlign={'center'}
        display={'flex'}
        flexDirextion={'row-reverse'}
        margin={'0.5rem 0rem'}
      /> */}

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
          <Typography variant="h6">Name: Sagar Pradhan</Typography>
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
          sx={{ backgroundColor: "#401686", color: "#fff" }}
        >
          Export
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
