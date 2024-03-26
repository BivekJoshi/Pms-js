import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import { t } from "i18next";
import useKycNavigation from "../kyc/hooks/useKycNavigation";

export const BackButtom = () => {
  const { previousFormPath } = useKycNavigation();
  return (
    <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button onClick={previousFormPath} variant="contained" color="secondary">
        {t("Back")}
      </Button>
    </Grid>
  );
};
