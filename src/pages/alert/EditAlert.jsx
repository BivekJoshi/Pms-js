import React from "react";
import { Autocomplete, TextField } from "@mui/material";
const alertType = [
  {
    id: "HIGHER_THAN",
    label: "Price Rise",
  },
  {
    id: "LOWER_THAN",
    label: "Price Below",
  },
];
const EditAlert = ({ cell, row, column, updateData, type }) => {
  const handleAutocompleteChange = (event, newValue) => {
    updateData(row.index, column.id, newValue.id); // Update the value in your table data
  };
  const rendercustomeEdit = () => {
    switch (type) {
      case "alertType":
        return (
          <Autocomplete
            options={alertType}
            getOptionLabel={(option) => option.label}
            onChange={handleAutocompleteChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select an Alert Type"
                placeholder="Select alert type"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        );
      default:
        break;
    }
  };
  return <>{rendercustomeEdit()}</>;
};

export default EditAlert;
