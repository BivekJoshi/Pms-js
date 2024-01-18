import React from 'react';
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import { useBuySellForm } from '../../../form/calculator/buySell/useBuySellForm';

const BuyCalculator = () => {
  const { formik } = useBuySellForm();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id='shareQty'
            name='shareQty'
            label='Share Quantity'
            type='number'
            variant='filled'
            sx={{ width: '100%' }}
            required
            value={formik.values.shareQty}
            onChange={(e) => {
              const inputValue = e.target.value;
              const numericValue = Number(inputValue);

              if (!isNaN(numericValue) && numericValue <= 100000) {
                formik.handleChange(e);
              }
            }}
            error={formik.touched.shareQty && Boolean(formik.errors.shareQty)}
            helperText={formik.touched.shareQty && formik.errors.shareQty}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='buyPrice'
            name='buyPrice'
            label='Buy Price'
            type='number'
            variant='filled'
            sx={{ width: '100%' }}
            required
            onChange={(e) => {
              const inputValue = e.target.value;
              const numericValue = Number(inputValue);

              if (!isNaN(numericValue) && numericValue <= 100000) {
                formik.handleChange(e);
              }
            }}
            value={formik.values.buyPrice}
            error={formik.touched.buyPrice && Boolean(formik.errors.buyPrice)}
            helperText={formik.touched.buyPrice && formik.errors.buyPrice}
          />
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='flex-end'
          marginTop={'16px'}
        >
          <Button
            variant='contained'
            type='submit'
            onClick={() => formik.handleSubmit()}
            sx={{ ml: 1, textTransform: 'none' }}
            color='success'
          >
            Submit
          </Button>
          <Button
            variant='contained'
            sx={{ ml: 1, textTransform: 'none' }}
            color='error'
            onClick={() => formik.resetForm()}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
      <div>
        <Table>
          <TableBody>
            {Object.entries(formik.values).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default BuyCalculator;
