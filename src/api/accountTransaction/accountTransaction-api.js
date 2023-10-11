import { axiosInstance } from '../axiosInterceptor';

export const getAccountTransaction = async (dateFrom, dateTo) => {
  if (dateFrom && dateTo) {
    const { data } = await axiosInstance.get(
      `/transaction/account-transaction?dateFrom=${dateFrom}&dateTo=${dateTo}`
    );
    return data;
  }
};
