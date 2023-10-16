const envType = import.meta.env.MODE;
export const contextPath = () => {
  return window.location.pathname.substring(
    0,
    window.location.pathname.indexOf('/', 2)
  );
};

export const getBaseUrl = () => {
  if (envType === 'development') {
    // return 'http://103.94.159.144:8085/pms/api';
    return 'http://172.16.16.131:8085/pms/api';
  } else if (envType === 'production') {
    let path = window.localStorage.getItem('pms-path');
    path = path ? path + '/api' : null;
    return path || contextPath() + '/api';
  }
  // return 'https://dgtrade.dghub.io:8085/pms/api';
};
