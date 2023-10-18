import React from 'react';
import { Formik, Form, Field } from 'formik';
import CustomDatePicker from '../components/customDatePicker/CustomDatePicker';
import { getAccountTransaction } from '../api/accountTransaction/accountTransaction-api';

const UserTransactionTable = () => {
  return (
    <Formik
      initialValues={{
        dateFrom: '',
        dateTo: '',
      }}
      onSubmit={async (values) => {
        const epochDateFrom = values.dateFrom
          ? new Date(values.dateFrom).getTime() / 1000
          : null;
        const epochDateTo = values.dateTo
          ? new Date(values.dateTo).getTime() / 1000
          : null;

        // Use async/await for data retrieval
        try {
          const data = await getAccountTransaction(epochDateFrom, epochDateTo);
          console.log('Data Retrieved:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      }}
    >
      <Form>
        <CustomDatePicker name='dateFrom' label='Date From' />
        <CustomDatePicker name='dateTo' label='Date To' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default UserTransactionTable;
