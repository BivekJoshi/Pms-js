import React from "react";
import MaterialReactTable from "material-react-table";
import { useMemo } from "react";
import { useGetWatchListDataById } from "../../hooks/watchList/useWatchList";

const WatchTable = (watchid) => {
  const id = watchid.watchid;
  const { data: watchListDataById, isLoading } = useGetWatchListDataById(id);

  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "symbol",
        header: "Symbol",
        size: 150,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "change",
        header: "Change Percent (%)",
        size: 150,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "open",
        header: "Open (Rs)",
        size: 150,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "close",
        header: "Close (Rs)",
        size: 150,
        sortable: false,
      },
      {
        id: 5,
        accessorKey: "ltp",
        header: "LTP",
        size: 150,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "volume",
        header: "Volume",
        size: 150,
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
        size: 150,
        sortable: false,
      },
      {
        id: 10,
        accessorKey: "c",
        header: "Action",
        size: 100,
        sortable: false,
      },
    ],
    []
  );
  return (
    <div>
      {!isLoading && watchListDataById && watchListDataById.data ? (
        <MaterialReactTable
          columns={columns}
          data={watchListDataById.data}
          isLoading={isLoading}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableBottomToolbar={false}
          enableTopToolbar={false}
          muiTableBodyRowProps={{ hover: false }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: "#401686",
              color: "#fff",
            },
          }}
        />
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default WatchTable;
