import React, { useState } from "react";
import {
  Autocomplete,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SectorDetails from "./SectorDetails";
import DevlopmentPage from "../../DevlopmentPage/DevlopmentPage";

const sector = [
  { id: 1, label: "Hydro" },
  { id: 2, label: "Manufacturing" },
  { id: 3, label: "Commercial Banks" },
  { id: 4, label: "Hotel & Tourism" },
  { id: 5, label: "Non-Life Insurance" },
  { id: 6, label: "Investment" },
  { id: 7, label: "Development Bank Limited" },
  { id: 8, label: "Life Insurance" },
];

const Sectors = () => {
  const theme = useTheme();
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorChange = (event, newValue) => {
    setSelectedSector(newValue);
  };

  return (
    <>
      <Grid
        p={2}
        my={2}
        sx={{
          background: theme.palette.background.alt,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Choose Sectors</Typography>
        <Autocomplete
          value={selectedSector}
          onChange={handleSectorChange}
          options={sector}
          getOptionLabel={(option) => option?.label}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Choose Sector"
              variant="outlined"
              autoFocus
              size="small"
              InputLabelProps={{ shrink: true }}
              required
            />
          )}
        />
      </Grid>
      

      {/* {selectedSector && <SectorDetails />} */}
      {selectedSector && <DevlopmentPage />}
    </>
  );
};

export default Sectors;
