import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useUpdateWatchListname } from '../../hooks/watchList/useWatchListForm/useWatchListForm';
import { deleteWatchName } from '../../api/watchlist/watchlist-api';
import { useRemoveWatchListName } from '../../hooks/watchList/useWatchList';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const EditDeleteModal = (props) => {
  const { formik } = useUpdateWatchListname(
    props.details?.name,
    props?.details?.id
  );
  const handleEdit = () => {
    formik.handleSubmit();
    props?.handleClose();
  };

  const handleDelete = () => {
    try {
      // deleteWatchName(props?.details?.id);
      useRemoveWatchListName(props?.details?.id);
      props.handleClose();
    } catch (err) {
      console.log(
        '🚀 ~ file: EditDeleteModal.jsx:39 ~ handleDelete ~ err:',
        err
      );
    }
  };
  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby='customized-dialog-title'
        open={props.modalopen}
      >
        <DialogTitle sx={{ m: 0, p: 1 }} id='customized-dialog-title'>
          {props.type === 'edit' ? 'Edit Watch' : 'Delete Watch'}
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {props.type === 'delete' && (
            <Typography gutterBottom>
              Are you sure do youy want to delete this watch list ?
            </Typography>
          )}
          {props.type === 'edit' && (
            <TextField
              sx={{ minWidth: '300px' }}
              id='watchlistName'
              name='watchlistName'
              label='Edit WatchList Name'
              placeholder='Enter watchlist name'
              value={formik.values.watchlistName}
              onChange={formik.handleChange}
              fullWidth
              error={
                formik.touched.watchlistName &&
                Boolean(formik.errors.watchlistName)
              }
              helperText={
                formik.touched.watchlistName && formik.errors.watchlistName
              }
              required
              variant='outlined'
              autoFocus
              InputLabelProps={{ shrink: true }}
            />
          )}
        </DialogContent>
        <DialogActions>
          {props.type === 'delete' && (
            <Button color='error' onClick={handleDelete}>
              Delete
            </Button>
          )}
          {props.type === 'edit' && (
            <Button color='success' onClick={handleEdit}>
              Save
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default EditDeleteModal;
