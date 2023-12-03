import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { selector } from "./fundamentalData";

const Fundamental = () => {
  const theme = useTheme();
  const initialSelectedValues = {};

  selector.forEach((item) => {
    initialSelectedValues[item.id] = null;
  });

  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  const handleSectorChange = (id, newValue) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography
        variant="h6"
        sx={{
          background: theme.palette.background.alt,
          borderLeft: "3px solid #191F45",
          lineHeight: "3rem",
        }}
      >
        Fundamental Screener
      </Typography>

      <Grid
        container
        spacing={2}
        bgcolor={theme.palette.background.alt}
        margin={0}
        width={"100%"}
        p={2}
      >
        {selector.map((data) => (
          <Grid item key={data?.id} xs={12} sm={12} md={4} lg={4} xl={3}>
            <Typography variant="h6">{data?.title}</Typography>
            <Autocomplete
              value={selectedValues[data?.id]}
              onChange={(event, newValue) =>
                handleSectorChange(data?.id, newValue)
              }
              options={data?.dropdown}
              getOptionLabel={(option) => option?.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="--Select--"
                  variant="outlined"
                  autoFocus
                  InputLabelProps={{ shrink: true }}
                  required
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Fundamental;
