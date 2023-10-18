export const successResponse = (message) => {
  return {
    type: 'success',
    message: message,
  };
};

export const failedResponse = (message) => {
  console.log('failed');
  return {
    type: 'failed',
    message: message,
  };
};

export const processing = (message) => {
  return {
    type: 'processing',
    message: message,
  };
};
export const warning = (message) => {
  return {
    type: 'warning',
    message: message,
  };
};

export const initiated = () => {
  return {
    type: 'initiated',
  };
};
