import React from "react";
import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Typography,
  useTheme,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useCallback } from "react";
import "./CustomTable.css";

const CustomTable = (props) => {
  const theme = useTheme();

  const handlePaginationChange = (pageIndex, pageSize) => {
    if (props?.onPaginationChange) {
      props?.onPaginationChange({ pageIndex, pageSize });
    }
  };
  const handleRowClick = (row) => {
    if (props?.onRowClick) {
      props?.onRowClick(row);
    }
  };
  const handleDeleteRow = useCallback((row) => {
    if (props.delete && props.handleDelete) props.handleDelete(row);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    let tableData = [...props.data];
    let updatedData = tableData[row.index];
    let column = [...props.columns];
    for (const key in values) {
      const columnID = Number(key);
      const selectedValue = values[key];
      const columnConfig = column?.find((d) => d.id === columnID);
      const fieldName = columnConfig?.accessorKey;
      if (fieldName) {
        updatedData[fieldName] = selectedValue;
      }
    }
    props?.handleUpdate(row, updatedData);
    exitEditingMode(); //required to exit editing mode
  };

  const headerBackgroundColor =
    props.headerBackgroundColor ||
    (theme.palette.mode === "light" ? "#ffffff" : "#401686");
  const headerColor =
    props.headerColor ||
    (theme?.palette?.mode === "light" ? "#fafafa" : "#fafafa");

  const bodyBackgroundColor =
    theme.palette.mode === "light" ? "#ffffff" : "#191F45";
  return (
    <div
      className="custom_table"
      style={{ backgroundColor: headerBackgroundColor }}
    >
      <MaterialReactTable
        columns={props?.columns || []}
        data={props?.data || []}
        isLoading={props?.isLoading}
        enableRowNumbers={props.enableRowNumbers || false}
        enableRowVirtualization
        headerTitle={props?.title || "My Table Title"}
        enableStickyHeader
        // Here you enable pagination
        enablePagination={props?.manualPagination}
        paginationPageSize={props?.pageSize || 10}
        enableEditing={props.enableEditing || false}
        onEditingRowSave={handleSaveRow}
        editingMode={props.editingMode}
        rowCount={props?.rowCount}
        onPaginationChange={handlePaginationChange}
        state={props?.state}
        initialState={{ density: props?.density || "compact" }}
        enableColumnResizing={props?.enableColumnResizing || true}
        enableColumnActions={props?.enableColumnActions}
        enableColumnFilters={props?.enableColumnFilters}
        enableSorting={props?.enableSorting}
        enableRowActions={props.enableRowActions || false}
        enableBottomToolbar={props?.enableBottomToolbar}
        enableTopToolbar={props?.enableTopToolbar}
        enableDensityToggle={props?.enableDensityToggle}
        enableHiding={props?.enableHiding}
        enableFullScreenToggle={props?.enableFullScreenToggle}
        enableGlobalFilter={props?.enableGlobalFilter}
        density={props?.density}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {props.edit && (
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
            )}
            {props.delete && (
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                  <Delete />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        )}
        muiTableContainerProps={{
          sx: {
            maxHeight: props?.maxHeight || "600px",
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor: headerBackgroundColor,
            color: headerColor,
          },
        }}
        // enableRowSelection
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
            backgroundColor: bodyBackgroundColor,
          },
        })}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
            <Typography variant="h3">{props?.title}</Typography>
            {props?.button1 && (
              <Button
                color="secondary"
                onClick={() => {
                  alert("Create New Account");
                }}
                variant="contained"
              >
                {props?.button1}
              </Button>
            )}
            {props?.button2 && (
              <Button
                color="error"
                // disabled={!table.getIsSomeRowsSelected()}
                onClick={() => {
                  alert("Delete Selected Accounts");
                }}
                variant="contained"
              >
                {props?.button2}
              </Button>
            )}
          </Box>
        )}
      />
    </div>
  );
};

export default CustomTable;
