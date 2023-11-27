
import { lineData } from "../dashboard/dashBoardItems";
import { useTranslation } from "react-i18next";
import { Grid, useTheme } from "@mui/material";
import LineChartDash from "../../components/dashboardComponents/LineChart";

const AlertGraph = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid
      color={theme.palette.text.main}
      bgcolor={theme.palette.background.alt}
      sx={{
        borderRadius: "6px",
      }}
      id="chart"
    >
      <LineChartDash lineData={lineData} />
    </Grid>
  );
};

export default AlertGraph;
