import React from "react";
import {
  useGetListedCompanies,
  useGetWatchListName,
} from "../../hooks/watchList/useWatchList";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  Modal,
  TextField,
} from "@mui/material";

import WatchListMasterField from "../../form/formComponent/watchlist/WatchListMasterField";
import { useState } from "react";
import WatchTable from "./WatchTable";
import { useWatchListDetailForm } from "../../hooks/watchList/useWatchListForm/useWatchListDetailForm";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WatchList = () => {
  const [watchlist, setWatchList] = useState();
  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();

  const { data: listedCompanies } = useGetListedCompanies();
  const { formik } = useWatchListDetailForm(watchlist);

  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (formik.isValid) {
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }

  const symbols = symbolsArray.map((item) => item.symbol);

  // console.log(symbols);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button variant="contained" onClick={handleOpen}>
          Create New watchlist
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WatchListMasterField onClose={handleClose} />
        </Box>
      </Modal>

      <br />
      <Box
        sx={{
          display: "flex",
          width: "cover",
          height: "84px",
          backgroundColor: "#fff",
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          Watchlist:
          {!loadingname &&
            watchListName.map((name) => (
              <Chip
                label={name?.watchlistName}
                className="custom-chip"
                key={name?.id}
                style={{
                  backgroundColor:
                  watchlist === name?.id ? "#329EF4" : "#EBEBEB",
                  color: watchlist === name?.id ? "white" : "initial",
                }}
                onClick={() =>  setWatchList(name?.id)}
              />
            ))}
        </div>
        
        NEPSE CODE:
        <div style={{ width: '300px' }}>
          <Autocomplete
            id="script"
            name="script"
            options={symbols}
            value={symbols}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nepse Code"
                variant="outlined"
                error={
                  formik.touched.script &&
                  Boolean(formik.errors.script)
                }
                helperText={
                  formik.touched.script && formik.errors.script
                }
                autoFocus
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ width: "18px", height: "28px" }}
            onClick={handleFormSubmit}
          >
            +Add
          </Button>
        </div>
      </Box>
      <br />

      <WatchTable watchid={watchlist} />
    </div>
  );
};

export default WatchList;
