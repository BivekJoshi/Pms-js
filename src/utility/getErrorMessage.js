export const getErrorMessage = (error) => {
  let err = null;
  console.log(error?.response?.data?.errorMessage);
  try {
    if (error?.response) {
      const message =
        error?.response?.data?.message || error?.response?.data?.errorMessage;
      if (message) {
        return message;
      }
      if (error.response.status === 500) {
        if (error?.response?.data?.errorMessage?.length > 1) {
          err = error.response.data.errorMessage;
        } else {
          err =
            error.response.data.message.length > 0
              ? error.response.data.message
              : 'Oops! Some Error Occured';
        }
      } else {
        if (error?.response?.data?.errorMessage)
          return error.response.data.errorMessage;
      }
    } else {
      err = 'Opps! Some Error Occured';
    }
  } catch (e) {
    err = 'Opps! Some Error Occured';
  }
  return err;
};
