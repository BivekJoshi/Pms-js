import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createAlertApi,
  deleteStockAlert,
  getCompanyLTP,
  getStockAlert,
} from './alertApi';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../utility/getErrorMessage';

/*________________________POST ALERT_____________________________________*/
export const useAddCreateAlert = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(['addAlert'], (formData) => createAlertApi(formData), {
    onSuccess: (data, variables, context) => {
      toast.success('Succesfully Create Alert');
      onSuccess && onSuccess(data, variables, context);
      queryClient.invalidateQueries('getStockAlert');
    },
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
  });
};

/*________________________GET LIVE MARKET LTP_____________________________________*/
export const useGetLtp = (script) => {
  return useQuery(['getLtpData', script], () => getCompanyLTP(script), {
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
/*________________________________DELETE MANAGE STOCK ALERT _____________________*/
export const useRemoveWatchListDetail = ({ onSuccess, id }) => {
  const queryClient = useQueryClient();
  return useMutation(['deleteStockAlert'], () => deleteStockAlert(id), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
      toast.success('Succesfully Deleted Stock Alert');

      queryClient.invalidateQueries('');
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};

export const useGetStockAlert = (script) => {
  return useQuery(['getStockAlert', script], () => getStockAlert(script), {
    onError: (err) => {
      toast.error(getErrorMessage(err));
    },
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
