import { useTheme } from '@emotion/react';
import { Grid } from '@mui/material';
import { useMemo } from 'react';
import CustomTable from '../../../components/customTable/CustomTable';

const TopLoseers = () => {
    const theme = useTheme();
    const data = [
      { symbol: "NEPSE Index", tradedPrice: "2030.92", change: "18.96" },
      { symbol: "NEPSE Index", tradedPrice: "2037.92", change: "18.96" },
      { symbol: "NEPSE Index", tradedPrice: "2037.92", change: "18.96" },
      { symbol: "NEPSE Index", tradedPrice: "2037.92", change: "18.96" },
      { symbol: "NEPSE Index", tradedPrice: "2037.92", change: "18.96" },
    ];
    const columns = useMemo(
      () => [
        {
          id: 1,
          accessorKey: "symbol",
          header: "Symbol",
          size: 120,
          sortable: false,
        },
        {
          id: 2,
          accessorKey: "tradedPrice",
          header: "Last Traded Price",
          size: 100,
          sortable: false,
        },
        {
          id: 3,
          accessorKey: "change",
          header: "Change",
          size: 100,
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
        title="Top Losers"
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
        enableGlobalFilter={false}
        density="comfortable"
      />
    </Grid>
  )
}

export default TopLoseers