import { axiosInstance } from "../../axiosInterceptor";


/*____________________GET BRANCH DETAIL____________________*/
export const getBranchDetail = async () => {
  const data = await axiosInstance.get(`/client/branch-details`);
  return data.data;
};

/*____________POST BRANCH DETAIL_______*/
export const addBranchDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/branch-details?currentForm=1`,
    formData
  );
  return data;
};