import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormModal from "../../components/formModal/FormModal";

const IndividualDocument = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <Box
          sx={{
            marginBottom: "16px",
            padding: { md: "12px", sm: "5px" },
            borderLeft: `4px solid ${theme.palette.background.btn}`,
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: theme.palette.text.light,
              fontWeight: "800",
            }}
          >
            Document Upload
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          + Add
        </Button>
      </Grid>
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width={1400}
        formComponent={
          <>
            {/* <BillDetail rowData={selectedRowData} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                onClick={() => {
                  setIsModalOpen(false);
                }}
                sx={{ mt: 3, ml: 1, textTransform: "none" }}
                color="error"
              >
                {t("Close")}
              </Button>
            </Box> */}
            <p>cnjdsncksdc</p>
          </>
        }
      />
    </>
  );
};

export default IndividualDocument;
