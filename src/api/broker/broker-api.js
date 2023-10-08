import axios from 'axios';
import { getBaseUrl } from '../../utility/getBaseUrl';

const BASEURL = getBaseUrl();
export const getBrokerList = async () => {
  const { data } = await axios.get(`${BASEURL}/public/broker`);
  console.log('🚀 ~ file: broker-api.js:5 ~ getBrokerList ~ data:', data);
  return data;
};
