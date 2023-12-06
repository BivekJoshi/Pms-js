import { axiosInstance } from "../axiosInterceptor";

/*________________________POST WATCHLIST MASTER_____________________________________*/
export const addFeedback = async (formData) => {
    const data = await axiosInstance.post('/feedback', formData);
    return data;
  };