import { Grid, useTheme } from '@mui/material'
import React from 'react'
import { useMemo } from 'react';
import CustomTable from '../../../../components/customTable/CustomTable';

const Report = () => {
  const theme = useTheme();
  const dataCourse = [
    {
      financialYear: "2077/2078",
      description: "Quarterly report for the 4th quarter",
      action: "22832909.00",
    },
    {
      financialYear: "2077/2078",
      description: "Quarterly report for the 4th quarter",
      action: "22832909.00",
    },
    {
      financialYear: "2077/2078",
      description: "Quarterly report for the 4th quarter",
      action: "22832909.00",
    },
  ];
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "financialYear",
        header: "Financial Year",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "description",
        header: "Description",
        size: 200,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "action",
        header: "Action",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <CustomTable
      title="Financial Reports"
      columns={columns}
      //   isLoading={isLoading}
      data={dataCourse}
      exportAsCSV
      exportAsPdf
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
      density="comfortable"
    />
  )
}

export default Report