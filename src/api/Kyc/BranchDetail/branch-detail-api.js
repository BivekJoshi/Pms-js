import { axiosInstance } from "../../axiosInterceptor";

/*____________________GET BRANCH DETAIL____________________*/
export const getBranchDetail = async () => {
  const { data } = await axiosInstance.get(`/client/branch-details`);
  return data;
};

/*____________POST BRANCH DETAIL_______*/
export const addBranchDetail = async (formData) => {
  const otherBranch = formData.otherBranch;
  const data = await axiosInstance.post(
    `/client/branch-details?currentForm=1&otherBranch=${otherBranch}`,
    formData
  );
  return data;
};
