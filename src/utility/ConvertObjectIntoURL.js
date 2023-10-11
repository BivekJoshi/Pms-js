import _ from 'lodash';
export const convertObjectToURL = (params) => {
  let keyValue = Object.entries(params);
  let kv = [];
  for (let index in keyValue) {
    const currentKeyValue = keyValue[index];
    if (_.isArray(currentKeyValue[1])) {
      let kvs = currentKeyValue[1].map((d) => {
        return currentKeyValue[0] + '=' + d;
      });
      kv = [...kv, ...kvs];
    } else kv.push(currentKeyValue.join('='));
  }
  return kv.join('&');
};
