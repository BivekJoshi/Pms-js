import { axiosInstance } from "../../api/axiosInterceptor"

export const getUserMetaData = async (id) => {
  if (id) {
    const res = await axiosInstance.get(`/registration/${id}`)
    return res?.data
  }
}
