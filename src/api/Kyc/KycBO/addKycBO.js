import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET BO DETAIL_____________________________________*/
export const getKycBO = async () => {
    const data = await axiosInstance.get(`/client/bo-statement`);
    return data;
  };

/*________________________POST BO DETAIL_____________________________________*/
export const addKycBO = async (formData) => {
  const data = await axiosInstance.post(
    `/client/bo-statement?currentForm=1`,
    formData
  );
  return data;
};
