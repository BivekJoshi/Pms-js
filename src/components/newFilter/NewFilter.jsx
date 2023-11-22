import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import CustomDatePicker from '../customDatePicker/CustomDatePicker';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Autocomplete,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import InputType from '../inputType/InputType';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';

const NewFilter = ({ inputField, searchCallBack, validate, tradeDate ,showfilter}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState(showfilter !== undefined ? showfilter : true);
  
  const initialValues = inputField.reduce((acc, item) => {
    acc[item.name] = '';
    return acc;
  }, {});

  const getComponentToRender = (element, setFieldValue) => {
    switch (element?.type) {
      case 'date-picker':
        return (
          <CustomDatePicker
            name={element?.name}
            label={element?.label}
            min={element?.min}
            max={element?.max}
            required={element?.required}
          />
        );
      case 'input-type':
        return (
          <InputType
            name={element?.name}
            label={element?.label}
            min={element?.min}
            max={element?.max}
            required={element?.required}
          />
        );
      case 'labelAutoComplete':
        return (
          <Autocomplete
            name={element?.name}
            getOptionLabel={(option) => option.label}
            options={element?.options}
            renderInput={(params) => (
              <TextField
                {...params}
                label={element?.label}
                name={element?.name}
                placeholder={element?.placeholder}
              />
            )}
            onChange={(e, value) => setFieldValue(element?.name, value?.label)}
          />
        );
      case 'dropDownId':
        return (
          <>
            <FormControl fullWidth>
              <InputLabel>{element.label}</InputLabel>
              <Field as={Select} name={element?.name} label={element.label}>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {element?.dropDownData?.map((d, index) => (
                  <MenuItem key={d + index} value={d.id}>
                    {d.label}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </>
        );
      default:
        return <TextField name={element?.name} label={element?.label} />;
    }
  };
  return (
    <>
      <Box
        // data-aos='fade-up'
        bgcolor={theme.palette.background.alt}
        color={theme.palette.text.main}
        sx={{
          marginBottom: '16px',
          padding: ' 16px',
          borderRadius: '6px',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            justifyContent: tradeDate ? 'space-between' : 'flex-end',
            alignItems: 'center',
          }}
        >
          {tradeDate && (
            <div>
              Last Trade Date: <b>{tradeDate}</b>
            </div>
          )}
          <div
            className='filterButton'
            onClick={() => setShowFilter(!showFilter)}
          >
            <Typography
              sx={{ color: theme.palette.text.light, fontWeight: 700 }}
            >
              {t('Filter')}
            </Typography>
            {!showFilter ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
                  fill={theme.palette.mode === 'dark' ? 'white' : 'black'}
                />
              </svg>
            ) : (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 8.25C9 8.44891 9.07902 8.63968 9.21967 8.78033C9.36032 8.92098 9.55109 9 9.75 9H14.25C14.4489 9 14.6397 8.92098 14.7803 8.78033C14.921 8.63968 15 8.44891 15 8.25C15 8.05109 14.921 7.86032 14.7803 7.71967C14.6397 7.57902 14.4489 7.5 14.25 7.5H9.75C9.55109 7.5 9.36032 7.57902 9.21967 7.71967C9.07902 7.86032 9 8.05109 9 8.25ZM6 12.75C6 12.9489 6.07902 13.1397 6.21967 13.2803C6.36032 13.421 6.55109 13.5 6.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 12.079 6.21967 12.2197C6.07902 12.3603 6 12.5511 6 12.75ZM3 17.25C3 17.4489 3.07902 17.6397 3.21967 17.7803C3.36032 17.921 3.55109 18 3.75 18H20.25C20.4489 18 20.6397 17.921 20.7803 17.7803C20.921 17.6397 21 17.4489 21 17.25C21 17.0511 20.921 16.8603 20.7803 16.7197C20.6397 16.579 20.4489 16.5 20.25 16.5H3.75C3.55109 16.5 3.36032 16.579 3.21967 16.7197C3.07902 16.8603 3 17.0511 3 17.25Z'
                  fill={theme.palette.mode === 'dark' ? 'white' : 'black'}
                />
              </svg>
            )}
          </div>
        </Grid>

        {showFilter && (
          <div style={{ paddingTop: '16px' }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={(values) => {
                searchCallBack(values);
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Grid container spacing={2} alignItems={'center'}>
                    {inputField?.map((element, index) => {
                      return (
                        <Grid
                          item
                          sm={element?.sm}
                          xs={element?.xs || element?.sm}
                          md={element?.md}
                          key={index}
                        >
                          {getComponentToRender(element, setFieldValue)}
                        </Grid>
                      );
                    })}
                  </Grid>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      type='submit'
                      variant='contained'
                      startIcon={<SearchIcon />}
                      sx={{
                        mt: 2,
                        backgroundColor: theme.palette.background.btn,
                        color: theme.palette.text.alt,
                        textTransform:"none"
                      }}
                    >
                      {t('Search')}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Box>
    </>
  );
};

export default NewFilter;
