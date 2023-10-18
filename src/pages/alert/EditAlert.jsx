import React from 'react';
import { Autocomplete, MenuItem, Select, TextField } from '@mui/material';
import InputType from '../../components/inputType/InputType';
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
const EditAlert = ({ cell, row, column, updateData, type }) => {
  const handleAutocompleteChange = (event, newValue) => {
    console.log(
      '🚀 ~ file: EditAlert.jsx:16 ~ handleAutocompleteChange ~ newValue:',
      newValue
    );
    console.log(
      '🚀 ~ file: EditAlert.jsx:16 ~ handleAutocompleteChange ~ event:',
      event
    );
    updateData(row.index, column.id, newValue.id); // Update the value in your table data
  };
  const rendercustomeEdit = () => {
    switch (type) {
      case 'alertType':
        return (
          // <Autocomplete
          //   options={alertType}

          //   getOptionLabel={(option) => option.label}
          //   onChange={handleAutocompleteChange}
          //   renderInput={(params) => (
          //     <TextField
          //       {...params}
          //       variant='outlined'
          //       label='Select an Alert Type'
          //       placeholder='Select alert type'
          //       size='small'
          //       InputLabelProps={{ shrink: true }}
          //     />
          //   )}
          // />
          <Select
            sx={{ width: '200px' }}
            // label={label}
            name={alertType}
            // value={row?.original?.alertType}
            onChange={handleAutocompleteChange}
            // required={required}
          >
            {alertType.map((option) => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.label}
              </MenuItem>
            ))}
          </Select>
        );
      default:
        break;
    }
  };
  return <>{rendercustomeEdit()}</>;
};

export default EditAlert;
