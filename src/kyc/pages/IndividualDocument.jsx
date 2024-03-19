import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo, useState } from "react";
import FormModal from "../../components/formModal/FormModal";
import CustomTable from "../../components/customTable/CustomTable";
import DocumentFieldDp from "../dp/forms/individual/DocumentIndividual/DocumentFieldDp";
import { useTranslation } from 'react-i18next';
import { useGetDocument } from '../../hooks/Kyc/DocumentUpload/useDocument';
import { DOC_URL } from '../../utility/getBaseUrl';
import ImageViewModal from '../../components/modal/ImageModal/ImageViewModal';

const IndividualDocument = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [imageData, setImageData] = useState({});
  const { data: documentData } = useGetDocument();

  const handleImageRow = (rowData) => {
    setImageData(rowData?.citizenshipBack)
    setIsImgModalOpen(rowData);
  }

  const handleNext = () => {
    navigate(nextFormPath(3));
    dispatch({ type: SET_FORM, payload: 3 });
  };
  const handleBack = () => {
    navigate(nextFormPath(1));
    dispatch({ type: SET_FORM, payload: 1 });
  }
  const columns = useMemo(
    () => [
      {
        id: 1,
        header: "S.N.",
        Cell: (cell) => {
          return cell?.row?.index + 1
        },
        size: 50,
        sortable: false,
      },
      // {
      //   id: 2,
      //   accessorKey: "documnetType",
      //   header: "Document Type",
      //   size: 100,
      //   sortable: false,
      // },
      // {
      //   id: 3,
      //   accessorKey: "documnetId",
      //   header: "Document ID",
      //   size: 170,
      //   sortable: false,
      // },
      // {
      //   id: 4,
      //   accessorKey: "issuedDistrict",
      //   header: "Issued District",
      //   size: 100,
      //   sortable: false,
      // },
      // {
      //   id: 5,
      //   accessorKey: "issueDatee",
      //   header: "Issued Date (A.D.)",
      //   size: 100,
      //   sortable: false,
      // },
      {
        id: 6,
        header: "File",
        Cell: (cell) => {
          const image = DOC_URL + (cell?.row?.original?.citizenshipBack)
          return (
            <>
              <img onClick={() => handleImageRow(cell.row.original)} width={100} src={image} alt="" />
            </>
          )
        },
        size: 160,
        sortable: false,
      },
      // {
      //   id: 7,
      //   accessorKey: "action",
      //   header: "Action",
      //   size: 100,
      //   sortable: false,
      // },
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
            {t('Document Upload')}
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
          {t("+ Add")}
        </Button>
      </Grid>
      <CustomTable
        title={t("Document Details")}
        columns={columns}
        data={[documentData]}
        headerBackgroundColor="#401686"
        overFlow={"scroll"}
      />
      <FormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width={800}
        header="Document Form"
        formComponent={
          <>
            <DocumentFieldDp />
          </>
        }
      />

      <Grid sx={{ display: "flex", justifyContent: "space-between", marginTop: '1rem' }}>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          {t("Back")}
        </Button>
        <Button
          onClick={handleNext}
          variant="contained"
          color="secondary"
        >
          {t("Next")}
        </Button>
      </Grid>
      <FormModal
        open={isImgModalOpen}
        onClose={() => setIsImgModalOpen(false)}
        width={700}
        formComponent={<ImageViewModal docUrl={DOC_URL} data={imageData} onClose={() => setIsImgModalOpen(false)} />}
      />
    </>
  );
};

export default IndividualDocument;
