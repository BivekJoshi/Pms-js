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
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { jsPDF } from "jspdf";
import DownloadIcon from "@mui/icons-material/Download";

import autoTable from "jspdf-autotable";
import { download, generateCsv, mkConfig } from "export-to-csv";
const CustomTable = (props) => {
  const theme = useTheme();
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    filename: `${props?.title ? props?.title : "Report Table"}`,
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });
  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows?.map((row) => Object.values(row.original));
    const tableHeaders = props?.columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save(`${props?.title ? props?.title : "Pms-Report"}.pdf`);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(props?.data);
    download(csvConfig)(csv);
  };

  const handleRowClick = (row) => {
    if (props?.onRowClick) {
      props?.onRowClick(row);
    }
  };
  const handleDeleteRow = useCallback((row) => {
    if (props.delete && props.handleDelete) props.handleDelete(row);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEditRow = useCallback((row) => {
    if (props.edit && props.handleEdit) props.handleEdit(row);
  }, []);

  const handleNotificationIcon = useCallback((row) => {
    if (props.notification && props.handleNotification)
      props.handleNotification(row);
  }, []);

  // const handleSaveRow = async ({ exitEditingMode, row, values }) => {
  //   let tableData = [...props.data];
  //   let updatedData = tableData[row.index];
  //   let column = [...props.columns];
  //   for (const key in values) {
  //     const columnID = Number(key);
  //     const selectedValue = values[key];
  //     const columnConfig = column?.find((d) => d.id === columnID);
  //     const fieldName = columnConfig?.accessorKey;
  //     if (fieldName) {
  //       updatedData[fieldName] = selectedValue;
  //     }
  //   }
  //   props?.handleUpdate(row, updatedData);
  //   exitEditingMode(); //required to exit editing mode
  // };

  const bodyBackgroundColor =
    theme.palette.mode === "light" ? "#ffff" : theme.palette.background.default;
 
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
        // onEditingRowSave={handleSaveRow}
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
          return (
            <Box sx={{ display: "flex", gap: "0.1rem" }}>
              {props.edit && (
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => handleEditRow(row)}>
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
              {props.notification &&
                (row?.original?.isAlertAdded ? (
                  <Tooltip arrow placement="right" title="Add to alert">
                    <IconButton
                      sx={{ color: "rgba(255, 184, 107, 1)" }}
                      onClick={() => handleNotificationIcon(row)}
                    >
                      <NotificationsActiveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip arrow placement="right" title="Alert not set">
                    <IconButton
                      sx={{ color: "grey" }}
                      onClick={() => handleNotificationIcon(row)}
                    >
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                ))}
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
              (theme.palette.mode === "light"
                ? "#401686"
                : theme.palette.secondary.hader),
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
        renderTopToolbarCustomActions={({ table }) => {
          return (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h3">{props?.title}</Typography>
              <div>
                {props?.exportAsPdf && (
                  <Tooltip title="Download as PDF" arrow placement="bottom">
                    <IconButton
                      onClick={() => {
                        handleExportRows(table.getPrePaginationRowModel().rows);
                      }}
                    >
                      {theme.palette.mode === "light" ? (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_5541_36229)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.28 1.71338V7.28171C10.28 7.62252 10.4154 7.94936 10.6563 8.19034C10.8973 8.43133 11.2242 8.56671 11.565 8.56671H17.1333V17.1334C17.1333 17.5878 16.9528 18.0236 16.6315 18.3449C16.3102 18.6662 15.8744 18.8467 15.42 18.8467H5.13997C4.68556 18.8467 4.24977 18.6662 3.92846 18.3449C3.60715 18.0236 3.42664 17.5878 3.42664 17.1334V3.42671C3.42664 2.97231 3.60715 2.53651 3.92846 2.2152C4.24977 1.89389 4.68556 1.71338 5.13997 1.71338H10.28ZM9.43273 10.1498C9.2275 11.4545 8.5452 12.6366 7.51808 13.4668C6.75821 14.0802 7.45297 15.2838 8.36446 14.9335C9.5971 14.459 10.962 14.459 12.1946 14.9335C13.1061 15.2847 13.8009 14.0811 13.041 13.4668C12.0139 12.6365 11.3317 11.4545 11.1264 10.1498C10.9747 9.18523 9.58436 9.18437 9.43273 10.1498ZM10.28 12.2529L10.9704 13.4471H9.59121L10.28 12.2529ZM11.9933 1.75022C12.3179 1.81905 12.6155 1.98065 12.85 2.21539L16.6313 5.99671C16.866 6.2312 17.0276 6.52881 17.0965 6.85338H11.9933V1.75022Z"
                              fill="black"
                              fill-opacity="0.54"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5541_36229">
                              <rect width="20.56" height="20.56" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_5541_33674)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.28 1.71338V7.28171C10.28 7.62252 10.4154 7.94936 10.6563 8.19034C10.8973 8.43133 11.2242 8.56671 11.565 8.56671H17.1333V17.1334C17.1333 17.5878 16.9528 18.0236 16.6315 18.3449C16.3102 18.6662 15.8744 18.8467 15.42 18.8467H5.13997C4.68556 18.8467 4.24977 18.6662 3.92846 18.3449C3.60715 18.0236 3.42664 17.5878 3.42664 17.1334V3.42671C3.42664 2.97231 3.60715 2.53651 3.92846 2.2152C4.24977 1.89389 4.68556 1.71338 5.13997 1.71338H10.28ZM9.43273 10.1498C9.2275 11.4545 8.5452 12.6366 7.51808 13.4668C6.75821 14.0802 7.45297 15.2838 8.36446 14.9335C9.5971 14.459 10.962 14.459 12.1946 14.9335C13.1061 15.2847 13.8009 14.0811 13.041 13.4668C12.0139 12.6365 11.3317 11.4545 11.1264 10.1498C10.9747 9.18523 9.58436 9.18437 9.43273 10.1498ZM10.28 12.2529L10.9704 13.4471H9.59121L10.28 12.2529ZM11.9933 1.75022C12.3179 1.81905 12.6155 1.98065 12.85 2.21539L16.6313 5.99671C16.866 6.2312 17.0276 6.52881 17.0965 6.85338H11.9933V1.75022Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5541_33674">
                              <rect width="20.56" height="20.56" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </IconButton>
                  </Tooltip>
                )}
                {props?.exportAsCSV && (
                  <Tooltip title="Download as CSV" arrow placement="bottom">
                    <IconButton
                      onClick={() => {
                        handleExportData();
                      }}
                    >
                      {theme.palette.mode === "light" ? (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.4492 2.46442L13.2175 0.926704C13.2782 0.917996 13.3401 0.922423 13.3989 0.939686C13.4577 0.956949 13.5122 0.986645 13.5586 1.02677C13.6049 1.06689 13.6422 1.1165 13.6677 1.17225C13.6933 1.22799 13.7065 1.28858 13.7067 1.3499V19.2097C13.7065 19.2709 13.6933 19.3314 13.6678 19.3871C13.6423 19.4428 13.6051 19.4923 13.5588 19.5325C13.5126 19.5726 13.4582 19.6023 13.3995 19.6196C13.3408 19.6369 13.279 19.6415 13.2184 19.6329L2.44834 18.0952C2.24413 18.0661 2.05726 17.9643 1.92208 17.8085C1.7869 17.6527 1.71247 17.4533 1.71246 17.2471V3.31252C1.71247 3.10625 1.7869 2.9069 1.92208 2.7511C2.05726 2.5953 2.24498 2.49351 2.4492 2.46442ZM14.5633 2.56979H17.99C18.2172 2.56979 18.4351 2.66005 18.5957 2.8207C18.7564 2.98136 18.8467 3.19926 18.8467 3.42646V17.1331C18.8467 17.3603 18.7564 17.5782 18.5957 17.7389C18.4351 17.8995 18.2172 17.9898 17.99 17.9898H14.5633V2.56979ZM8.73799 10.2798L11.1367 6.85312H9.08065L7.70999 8.81146L6.33932 6.85312H4.28332L6.68199 10.2798L4.28332 13.7065H6.33932L7.70999 11.7481L9.08065 13.7065H11.1367L8.73799 10.2798Z"
                            fill="black"
                            fill-opacity="0.54"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.4492 2.46442L13.2175 0.926704C13.2782 0.917996 13.3401 0.922423 13.3989 0.939686C13.4577 0.956949 13.5122 0.986645 13.5586 1.02677C13.6049 1.06689 13.6422 1.1165 13.6677 1.17225C13.6933 1.22799 13.7065 1.28858 13.7067 1.3499V19.2097C13.7065 19.2709 13.6933 19.3314 13.6678 19.3871C13.6423 19.4428 13.6051 19.4923 13.5588 19.5325C13.5126 19.5726 13.4582 19.6023 13.3995 19.6196C13.3408 19.6369 13.279 19.6415 13.2184 19.6329L2.44834 18.0952C2.24413 18.0661 2.05726 17.9643 1.92208 17.8085C1.7869 17.6527 1.71247 17.4533 1.71246 17.2471V3.31252C1.71247 3.10625 1.7869 2.9069 1.92208 2.7511C2.05726 2.5953 2.24498 2.49351 2.4492 2.46442ZM14.5633 2.56979H17.99C18.2172 2.56979 18.4351 2.66005 18.5957 2.8207C18.7564 2.98136 18.8467 3.19926 18.8467 3.42646V17.1331C18.8467 17.3603 18.7564 17.5782 18.5957 17.7389C18.4351 17.8995 18.2172 17.9898 17.99 17.9898H14.5633V2.56979ZM8.73799 10.2798L11.1367 6.85312H9.08065L7.70999 8.81146L6.33932 6.85312H4.28332L6.68199 10.2798L4.28332 13.7065H6.33932L7.70999 11.7481L9.08065 13.7065H11.1367L8.73799 10.2798Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </IconButton>
                  </Tooltip>
                )}

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
              </div>
            </Box>
          );
        }}
      />
    </div>
  );
};

export default CustomTable;
