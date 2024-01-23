import React, { useState } from "react";
import {
  RadioGroup,
  Box,
  Divider,
  FormControl,
  Grid,
  Typography,
  useTheme,
  FormControlLabel,
  Radio,
} from "@mui/material";

import BuyCalculator from "./BuyCalculator";
import SellCalculator from "./SellCalculator";

const BuySellCalculator = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState("buy");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.alt,
            padding: " 16px 32px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: theme.palette.text.light,
                  fontWeight: "800",
                }}
              >
                Share Calculator
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Transaction Type</Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="buy"
                      control={<Radio />}
                      label="Buy"
                    />
                    <FormControlLabel
                      value="sell"
                      control={<Radio />}
                      label="Sell"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <br />
              <Divider />
            </Grid>
          </Grid>
        </Box>
        <br />
        {selectedValue === "buy" ? <BuyCalculator /> : <SellCalculator />}
      </Box>
    </div>
  );
};

export default BuySellCalculator;
