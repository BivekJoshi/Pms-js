import React from 'react';
import { useMemo } from 'react';
import { useGetWatchListDataById } from '../../hooks/watchList/useWatchList';
import CustomTable from '../../components/customTable/CustomTable';
import { Box, useTheme } from '@mui/material';

const WatchTable = (watchid) => {
  const id = watchid.watchid;
  const { data: watchListDataById, isLoading } = useGetWatchListDataById(id);

  const theme = useTheme();

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'symbol',
        header: 'Symbol',
        size: 100,
        sortable: false,
      },
   
      {
        id: 3,
        accessorKey: 'open',
        header: 'Open (Rs)',
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: 'close',
        header: 'Close (Rs)',
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: 'ltp',
        header: 'LTP',
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: 'volume',
        header: 'Volume',
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: 'high',
        header: 'High (Rs)',
        size: 100,
        sortable: false,
      },
      {
        id: 8,
        accessorKey: 'low',
        header: 'Low (rs)',
        size: 100,
        sortable: false,
      },
      {
        id: 9,
        accessorKey: 'change',
        header: 'Change (Rs)',
        size: 120,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'change',
        header: 'Change Percent (%)',
        size: 170,
        sortable: false,
      },
      {
        id: 10,
        accessorKey: 'c',
        header: 'Action',
        size: 60,
        sortable: false,
      },
    ],
    []
  );
  return (
    <div>
      {!isLoading && watchListDataById && watchListDataById.data ? (
        <CustomTable
          title='Watch List'
          columns={columns}
          data={watchListDataById?.data}
          isLoading={isLoading}
        />
      ) : (
        <Box
          sx={{
            width: 'cover',
            height: '84px',
            backgroundColor: theme.palette.background.alt,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          No Script Found
        </Box>
      )}
    </div>
  );
};

export default WatchTable;
