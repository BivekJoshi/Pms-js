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
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const CustomTable = (props) => {
  const theme = useTheme();
  const handleRowClick = (row) => {
    if (props?.onRowClick) {
      props?.onRowClick(row);
    }
  };
  const handleDeleteRow = useCallback((row) => {
    if (props.delete && props.handleDelete) props.handleDelete(row);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNotificationIcon = useCallback((row) => {
    if (props.notification && props.handleNotification)
      props.handleNotification(row);
  }, []);

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

  const bodyBackgroundColor =
    theme.palette.mode === "light" ? "#ffff" : "#191F45";

  return (
    <div className="custom_table">
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
        // onPaginationChange={handlePaginationChange}
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
        renderRowActions={({ row, table }) => {
          console.log(row?.original?.isAlertAdded, "datat");
          return (
            <Box sx={{ display: "flex", gap: "0.1rem" }}>
              {props.edit && (
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
              )}
              {props.delete && (
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteRow(row)}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              )}
              {props.notification && row?.original?.isAlertAdded === true ? (
                <Tooltip arrow placement="right" title="notification">
                  <IconButton
                    sx={{ color: "rgba(255, 184, 107, 1)" }}
                    onClick={() => handleNotificationIcon(row)}
                  >
                    <NotificationsActiveIcon />
                  </IconButton>
                </Tooltip>
              ):
              <Tooltip arrow placement="right" title="notification">
                  <IconButton
                    sx={{ color: "grey" }}
                    onClick={() => handleNotificationIcon(row)}
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
                }
            </Box>
          );
        }}
        muiTableContainerProps={{
          sx: {
            maxHeight: props?.maxHeight || "600px",
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor:
              props?.headerBackgroundColor ||
              (theme.palette.mode === "light" ? "#401686" : "#21295C"),
            color:
              props?.headerColor ||
              (theme?.palette?.mode === "dark" ? "#fafafa" : "#ffff"),
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
        muiTableHeadCellProps={{
          sx: {
            color:
              props?.miniHeaderColor ||
              (theme?.palette?.mode === "dark" ? "#fafafa" : "#ffff"),
          },
        }}
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
