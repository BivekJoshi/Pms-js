import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormModal from "../../components/formModal/FormModal";
import Dropzone from "react-dropzone";
import DropZoneUploadFile from "../../components/dropZone/DropZoneUploadFile";

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
        header="Document Form"
        formComponent={
          <>
            <Grid container>
              <Grid item xs={6}>
                <DropZoneUploadFile title="Front Side" />
              </Grid>
              <Grid item xs={6}>
                <DropZoneUploadFile title="Back Side" />
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
};

export default IndividualDocument;
