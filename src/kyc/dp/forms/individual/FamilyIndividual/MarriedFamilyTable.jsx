import React, { useMemo, useState } from "react";
import CustomTable from "../../../../../components/customTable/CustomTable";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { useMarriedForm } from "./useMarriedForm";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Grid } from "@mui/material";
import { useTranslation } from 'react-i18next';

const MarriedCase = [
  {
    name: "isMarried",
    label: "Are You Married?",
    type: "switchWithFields",
    id: nanoid(),
    sm: 12,
    display: "flex",
    direction: "column",
    align: "start",
    newFields: [
      {
        name: "relation",
        label: "Relation",
        type: "dropDown",
        options: [
          { id: 1, value: "spouse", label: "Spouse" },
          { id: 2, value: "father-in-law", label: "Father In Law's " },
          { id: 3, value: "mother-in-law", label: "Mother In Law's" },
          { id: 4, value: "son", label: "Son" },
          { id: 5, value: "daughter-in-law", label: "Daughter In Law's " },
          { id: 6, value: "daughter", label: "Daughter" },
        ],
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "fname",
        label: "First Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "mname",
        label: "Middle Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
      {
        name: "lname",
        label: "Last Name",
        type: "text",
        id: nanoid(),
        md: 3,
        sm: 12,
      },
    ],
  },
];
const MarriedFamilyTable = () => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "relation",
        header: "Relation",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "name",
        header: "Name",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  const { formik } = useMarriedForm();
  const handleAddAndClear = () => {
    formik.handleSubmit(); // Submit form
    // formik.resetForm(); // Clear fields
  };
  const handleClear = () => {
    formik.setValues({
      ...formik.values,
      relation: "",
      fname: "",
      mname: "",
      lname: "",
    });
  };
  return (
    <Grid display="flex" gap={4} flexDirection="column">
      <div>
        <RenderInput inputField={MarriedCase} formik={formik} />
        {formik.values.isMarried && (
          <Grid
            display="flex"
            gap={2}
            flexDirection="row"
            justifyContent="end"
            mt={2}
          >
<<<<<<< HEAD
            <Button
              onClick={handleAddAndClear}
              variant="outlined"
              color="secondary"
            >
              + Add
            </Button>
            <Button
              onClick={handleClear}
              variant="outlined"
              style={{ color: "red", border: "1px solid red" }}
            >
              Clear
            </Button>
          </Grid>
        )}
=======
            {t("+ Add")}
          </Button>
          <Button
            onClick={handleClear}
            variant="outlined"
            style={{ color: "red", border: "1px solid red" }}
          >
            {t("Clear")}
          </Button>
        </Grid>
>>>>>>> f976f4fa19bf447d446fc8454e955d25084ffb94
      </div>

      {formik.values.isMarried && (
        <CustomTable
          title=""
          columns={columns}
          enablePagination={false}
          enableColumnResizing={false}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          enableDelete
          enableEditing={true}
        />
      )}
    </Grid>
  );
};

export default MarriedFamilyTable;
