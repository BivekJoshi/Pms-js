import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

const columns = [
  {
    accessorKey: 'name.firstName', //access nested data with dot notation
    header: 'First Name',
    size: 150,
  },
  {
    accessorKey: 'name.lastName',
    header: 'Last Name',
    size: 150,
  },
  {
    accessorKey: 'address', //normal accessorKey
    header: 'Address',
    size: 200,
  },
  {
    accessorKey: 'city',
    header: 'City',
    size: 150,
  },
  {
    accessorKey: 'state',
    header: 'State',
    size: 150,
  },
];

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const CustomTable = (props) => {
  const theme = useTheme();

  const getRowProps = (row, rowIndex) => {
    // Calculate background color based on rowIndex
    const backgroundColor =
      rowIndex % 2 === 0
        ? theme.palette.mode === 'light'
          ? '#f3f3f3' // Even rows in light mode
          : '#372c49' // Even rows in dark mode
        : theme.palette.mode === 'light'
        ? '#ffffff' // Odd rows in light mode
        : '#401686'; // Odd rows in dark mode

    return {
      style: {
        backgroundColor,
      },
    };
  };
  return (
    <MaterialReactTable
      columns={props?.columns ? props?.columns : columns}
      data={props?.data ? props?.data : data}
      isLoading={props?.isLoading}
      enableRowNumbers
      enableRowVirtualization
      headerTitle='My Table Title'
      enableStickyHeader
      initialState={{ density: props?.density ? props?.density : 'compact' }}
      enableColumnResizing={
        props?.enableColumnResizing ? props?.enableColumnResizing : true
      }
      enableColumnActions={
        props?.enableColumnActions ? props?.enableColumnActions : false
      }
      enableColumnFilters={
        props?.enableColumnFilters ? props?.enableColumnFilters : true
      }
      enableSorting={
        props?.enableColumnFilters ? props?.enableColumnFilters : true
      }
      enableBottomToolbar={
        props?.enableBottomToolbar ? props?.enableBottomToolbar : true
      }
      enableTopToolbar={
        props?.enableTopToolbar ? props?.enableTopToolbar : true
      }
      getRowProps={getRowProps}
      muiTableContainerProps={{
        sx: { maxHeight: props?.maxHeight ? props?.maxHeight : '600px' },
      }}
      muiTableHeadCellProps={{
        sx: {
          backgroundColor:
            theme?.palette?.mode === 'light' ? '#ffffff' : '#401686',
          color: theme?.palette?.mode === 'light' ? '#000' : '#fafafa',
        },
      }}
      renderTopToolbarCustomActions={() => (
        <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
          <Typography variant='h3'>{props?.title}</Typography>
          {props?.button1 && (
            <Button
              color='secondary'
              onClick={() => {
                alert('Create New Account');
              }}
              variant='contained'
            >
              {props?.button1}
            </Button>
          )}
          {props?.button2 && (
            <Button
              color='error'
              // disabled={!table.getIsSomeRowsSelected()}
              onClick={() => {
                alert('Delete Selected Accounts');
              }}
              variant='contained'
            >
              {props?.button2}
            </Button>
          )}
        </Box>
      )}
    />
  );
};

export default CustomTable;
