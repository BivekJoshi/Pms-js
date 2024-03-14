import { useQuery } from "react-query"
import { getUserMetaData } from "../api/metaDataKyc"
import { useDispatch } from "react-redux"
import { USER_LOGIN } from "../../redux/types/types"

export const useGetMetaData = (id) => {
  const dispatch = useDispatch()

  return useQuery(
    ["getUserMetaData", id],
    async () => {
      const data = await getUserMetaData(id)
      dispatch({ type: USER_LOGIN, payload: data?.user })
      return data
    },
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // Optional: If you need to perform additional actions on success
      },
    }
  )
}
