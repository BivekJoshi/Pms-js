import React, { useState } from "react";
import PageNotFound from "../../../PageNotFound/PageNotFound";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
const selector = [
  {
    id: 1,
    title: "PE",
    dropdown: [
      { id: 2, title: "Below 10" },
      { id: 3, title: "Below 20" },
      { id: 4, title: "Below 30" },
    ],
  },
  {
    id: 5,
    title: "PB",
    dropdown: [
      { id: 6, title: "Below 10" },
      { id: 7, title: "Below 20" },
      { id: 8, title: "Below 30" },
    ],
  },
  {
    id: 5,
    title: "ROE",
    dropdown: [
      { id: 6, title: "Below 10" },
      { id: 7, title: "Below 20" },
      { id: 8, title: "Below 30" },
    ],
  },
  {
    id: 5,
    title: "Dividentd Yield",
    dropdown: [
      { id: 6, title: "Below 10" },
      { id: 7, title: "Below 20" },
      { id: 8, title: "Below 30" },
    ],
  },
];
const Fundamental = () => {
  const theme = useTheme();
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorChange = (event, newValue) => {
    setSelectedSector(newValue);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={12} md={12}>
          <Typography
            variant="h6"
            sx={{
              background: theme.palette.background.alt,
              padding: "1rem",
              borderLeft: "3px solid #191F45",
            }}
          >
            Fundamental Screener
          </Typography>
        </Grid>
      </Grid>
      <Grid
        conatiner
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          background: theme.palette.background.alt,
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        {selector.map((data) => (
          <Grid item key={data?.id} xs={12} sm={12} md={4} lg={4} xl={3}>
            <Typography variant="h6">{data?.title}</Typography>
            <Autocomplete
              value={selectedSector}
              onChange={handleSectorChange}
              options={data?.dropdown}
              getOptionLabel={(option) => option?.title}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="--Any--"
                  variant="outlined"
                  autoFocus
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Fundamental;
