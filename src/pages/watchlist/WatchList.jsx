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
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import WatchListMasterField from "../../form/formComponent/watchlist/WatchListMasterField";
import { useState } from "react";
import WatchTable from "./WatchTable";
import { useWatchListDetailForm } from "../../hooks/watchList/useWatchListForm/useWatchListDetailForm";
import toast from "react-hot-toast";
import FormModal from "../../components/formModal/FormModal";

const WatchList = () => {
  const theme = useTheme();
  const [watchlist, setWatchList] = useState();
  const [open, setOpen] = useState(false);

  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();
  const { data: listedCompanies } = useGetListedCompanies();

  const { formik } = useWatchListDetailForm(watchlist);
  const [selectedSymbol, setSelectedSymbol] = useState(formik.values.script);

  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (!formik.isValid) {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols = symbolsArray.map((item) => ({
    symbol: item?.symbol,
    companyInfo: item?.companyInfo,
  }));

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            marginTop: "1rem",
          }}
        >
          Create New watchlist
        </Button>
      </Grid>

      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        formComponent={<WatchListMasterField onClose={() => setOpen(false)} />}
      />
      <br />
      <Box
        sx={{
          display: "flex",
          width: "cover",
          height: "84px",
          backgroundColor: theme.palette.background.alt,
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: ".3rem",
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: theme.palette.text.light,
              fontWeight: "800",
            }}
          >
            Watchlist:
          </Typography>
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
                  margin: "2px",
                }}
                onClick={() => setWatchList(name?.id)}
              />
            ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Typography
            variant="h6"
            style={{
              color: theme.palette.text.light,
            }}
          >
            NEPSE CODE:
          </Typography>
          <div style={{ width: "300px" }}>
            <Autocomplete
              name="script"
              options={symbols}
              value={selectedSymbol || formik?.values?.script}
              onChange={(event, newValue) => {
                if (newValue != null) {
                  formik.setFieldValue("script", newValue);
                  setSelectedSymbol(newValue);
                }
              }}
              getOptionLabel={(option) => option?.companyInfo || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Script"
                  variant="outlined"
                  error={formik.touched.script && Boolean(formik.errors.script)}
                  helperText={formik.touched.script && formik.errors.script}
                  autoFocus
                  size="small"
                  value={formik.values.script}
                />
              )}
            />
          </div>
        </div>

        <Button
          variant="contained"
          disabled={!watchlist}
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
          }}
          onClick={handleFormSubmit}
        >
          +Add
        </Button>
      </Box>
      <br />

      <WatchTable watchid={watchlist} />
    </div>
  );
};

export default WatchList;
