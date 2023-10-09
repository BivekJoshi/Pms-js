import React from "react";
import {
  useGetWatchListDataById,
  useGetWatchListName,
} from "../../hooks/watchList/useWatchList";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import MaterialReactTable from "material-react-table";
import { useMemo } from "react";
import { Search } from "@mui/icons-material";
import WatchListMasterField from "../../form/formComponent/watchlist/WatchListMasterField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WatchList = () => {
  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();
  const { data: watchListDataById, isLoading } = useGetWatchListDataById();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = useMemo(
    () => [
      {
        accessorKey: "symbol",
        header: "Symbol",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "change",
        header: "Change Percent (%)",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "open",
        header: "Open (Rs)",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "close",
        header: "Close (Rs)",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "ltp",
        header: "LTP",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "volume",
        header: "Volume",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "high",
        header: "High (Rs)",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "low",
        header: "Low (rs)",
        size: 150,
        sortable: false,
      },
      {
        accessorKey: "change",
        header: "Change (Rs)",
        size: 150,
        sortable: false,
      },
    ],
    []
  );
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button variant="contained" onClick={handleOpen}>
          Create New watchlist
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WatchListMasterField onClose={handleClose} />
        </Box>
      </Modal>

      <br />
      <Box
        sx={{
          display: "flex",
          width: "cover",
          height: "84px",
          backgroundColor: "#fff",
          padding: "16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          Watchlist:
          {!loadingname &&
            watchListName.map((name) => (
              <Chip
                label={name?.watchlistName}
                className="custom-chip"
                key={name?.id}
              />
            ))}
        </div>
        <div>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </div>
        <div>
          <Button variant="contained" sx={{ width: "18px", height: "28px" }}>
            +Add
          </Button>
        </div>
      </Box>
      <br />

      {!isLoading && (
        <MaterialReactTable
          columns={columns}
          data={watchListDataById}
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
              borderRadius: "8px 0 0 0",
              color: "#fff",
            },
          }}
        />
      )}
    </div>
  );
};

export default WatchList;
