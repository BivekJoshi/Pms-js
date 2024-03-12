import { axiosInstance } from "../../axiosInterceptor";

/*________________________BRANCH DETAIL_____________________________________*/
export const addBranchDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details?currentForm=1`,
    formData
  );
  return data;
};
