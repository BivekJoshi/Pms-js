import { axiosInstance } from "../../axiosInterceptor"

/*________________________POST OCCUPATION DETAIL_____________________________________*/
export const addOccupation = async (formData) => {
  const data = await axiosInstance.post(
    `/client/occupation-details?currentForm=1`,
    formData
  )
  return data
}

export const getOccupation = async () => {
  const { data } = await axiosInstance.get(`/client/occupation-details`)
  return data
}
