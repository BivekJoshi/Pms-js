import React from 'react';
import { useGetWatchListName } from '../../hooks/watchList/useWatchList';

const WatchList = () => {
  const { data } = useGetWatchListName();
  console.log('🚀 ~ file: WatchList.jsx:6 ~ WatchList ~ data:', data);
  return <div>WatchList</div>;
};

export default WatchList;
