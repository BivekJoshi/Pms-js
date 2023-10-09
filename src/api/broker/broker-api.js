import axios from 'axios';
import { getBaseUrl } from '../../utility/getBaseUrl';

const BASEURL = getBaseUrl();
export const getBrokerList = async () => {
  const { data } = await axios.get(`${BASEURL}/public/broker`);
  return data;
};
