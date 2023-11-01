import React from "react";
import { useMemo } from "react";
import { useGetWatchListDataById, useRemoveWatchListDetail } from "../../hooks/watchList/useWatchList";
import CustomTable from "../../components/customTable/CustomTable";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import CustomeAlertDialog from "../../components/customeDialog/CustomeDialog";
import { useDispatch } from "react-redux";

const WatchTable = (watchid) => {
  const id = watchid.watchid;
  const { data: watchListDataById, isLoading } = useGetWatchListDataById(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowData, setRowData] = useState();
  const [tableDataIndex, settableDataIndex] = useState();
  const [tableDataSymbol, setTableDataSymbol] = useState();
  const deleteWatchlistMutation = useRemoveWatchListDetail({tableDataSymbol});


  const dispatch = useDispatch();
  const theme = useTheme();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "symbol",
        header: "Symbol",
        size: 100,
        sortable: false,
      },

      {
        id: 3,
        accessorKey: "open",
        header: "Open (Rs)",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "close",
        header: "Close (Rs)",
        size: 100,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "ltp",
        header: "LTP",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "volume",
        header: "Volume",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "high",
        header: "High (Rs)",
        size: 100,
        sortable: false,
      },
      {
        id: 8,
        accessorKey: "low",
        header: "Low (rs)",
        size: 100,
        sortable: false,
      },
      {
        id: 9,
        accessorKey: "change",
        header: "Change (Rs)",
        size: 120,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "change",
        header: "Change Percent (%)",
        size: 170,
        sortable: false,
      },
    ],
    []
  );

  const deleteRow = (row) => {
    setIsModalOpen(true);
    setRowData(row?.original);
    settableDataIndex(row.index);
    setTableDataSymbol(row?.original?.symbol)
  };

  const handleDeleteData = () => {
    deleteWatchlistMutation.mutate(tableDataSymbol);
  };
  return (
    <div>
      {!isLoading && watchListDataById && watchListDataById.data ? (
        <CustomTable
          title="Watch List"
          columns={columns}
          data={watchListDataById?.data}
          state={{
            isLoading: isLoading,
            showSkeletons: isLoading,
          }}
          isLoading={isLoading}
          enableColumnActions
          enableDelete
          enableEditing={true}
          handleDelete={deleteRow}
          delete
        />
      ) : (
        <Box
          sx={{
            width: "cover",
            height: "84px",
            backgroundColor: theme.palette.background.alt,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Script Found
        </Box>
      )}
      <CustomeAlertDialog
        disagreeLabel={"Cancel"}
        agreeLabel={"Agree"}
        header={"Are you sure to delete this Watchlist Detail?"}
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleAgree={handleDeleteData}
      />
    </div>
  );
};

export default WatchTable;
