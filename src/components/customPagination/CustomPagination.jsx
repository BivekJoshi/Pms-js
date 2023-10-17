import React from 'react';
import { Pagination, Stack } from '@mui/material';

const CustomPagination = ({ activePage, pages, handleChangePage }) => {
  return (
    <Stack spacing={2}>
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
