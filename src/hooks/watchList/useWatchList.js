import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addWatchListDetail,
  addWatchListMaster,
  deleteWatchListDetail,
  deleteWatchName,
  editWatchListName,
  getProfileDetail,
  getWatchListDataById,
  getWatchListName,
  getWatchListedCompanies,
} from '../../api/watchlist/watchlist-api';
import toast from 'react-hot-toast';
import { getErrorMessage } from './../../utility/getErrorMessage';

/*________________________GET Profile Detail_____________________________________*/
export const useGetProfileDetail = () => {
  return useQuery(['getProfileDetail'], () => getProfileDetail(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET WATCHLIST MASTER DATA_____________________________________*/
export const useGetWatchListName = () => {
  return useQuery(['getWatchListName'], () => getWatchListName(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET WATCHLIST DATA BY ID_____________________________________*/
export const useGetWatchListDataById = (id) => {
  return useQuery(
    ['getWatchListDataById', id],
    () => getWatchListDataById(id),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________GET WATCHLIST DATA BY ID_____________________________________*/
export const useGetListedCompanies = () => {
  return useQuery(
    ['getWatchListedCompanies'],
    () => getWatchListedCompanies(),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const useAddWatchListMaster = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ['addWatchListMaster'],
    (formData) => addWatchListMaster(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Succesfully added WatchList Master');
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('getWatchListName');
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

/*________________________POST WATCHLIST DETAILS_____________________________________*/
export const useAddWatchListDetail = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ['addWatchListDetail'],
    (formData) => addWatchListDetail(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Succesfully added WatchList Detail');
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('getWatchListDataById');
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
/*__________________________Edit WatchList Name_____________________________________*/
export const useUpdateWatchlistName = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ['editWatchList'],
    (formData) => editWatchListName(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success('Succesfully Edit WatchList Name');
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('getWatchListName');
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
/*________________________________Delete Watch List Name_____________________*/
export const useRemoveWatchListName = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(['removeWatchList'], (id) => deleteWatchName(id), {
    onSuccess: (data, variables, context) => {
      toast.success('Successfully Deleted');
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
      queryClient.invalidateQueries('getWatchListName');
    },
    onError: (err, _variables, _context) => {
      toast.error(`Error: ${err.message}`);
    },
  });
};

/*________________________________DELETE WATCHTLIST DETAIL_____________________*/
export const useRemoveWatchListDetail = ({ onSuccess, id }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ['removeWatchListDetail'],
    (tableDataSymbol) => deleteWatchListDetail(tableDataSymbol, id),
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success('Succesfully Deleted Watchlist Detail');

        queryClient.invalidateQueries('getWatchListDataById');
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};
