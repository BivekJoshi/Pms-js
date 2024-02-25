import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import RenderInput from "../../../components/renderInput/RenderInput";

const StepTwo = () => {
  return (
    <div data-aos="fade-left">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Already have Trading Account?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Enter NEPSE Code"
        type="number"
        variant="outlined"
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Do you have DEMAT Account?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default StepTwo;
