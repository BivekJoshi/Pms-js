import {
  Box,
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useBonusForm } from "../../../form/calculator/bonus/useBonusForm";
import CustomBox from "../CustomBox";

const BonusShareCalulator = () => {
  const theme = useTheme();
  const { formik } = useBonusForm();
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData(
      "Market Price (Before Book Closure)",
      formik?.values?.marketPrice
    ),
    createData("% of Bonus Share", formik?.values?.bonusShare),
    createData(
      "Market Price after Right Adjustment",
      formik?.values?.adjustedPrice
    ),
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box>
        <CustomBox
          title="Bonus Share Adjustment Calculator"
          body={
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Typography variant="h6">
                  Market Price (Before Book Closure)
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="marketPrice"
                  name="marketPrice"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.marketPrice}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.marketPrice &&
                    Boolean(formik.errors.marketPrice)
                  }
                  helperText={
                    formik.touched.marketPrice && formik.errors.marketPrice
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">% of Bonus Share</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="bonusShare"
                  name="bonusShare"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.bonusShare}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.bonusShare &&
                    Boolean(formik.errors.bonusShare)
                  }
                  helperText={
                    formik.touched.bonusShare && formik.errors.bonusShare
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                margin={"16px 0px"}
              >
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => formik.handleSubmit()}
                  sx={{
                    backgroundColor: theme.palette.background.btn,
                    color: theme.palette.text.alt,
                    textTransform: "none",
                  }}
                >
                  Calculate
                </Button>
                <Button
                  variant="contained"
                  sx={{ ml: 1, textTransform: "none" }}
                  color="error"
                  onClick={() => formik.resetForm()}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          }
        />
        <br />
        <CustomBox
          title="Details :"
          body={
            <TableContainer borderRadius="4px 0">
              <Table aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.heading}>
                      <TableCell>{row.heading}</TableCell>
                      <TableCell>{row.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          }
        />
      </Box>
    </div>
  );
};

export default BonusShareCalulator;
