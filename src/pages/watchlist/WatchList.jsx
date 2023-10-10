import React from 'react';
import {
  useGetListedCompanies,
  useGetWatchListName,
} from '../../hooks/watchList/useWatchList';
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';

import WatchListMasterField from '../../form/formComponent/watchlist/WatchListMasterField';
import { useState } from 'react';
import WatchTable from './WatchTable';
import { useWatchListDetailForm } from '../../hooks/watchList/useWatchListForm/useWatchListDetailForm';
import toast from 'react-hot-toast';
import { useTheme } from '@emotion/react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const WatchList = () => {
  const theme = useTheme();

  const [watchlist, setWatchList] = useState();
  const [open, setOpen] = useState(false);

  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();
  const { data: listedCompanies } = useGetListedCompanies();

  const { formik } = useWatchListDetailForm(watchlist);
  
  const handleFormSubmit = () => {
    formik.setFieldValue("script", selectedSymbol);
    formik.setFieldValue("id", watchlist);
    formik.handleSubmit();

    if (!formik.isValid) {
      toast.error('Please make sure you have filled the form correctly');
    }
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols = symbolsArray.map((item) => item.symbol);

  return (
    <div>
      <Grid
        container
        direction='row'
        justifyContent='flex-end'
        alignItems='center'
      >
        <Button
          variant='contained'
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: '#401686',
            color: '#fff',
          }}
        >
          Create New watchlist
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <WatchListMasterField onClose={() => setOpen(false)} />
        </Box>
      </Modal>

      <br />
      <Box
        sx={{
          display: 'flex',
          width: 'cover',
          height: '84px',
          backgroundColor: theme.palette.background.alt,
          padding: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '.3rem',
          }}
        >
          <Typography
            variant='h4'
            style={{
              color: theme.palette.text.light,
              fontWeight: '800',
            }}
          >
            Watchlist:
          </Typography>
          {!loadingname &&
            watchListName.map((name) => (
              <Chip
                label={name?.watchlistName}
                className='custom-chip'
                key={name?.id}
                style={{
                  backgroundColor:
                    watchlist === name?.id ? '#329EF4' : '#EBEBEB',
                  color: watchlist === name?.id ? 'white' : 'initial',
                  margin: '2px',
                }}
                onClick={() => setWatchList(name?.id)}
              />
            ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography
            variant='h6'
            style={{
              color: theme.palette.text.light,
            }}
          >
            NEPSE CODE:
          </Typography>
          <div style={{ width: '300px' }}>
            <Autocomplete
              name='script'
              disabled={!watchlist}
              options={symbols}
              value={selectedSymbol || formik?.values?.script}
              onChange={(event, newValue) => {
                if (newValue != null) {
                  formik.setFieldValue('script', newValue);
                  setSelectedSymbol(newValue);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Nepse Code'
                  variant='outlined'
                  error={formik.touched.script && Boolean(formik.errors.script)}
                  helperText={formik.touched.script && formik.errors.script}
                  autoFocus
                  size='small'
                  value={formik.values.script}
                  // InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </div>
        </div>
        <div>
          <Button
            variant='contained'
            disabled={!watchlist}
            sx={{
              backgroundColor: '#401686',
              color: '#fff',
            }}
            onClick={handleFormSubmit}
          >
            +Add
          </Button>
        </div>
      </Box>
      <br />

      <WatchTable watchid={watchlist} />
    </div>
  );
};

export default WatchList;
