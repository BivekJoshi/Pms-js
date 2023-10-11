import { Field, Form, Formik } from 'formik';
import React from 'react';
import CustomDatePicker from '../customDatePicker/CustomDatePicker';
import { Button, Grid, TextField } from '@mui/material';

const NewFilter = ({ inputField, searchCallBack }) => {
  return (
    <div>
      <Formik
        initialValues={{
          dateFrom: '',
          dateTo: '',
        }}
        onSubmit={(values) => {
          searchCallBack(values);
        }}
      >
        <Form>
          <Grid container spacing={2} alignItems={'center'}>
            {inputField?.map((element, index) => {
              return (
                <Grid item sm={element?.sm} md={element?.md} key={index}>
                  {element?.type === 'date-picker' ? (
                    <CustomDatePicker
                      name={element?.name}
                      label={element?.label}
                    />
                  ) : (
                    <TextField name={element?.name} label={element?.label} />
                  )}
                </Grid>
              );
            })}
            <Grid item sm={3}>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default NewFilter;
