import { axiosInstance } from '../axiosInterceptor';

export const application = async (email, submissionNo) => {
  const { data } = await axiosInstance.get(`/public/register/rejected?email=${email}&submissionNo=${submissionNo}`);
  return data;
};
