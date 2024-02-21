import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo, useState } from "react";
import FormModal from "../../components/formModal/FormModal";
import CustomTable from "../../components/customTable/CustomTable";
import DocumentFieldDp from "../dp/forms/individual/DocumentIndividual/DocumentFieldDp";

const IndividualDocument = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "documnetType",
        header: "Document Type",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "documnetId",
        header: "Document ID",
        size: 170,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "issuedDistrict",
        header: "Issued District",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "issueDatee",
        header: "Issued Date (A.D.)",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "issuedDate",
        header: "Issued Date (A.D.)",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "file",
        header: "File",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "action",
        header: "Action",
        size: 100,
        sortable: false,
      },
    ],
    []
  );

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
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            textTransform: "none",
            height: "42px",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          + Add
        </Button>
      </Grid>
      <CustomTable
        // title={t("Watchlist")}
        columns={columns}
        // data={watchListDataById?.data}
        // state={{
        //   isLoading: isLoading,
        //   showSkeletons: isLoading,
        // }}
        // isLoading={isLoading}
        // exportAsCSV
        // exportAsPdf
        headerBackgroundColor="#401686"
        // headerColor={theme.palette.text.alt}
        // enableColumnActions
        // enableDelete
        // enableEditing={true}
        // handleDelete={deleteRow}
        // handleNotification={notificationRoute}
        // delete
        // notification
      />
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // width={"calc(100vw-10rem)"}
        header="Document Form"
        formComponent={
          <>
            <DocumentFieldDp />
          </>
        }
      />
    </>
  );
};

export default IndividualDocument;
