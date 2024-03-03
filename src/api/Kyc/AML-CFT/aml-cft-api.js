import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST AML CFT DETAIL_____________________________________*/
export const addAmlCft = async (formData) => {
  const data = await axiosInstance.post(
    `/client/aml-cft?currentForm=1`,
    formData
  );
  return data;
};
