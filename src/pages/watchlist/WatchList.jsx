import React from 'react';
import { useGetWatchListName } from '../../hooks/watchList/useWatchList';

const WatchList = () => {
  const { data } = useGetWatchListName();
  return <div>WathList</div>;
};

export default WatchList;
