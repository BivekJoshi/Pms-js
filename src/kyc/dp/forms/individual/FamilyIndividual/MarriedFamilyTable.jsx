import React, { useMemo } from "react";
import CustomTable from "../../../../../components/customTable/CustomTable";

const MarriedFamilyTable = () => {
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
    <div>
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
    </div>
  );
};

export default MarriedFamilyTable;
