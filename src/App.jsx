import { getBrokerList } from './api/broker/broker-api';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const dispatch = useDispatch();
  const brokerOption = useSelector((state) => state.brokerList.brokerOption);

  useEffect(() => {
    if (brokerOption === null) {
      const fetchData = async () => {
        try {
          const data = await getBrokerList();
          dispatch({ type: 'SET_BROKER_OPTION', payload: data });
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [brokerOption, dispatch]);

  return <AppRoutes />;
};

export default App;
