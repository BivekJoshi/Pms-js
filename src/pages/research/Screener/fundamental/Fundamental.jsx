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
import NewFilter from "../../../../components/newFilter/NewFilter";

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

  const filterMenuItem = [
    {
      label: "PE",
      name: "pe",
      type: "dropDownId",
      dropDownData: selector,
      md: 4,
      sm: 12,
    },
    {
      label: "PB",
      name: "pe",
      type: "dropDownId",
      dropDownData: selector,
      md: 4,
      sm: 12,
    },
  ];

  const handleSearch = (formValues) => {
    const dateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const dateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;

    if (dateFrom && dateTo) {
      const updatedFormValues = {
        ...formValues,
        dateFrom,
        dateTo,
      };
      setParams(updatedFormValues);
      try {
        dispatch(
          fetchPaginatedTable(
            SHARE_TRANSACTION,
            updatedFormValues,
            null,
            "transactionNo"
          )
        );
        setTableShow(true);
      } catch (error) {
        toast.error(error);
      }
    }
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

      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        // validate={filterDateValidationSchema}
        // tradeDate={tradeDate}
        submitButtonText="Search"
      />
    </Box>
  );
};

export default Fundamental;
