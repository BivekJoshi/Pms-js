import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET BRANCH DETAIL_____________________________________*/
export const getBranchDetail = async () => {
  const data = await axiosInstance.get(`/client/branch-details`);
  return data;
};

/*________________________ADD BRANCH DETAIL_____________________________________*/
export const addBranchDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details?currentForm=1`,
    formData
  );
  return data;
};
