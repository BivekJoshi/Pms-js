import { TabContext, TabPanel } from '@mui/lab';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetListedCompanies } from '../../hooks/watchList/useWatchList';
import { useAlertForm } from './useAlertForm';
import { useGetLtp } from './useAlertPost';

const alertType = [
  {
    id: 'HIGHER_THAN',
    label: 'Price Rise',
  },
  {
    id: 'LOWER_THAN',
    label: 'Price Below',
  },
];
const deliveryMethods = [
  { id: 'notification', value: 'Push Notification' },
  { id: 'SMS', value: 'SMS' },
  { id: 'EMAIL', value: 'Email' },
];

const Alert = (props) => {
  const [activeTab, setactiveTab] = useState('1');
  const theme = useTheme();
  const handleChange = (event, newValue) => setactiveTab(newValue);
  const themeMode = useSelector((state) => state.theme?.mode);
  const { formik, handleClear } = useAlertForm();
  const { data: listedCompanies } = useGetListedCompanies();

  const btnStyle = {
    backgroundColor: themeMode === 'dark' ? '#fcfcfc' : '#6C49B4',
  };
  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols = symbolsArray.map((item) => {
    return { label: item.symbol, id: item.id };
  });
  const scriptName = symbols.find(
    (d) => d.id === formik.values?.companyId
  )?.label;

  const { data: getLtpData } = useGetLtp(scriptName);

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };
  const isSMSPresent = formik.values?.alertMethod?.includes('SMS');

  useEffect(() => {
    if (getLtpData) {
      formik.setFieldValue('ltp', getLtpData);
    }
  }, [getLtpData]); //eslint-disable-line
  return (
    <div>
      <TabContext value={activeTab}>
        <div style={{ padding: '16px' }}>
          <div
            style={{
              backgroundColor: theme.palette.background.alt,
              padding: '16px',
            }}
          >
            <Tabs onChange={handleChange} value={activeTab}>
              <Tab
                sx={{
                  borderRadius: '5px',
                  backgroundColor:
                    activeTab === '1' && btnStyle.backgroundColor,
                }}
                label='Create Alert'
                value='1'
              />
              <Tab
                sx={{
                  borderRadius: '5px',
                  backgroundColor:
                    activeTab === '2' && btnStyle.backgroundColor,
                }}
                label='Manage Alert'
                value='2'
              />
            </Tabs>
          </div>
        </div>
        <TabPanel value='1'>
          <div
            style={{
              backgroundColor: theme.palette.background.alt,
              padding: '16px 24px',
            }}
          >
            <div>
              {' '}
              <Typography
                variant='h5'
                style={{ color: theme.palette.text.light, fontWeight: '400' }}
              >
                Create New Alert
              </Typography>
            </div>

            <div style={{ display: 'flex', gap: '16px', padding: '24px 0px' }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Autocomplete
                    name='companyId'
                    options={symbols}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='Select a Company'
                        placeholder='Select a Company'
                        variant='outlined'
                        autoFocus
                        size='small'
                        InputLabelProps={{ shrink: true }}
                        onChange={formik.handleChange}
                        required
                        error={
                          formik.touched.companyId &&
                          Boolean(formik.errors.companyId)
                        }
                        helperText={
                          formik.touched.companyId && formik.errors.companyId
                        }
                      />
                    )}
                    onChange={(e, value) => {
                      formik?.setFieldValue('companyId', value?.id || ''); // Set the field value based on the selected option or an empty string if no option is selected
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <TextField
                    {...props}
                    sx={{
                      '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                        {
                          display: 'none',
                        },
                      '& input[type=number]': {
                        MozAppearance: 'textfield',
                      },
                    }}
                    type='number'
                    name='ltp'
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    size='small'
                    label='LTP'
                    onChange={(e, value) => {
                      console.log(e);
                      formik?.setFieldValue('ltp', value || ''); // Set the field value based on the selected option or an empty string if no option is selected
                    }}
                    disabled
                    value={getLtpData}
                    inputProps={{
                      inputMode: 'numeric',
                      min: 0,
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <Autocomplete
                    name='alertType'
                    getOptionLabel={(option) => option.label} // Specify how to display the option label
                    options={alertType}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='Select an Alert Type'
                        placeholder='Select alert type'
                        variant='outlined'
                        size='small'
                        InputLabelProps={{ shrink: true }}
                        required
                      />
                    )}
                    onChange={(e, value) => {
                      formik.setFieldValue('alertType', value ? value?.id : ''); // Set the field value based on the selected option
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={2}>
                  <TextField
                    {...props}
                    sx={{
                      '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                        {
                          display: 'none',
                        },
                      '& input[type=number]': {
                        MozAppearance: 'textfield',
                      },
                    }}
                    type='number'
                    name='triggerPrice'
                    InputLabelProps={{ shrink: true }}
                    variant='outlined'
                    size='small'
                    label='Enter Trigger Price'
                    placeholder='Enter Trigger Price'
                    onChange={formik.handleChange}
                    required
                    inputProps={{
                      inputMode: 'numeric',
                      min: 0,
                    }}
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={3} lg={2} className='d-flex '>
                  <FormControl component='fieldset'>
                    <label>Select Delivery Method</label>
                    <FormGroup>
                      {deliveryMethods.map((method) => (
                        <FormControlLabel
                          key={method.id}
                          label={method.value}
                          control={
                            <Checkbox
                              value={method.id}
                              name='alertMethod' // Name of the field in initialValues
                              checked={formik.values?.alertMethod?.includes(
                                method.id
                              )}
                              onChange={formik.handleChange}
                              disabled={
                                method.id === 'SMS' &&
                                method.id === 'notification'
                              }
                            />
                          }
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <Grid
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='flex-end'
            >
              <Button
                variant='contained'
                onClick={handleClear}
                sx={{ mt: 3, ml: 1 }}
                color='error'
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                type='submit'
                onClick={handleFormSubmit}
                sx={{
                  mt: 3,
                  ml: 1,
                  backgroundColor: '#6C49B4',
                  themeMode,
                  color: '#fcfcfc',
                }}
              >
                Create Alert
              </Button>
            </Grid>
            {isSMSPresent && (
              <Grid
                sx={{
                  padding: '10px',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}
              >
                Note :- In order to receive SMS notification, you must have
                subscribed to the SMS service.
              </Grid>
            )}
          </div>
        </TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
      </TabContext>
    </div>
  );
};

export default Alert;
