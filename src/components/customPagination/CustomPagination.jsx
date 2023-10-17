import { Pagination, Stack } from '@mui/material';
import React from 'react';

const CustomPagination = ({ page, pages, handleChangePage }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        page={page + 1}
        onChange={(event, value) => handleChangePage(value - 1)}
      />
    </Stack>
  );
};

export default CustomPagination;
