import React from 'react';
import CustomTable from '../../../components/customTable/CustomTable';
import { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { Grid } from '@mui/material';

const SelectorPerformance = () => {
  const theme = useTheme();
  const data = [
    { index: 'NEPSE Index', points: '2037.92', pointChange: '18.96' },
    { index: 'NEPSE Index', points: '2037.92', pointChange: '18.96' },
    { index: 'NEPSE Index', points: '2037.92', pointChange: '18.96' },
    { index: 'NEPSE Index', points: '2037.92', pointChange: '18.96' },
    { index: 'NEPSE Index', points: '2037.92', pointChange: '18.96' },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: 'index',
        header: 'Index',
        size: 150,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: 'points',
        header: 'Points',
        size: 100,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: 'pointChange',
        header: 'Point Change',
        size: 120,
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
      borderRadius={'6px'}
      padding={2}
      color="ffff"
    >
      <CustomTable
        title=' Market Index'
        columns={columns}
        //   isLoading={isLoading}
        data={data}
        //   pageSize={pageSize}
        //   onRowClick={handleRowClick}
        headerBackgroundColor='c'
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
        density='comfortable'
      />
    </Grid>
  );
};

export default SelectorPerformance;
