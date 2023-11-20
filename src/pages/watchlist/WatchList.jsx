import React, { useEffect } from "react";
import {
  useGetListedCompanies,
  useGetWatchListName,
} from "../../hooks/watchList/useWatchList";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import WatchListMasterField from "../../form/formComponent/watchlist/WatchListMasterField";
import { useState } from "react";
import WatchTable from "./WatchTable";
import { useWatchListDetailForm } from "../../hooks/watchList/useWatchListForm/useWatchListDetailForm";
import toast from "react-hot-toast";
import FormModal from "../../components/formModal/FormModal";
import { MoreVert } from "@mui/icons-material";
import WatchListModal from "./WatchListModal";
import { useTranslation } from "react-i18next";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const WatchList = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();

  const [watchlist, setWatchList] = useState();
  const [open, setOpen] = useState(false);
  const [watchListModal, setWatchListModal] = useState(null);
  const [watchListDetail, setWatchListDetail] = React.useState({
    name: "",
    id: "",
  });

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
  const symbols =
    symbolsArray.map((item) => ({
      symbol: item?.symbol,
      companyInfo: item?.companyInfo,
    })) || [];

  console.log(
    "🚀 ~ file: WatchList.jsx:69 ~ useEffect ~ watchListName:",
    watchlist
  );
  useEffect(() => {
    if (!loadingname && watchListName?.length > 0 && watchlist) {
      setWatchList(watchListName[0]?.id);
    }
  }, [loadingname, watchListName]);

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
            textTransform: "none",
          }}
        >
          {t("Create New watchlist")}
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
          backgroundColor: theme.palette.background.alt,
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
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
            {t("Watchlist")} :
          </Typography>
          {!loadingname &&
            watchListName?.map((name) => (
              <div
                onClick={() => setWatchList(name?.id)}
                key={name?.id}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  borderRadius: "100px",
                  position: "relative",
                  padding: "3px 6px",
                  backgroundColor:
                    watchlist === name?.id ? "#329EF4" : "#EBEBEB",
                  color: watchlist === name?.id ? "white" : "initial",
                }}
              >
                {name?.watchlistName}
                <span>
                  <MoreVert
                    sx={{ marginTop: "25%" }}
                    onClick={(e) => {
                      setWatchListModal(e.currentTarget);
                      setWatchListDetail({
                        name: name.watchlistName,
                        id: name?.id,
                      });
                    }}
                  />
                </span>
              </div>
            ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" ,flexWrap: "wrap",}}>
          <Typography
            variant="h6"
            style={{
              color: theme.palette.text.light,
            }}
          >
            {t("NEPSE CODE")} :
          </Typography>
          <Box component="form">
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={symbols}
              value={selectedSymbol || []}
              isOptionEqualToValue={(option, value) =>
                option.symbol === value.symbol
              }
              onChange={(event, newValue) => {
                if (newValue != null) {
                  const multiScript = newValue.map((d) => d.symbol);
                  console.log(multiScript);
                  formik.setFieldValue("script", multiScript);
                  setSelectedSymbol(newValue);
                }
              }}
              getOptionLabel={(option) => option.symbol}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.symbol}
                </li>
              )}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Script"
                  error={formik.touched.script && Boolean(formik.errors.script)}
                  helperText={formik.touched.script && formik.errors.script}
                  autoFocus
                  size="small"
                  value={formik.values.script}
                  // sx={{width:'auto'}}
                />
              )}
            />
          </Box>
        </div>

        <Button
          variant="contained"
          disabled={!watchlist}
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            textTransform: "none",
            marginTop:".2rem"
          }}
          onClick={handleFormSubmit}
        >
          + {t("Add")}
        </Button>
      </Box>
      <br />
      <WatchTable watchid={watchlist} />
      {watchListModal && (
        <WatchListModal
          open={watchListModal}
          handleClose={() => {
            setWatchListModal(null);
            setWatchList({ name: "", id: "" });
          }}
          watchListDetail={watchListDetail}
        />
      )}
    </div>
  );
};

export default WatchList;
