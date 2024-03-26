import React, { useEffect, useState, useMemo } from "react"
import {
  Grid,
  Button,
  useTheme,
  Typography,
  Switch,
  IconButton,
} from "@mui/material"
import RenderInput from "../../../../../components/renderInput/RenderInput"
import { useKycBankForm } from "./usekycBankForm"
import { Box } from "@mui/system"
import CustomTable from "../../../../../components/customTable/CustomTable"
import {
  useDeleteKycBank,
  useGetBankList,
  useGetKycBank,
  useUpdateKycBank,
} from "../../../../../hooks/Kyc/individual/kycBank/useKycBank"
import { Delete } from "@mui/icons-material"
import DeleteConfirmationModal from "../../../../../components/modal/DeleteModal/DeleteConfirmationModal"
import { useDispatch } from "react-redux"
import { SET_FORM } from "../../../../../redux/types/types"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import useKycNavigation from "../../../../hooks/useKycNavigation"

const BankIndividualDpForms = () => {
  const { t } = useTranslation();
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const theme = useTheme()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { nextFormPath, previousFormPath } = useKycNavigation();

  const { data: bankListData } = useGetBankList()
  const { data: bankData } = useGetKycBank()
  const bankDataField = bankData && bankData?.data
  const { formik } = useKycBankForm(bankDataField)
  const [deletedKycBank, setDeletedKycBank] = useState({})

  const BANKFIELDS = [
    {
      type: "asyncDropDown",
      name: "bankName",
      label: "Bank Name",
      required: true,
      responseLabel: "name",
      responseId: "code",
      path: "/utility/bank-master",
      isNeutral: true,
      xs: 12,
      sm: 6,
      md: 3,
    },
    {
      type: "text",
      name: "accountNumber",
      label: "Account Number",
      required: true,
      xs: 12,
      sm: 6,
      md: 3,
    },
    {
      type: "dropDown",
      name: "accountType",
      label: "Account Type",
      required: true,
      xs: 12,
      sm: 6,
      md: 3,
      options: [
        {
          value: "S",
          label: "Saving",
        },
        {
          value: "C",
          label: "Current",
        },
      ],
    },
    {
      type: "text",
      name: "branchAddress",
      label: "Branch Name",
      required: true,
      xs: 12,
      sm: 6,
      md: 3,
    },
  ]

  const columns = useMemo(
    () => [
      {
        id: 1,
        Cell: (cell) => {
          return cell?.row?.index + 1
        },
        header: "SN",
        size: 50,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "bankName",
        header: "Bank Name",
        accessorFn: (row) => {
          const bankName = bankListData?.data?.find(
            (code) => code?.code === row?.bankName
          )
          return <>{bankName?.name}</>
        },
        size: 170,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "accountType",
        accessorFn: (row) => {
          return <>{row?.accountType === "S" ? "Saving" : "Current"}</>
        },
        header: "Account Type",
        size: 100,
        sortable: false,
      },

      {
        id: 4,
        accessorKey: "branchAddress",
        header: "Branch",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "accountNumber",
        header: "Account Number",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "primary",
        header: "Primary",
        accessorFn: (row) => (
          <Switch
            checked={row.isPrimary}
            onChange={() => handlePrimarySwitch(row)}
          />
        ),
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "action",
        header: "Action",
        size: 100,
        sortable: false,
        Cell: (cell) => (
          <IconButton
            color="error"
            onClick={() => handleDeleteRow(cell.row.original)}
          >
            <Delete />
          </IconButton>
        ),
      },
    ],
    []
  )

  const handleCloseDeleteModal = () => setOpenDeleteModal(false)

  const { deleteKycBankMutation, isSuccess: isDeleteSuccess } =
    useDeleteKycBank({})

  const handleDeleteRow = (rowData) => {
    setDeletedKycBank(rowData)
    setOpenDeleteModal(true)
  }

  useEffect(() => {
    if (isDeleteSuccess) {
      setOpenDeleteModal(false)
    }
  }, [isDeleteSuccess])

  const handleConfirmDelete = () => {
    deleteKycBankMutation(deletedKycBank?.id)
  }

  const handleNext = () => {
    navigate(nextFormPath());
    dispatch({ type: SET_FORM, payload: 6 });
  };
  const handleBack = () => {
    navigate(previousFormPath());
    dispatch({ type: SET_FORM, payload: 4 });
  }

  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderRadius: "0 6px 6px 0",
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          {t("Bank Details")}
        </Typography>
      </Box>
      <RenderInput inputField={BANKFIELDS} formik={formik} />
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}
      >
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
          sx={{ borderRadius: "20px", paddingInline: 2 }}
        >
          {t("+ Add")}
        </Button>
      </Grid>
      <Grid marginBlock={2}>
        <CustomTable
          title={t("List of Bank")}
          columns={columns}
          data={bankDataField}
          handleDeleteRow={handleDeleteRow}
          headerBackgroundColor="#401686"
        />
      </Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}
      >
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          {t("Back")}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNext}
        >
          {t("Next")}
        </Button>
      </Grid>

      {openDeleteModal && (
        <DeleteConfirmationModal
          open={openDeleteModal}
          handleCloseModal={handleCloseDeleteModal}
          handleConfirmDelete={handleConfirmDelete}
          message={"Bank data"}
        />
      )}
    </div>
  )
}

export default BankIndividualDpForms
