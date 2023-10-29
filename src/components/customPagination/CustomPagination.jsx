import React from 'react';
import { Pagination, Stack, useTheme } from '@mui/material';

const CustomPagination = ({ activePage, pages, handleChangePage }) => {
  const theme = useTheme();

  return (
    <Stack
      spacing={2}
      bgcolor={theme.palette.background.alt}
      padding={'8px'}
      borderRadius={'6px'}
    >
      <Pagination
        variant='outlined'
        color='secondary'
        showFirstButton
        showLastButton
        defaultPage={1}
        page={activePage + 1}
        boundaryCount={2}
        count={pages}
        onChange={(event, value) => handleChangePage(value - 1)}
      />
    </Stack>
  );
};

export default CustomPagination;
