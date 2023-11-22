import React, { useEffect } from 'react';
import {
  useGetListedCompanies,
  useGetWatchListName,
} from '../../hooks/watchList/useWatchList';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WatchListMasterField from '../../form/formComponent/watchlist/WatchListMasterField';
import { useState } from 'react';
import WatchTable from './WatchTable';
import { useWatchListDetailForm } from '../../hooks/watchList/useWatchListForm/useWatchListDetailForm';
import toast from 'react-hot-toast';
import FormModal from '../../components/formModal/FormModal';
import { MoreVert } from '@mui/icons-material';
import WatchListModal from './WatchListModal';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const WatchList = () => {
  const theme = useTheme();
  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();

  const [watchlist, setWatchList] = useState();
  console.log(
    '🚀 ~ file: WatchList.jsx:35 ~ WatchList ~ watchlist:',
    watchlist
  );
  const [open, setOpen] = useState(false);
  const [watchListModal, setWatchListModal] = useState(null);
  const [watchListDetail, setWatchListDetail] = React.useState({
    name: '',
    id: '',
  });

  const { data: listedCompanies } = useGetListedCompanies();

  const [selectedSymbol, setSelectedSymbol] = useState();
  const { formik } = useWatchListDetailForm(watchlist, setSelectedSymbol);

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols =
    symbolsArray.map((item) => ({
      symbol: item?.symbol,
      companyInfo: item?.companyInfo,
    })) || [];

  useEffect(() => {
    if (!loadingname && watchListName?.length > 0) {
      setWatchList(watchListName[0]?.id);
    }
  }, [loadingname, watchListName]);

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
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            marginTop: '1rem',
            textTransform: 'none',
          }}
        >
          Create New watchlist
        </Button>
      </Grid>

      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        formComponent={<WatchListMasterField onClose={() => setOpen(false)} />}
      />
      <br />
      <Box
        sx={{
          display: 'flex',
          width: 'cover',
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
            watchListName?.map((name) => (
              <div
                onClick={() => setWatchList(name?.id)}
                key={name?.id}
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  borderRadius: '100px',
                  position: 'relative',
                  padding: '3px 6px',
                  backgroundColor:
                    watchlist === name?.id ? '#329EF4' : '#EBEBEB',
                  color: watchlist === name?.id ? 'white' : 'initial',
                }}
              >
                {name?.watchlistName}
                <span>
                  <MoreVert
                    sx={{ marginTop: '25%' }}
                    onClick={(e) => {
                      setWatchListModal(e.currentTarget);
                      setWatchListDetail({
                        name: name.watchlistName,
                        id: name?.id,
                      });
                    }}
                  />
                </span>
              </div>
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
          <Autocomplete
            disableCloseOnSelect
            multiple
            id='checkboxes-tags-demo'
            options={symbols}
            value={selectedSymbol || []}
            isOptionEqualToValue={(option, value) =>
              option.symbol === value.symbol
            }
            onChange={(event, newValue) => {
              if (newValue != null) {
                const multiScript = newValue.map((d) => d.symbol);
                formik.setFieldValue('script', multiScript);
                setSelectedSymbol(newValue);
              }
            }}
            getOptionLabel={(option) => option.symbol}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.symbol}
              </li>
            )}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Script'
                error={formik.touched.script && Boolean(formik.errors.script)}
                helperText={formik.touched.script && formik.errors.script}
                size='small'
                value={formik.values.script}
              />
            )}
          />
        </div>

        <Button
          variant='contained'
          disabled={!watchlist}
          style={{
            backgroundColor: theme.palette.background.btn,
            color: theme.palette.text.alt,
            textTransform: 'none',
          }}
          onClick={handleFormSubmit}
        >
          + Add
        </Button>
      </Box>
      <br />
      <WatchTable watchid={watchlist} />
      {watchListModal && (
        <WatchListModal
          open={watchListModal}
          handleClose={() => {
            setWatchListModal(null);
            setWatchList({ name: '', id: '' });
          }}
          watchListDetail={watchListDetail}
        />
      )}
    </div>
  );
};

export default WatchList;
