import Axios from 'axios';
import { getBaseUrl } from '../utility/getBaseUrl';
import { logout } from '../utility/logout';
import store from '../redux/store';

const BASEURL = getBaseUrl();
const UNAUTHORIZED = 401;

export const axiosInstance = Axios.create({
  baseURL: BASEURL,
  timeout: 20000,
});

axiosInstance.defaults.headers['Access-Control-Allow-Origin'] = '*';

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      let token = localStorage.getItem('token');
      if (token) {
        if (!checkIfExpired(token)) {
          config.headers.Authorization = `Bearer ${localStorage.token}`;
        } else {
          store.dispatch({ type: 'LOGOUT' });
          logout();
        }
      }
      return config;
    } catch (err) {
      console.log(err);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch({ type: 'HTTP_SET', payload: false });
    return response;
  },
  (error) => {
    store.dispatch({ type: 'HTTP_SET', payload: false });

    const { status } = error?.response;
    if (status === UNAUTHORIZED) {
      try {
        store.dispatch({ type: 'LOGOUT' });
        logout();
        console.log('unauthorized');
      } catch (e) {
        console.log(e);
      }
    }
    return Promise.reject(error);
  }
);

const checkIfExpired = (token) => {
  if (token && jwt.decode(token)) {
    const decoded = jwt.decode(token);
    const exp = decoded.exp;
    const iat = decoded.iat;
    const now = new Date();
    if (now.getTime() > exp * 1000) {
      return true;
    }
    if (now.getTime() < iat * 10 - 60000) {
      alert('Wrong System Time \n Please correct your system time');
      return true;
    }
    return false;
  }
  return true;
};
