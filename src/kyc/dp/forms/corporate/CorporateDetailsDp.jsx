import React from "react";
import { CorporateField } from "../../../constant/DpConstant/DpConstant";
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";

const CorporateDetailsDp = () => {
  const [checkedOptions, setCheckedOptions] = React.useState({});

  // Function to handle change in the checked status of options
  const handleChange = (name) => (event) => {
    setCheckedOptions({
      ...checkedOptions,
      [name]: event.target.checked, // Update the checked status for the specific option
    });
  };
  return (
    <div style={{ paddingBottom: "250px", padding: "5rem" }}>
      <form>
        <Grid container spacing={2}>
          {CorporateField?.map((d, index) => {
            return (
              <Grid
                key={index}
                item
                xs={12}
                sm={d.type === "switch" ? 12 : d.engLabel && d.label ? 8 : 4}
              >
                {d.options ? (
                  <TextField
                    placeholder={d.placeholder}
                    label={d.label}
                    type={d.type}
                    id={d.name}
                    fullWidth
                    select
                  >
                    {d.options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : d.type === "switch" ? (
                  <>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={checkedOptions[d.name]}
                          onChange={handleChange(d.name)}
                          name={d.name}
                        />
                      }
                      label={d.label}
                    />
                    {console.log("Switch checked:", checkedOptions[d.name])}
                    {checkedOptions[d.name] && d.watchFor && (
                      <TextField
                        placeholder={d.placeholder}
                        label={d.label}
                        type={d.type}
                        required
                        fullWidth
                        id={d.name}
                        variant="outlined"
                        disabled={!checkedOptions[d.name]}
                      />
                    )}
                  </>
                ) : d.engLabel && d.label ? (
                  <Grid display="flex" gap={2}>
                    <TextField
                      placeholder={d.placeholder}
                      label={d.label}
                      type={d.type}
                      required
                      fullWidth
                      id={d.name + "_local"} // Unique id for the local TextField
                      variant="outlined"
                    />
                    <TextField
                      placeholder={d.engPlaceholder}
                      label={d.engLabel}
                      type={d.type}
                      required
                      fullWidth
                      id={d.name + "_eng"} // Unique id for the English TextField
                      variant="outlined"
                    />
                  </Grid>
                ) : (
                  <TextField
                    placeholder={d.placeholder}
                    label={d.label}
                    type={d.type}
                    required
                    fullWidth
                    id={d.name}
                    variant="outlined"
                    re
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </form>
    </div>
  );
};

export default CorporateDetailsDp;
