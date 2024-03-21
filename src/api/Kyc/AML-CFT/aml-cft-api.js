import { axiosInstance } from "../../axiosInterceptor";

/*________________________POST AML CFT DETAIL_____________________________________*/
export const addAmlCft = async (formData) => {
  const data = await axiosInstance.post(
    `/client/aml-cft?currentForm=7`,
    formData
  );
  return data;
};

/*________________________GET AML CFT DETAIL_____________________________________*/
export const getAmlCft = async () => {
  const res = await axiosInstance.get("/client/aml-cft");
  return res.data;
};
