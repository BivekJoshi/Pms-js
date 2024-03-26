import React, { useMemo, useState } from "react";
import CustomTable from "../../../../../components/customTable/CustomTable";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

const MarriedFamilyTable = ({ formik }) => {
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
  return (
    <Grid mt={4}>
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
