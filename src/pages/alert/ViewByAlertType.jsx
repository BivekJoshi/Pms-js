import React from "react";
import CustomTable from "../../components/customTable/CustomTable";

const ViewByAlertType = () => {
  return (
    <CustomTable
      key={d.companyId} // Add a unique key for each CustomTable
      title={companyName}
      enableColumnActions
      columns={columns}
      isLoading={true}
      exportAsCSV
      exportAsPdf
      enableEditing={true}
      state={{
        isLoading: isLoading,
        showSkeletons: isLoading,
      }}
      editingMode="modal"
      enableEdit
      enableDelete
      data={d.stockAlertResponses}
      handleDelete={deleteRow}
      handleUpdate={handleUpdate}
      edit
      delete
    />
  );
};

export default ViewByAlertType;
