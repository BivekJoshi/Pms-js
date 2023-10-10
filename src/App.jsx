import { getBrokerList } from './api/broker/broker-api';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import toast from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);
  useEffect(() => {
    if (brokerOption === null) {
      const fetchData = async () => {
        dispatch({ type: 'SET_BROKER_OPTION_PROCESSING', payload: true });

        try {
          const data = await getBrokerList();
          dispatch({ type: 'SET_BROKER_OPTION', payload: data });
          dispatch({ type: 'SET_BROKER_OPTION_PROCESSING', payload: false });
        } catch (error) {
          toast(error);
        } finally {
          dispatch({ type: 'SET_BROKER_OPTION_PROCESSING', payload: false });
        }
      };

      fetchData();
    }
  }, [brokerOption, dispatch]);

  return <AppRoutes />;
};

export default App;
