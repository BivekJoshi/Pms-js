import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import { previousFormPath } from "./userHelper";
import { t } from "i18next";

export const BackButtom = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={previousFormPath} variant="contained" color="secondary">
        {t("Back")}
      </Button>
    </Grid>
  );
};
