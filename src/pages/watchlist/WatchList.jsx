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
  Chip,
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
const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const WatchList = () => {
  const theme = useTheme();
  const { data: watchListName, isLoading: loadingname } = useGetWatchListName();

  const [watchlist, setWatchList] = useState();
  console.log(
    '🚀 ~ file: WatchList.jsx:31 ~ WatchList ~ watchlist:',
    watchlist
  );
  const [open, setOpen] = useState(false);

  const { data: listedCompanies } = useGetListedCompanies();

  const { formik } = useWatchListDetailForm(watchlist);
  const [selectedSymbol, setSelectedSymbol] = useState(formik.values.script);

  const handleFormSubmit = () => {
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
  const symbols =
    symbolsArray.map((item) => ({
      symbol: item?.symbol,
      companyInfo: item?.companyInfo,
    })) || [];

  useEffect(() => {
    if (!loadingname && watchListName.length > 0) {
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
          {/* <div style={{ width: "300px" }}>
            <Autocomplete
              name="script"
              options={symbols}
              value={selectedSymbol || formik?.values?.script}
              onChange={(event, newValue) => {
                if (newValue != null) {
                  formik.setFieldValue("script", newValue);
                  setSelectedSymbol(newValue);
                }
              }}
              getOptionLabel={(option) => option?.companyInfo || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Script"
                  variant="outlined"
                  error={formik.touched.script && Boolean(formik.errors.script)}
                  helperText={formik.touched.script && formik.errors.script}
                  autoFocus
                  size="small"
                  value={formik.values.script}
                />
              )}
            />
          </div> */}
          <Autocomplete
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
                console.log(multiScript);
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
                autoFocus
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
          }}
          onClick={handleFormSubmit}
        >
          +Add
        </Button>
      </Box>
      <br />

      <WatchTable watchid={watchlist} />
    </div>
  );
};

export default WatchList;
