import { useMutation, useQuery, useQueryClient } from "react-query"
import toast from "react-hot-toast"
import {
  addBasicDetail,
  getBasicDetail,
} from "../../../../../api/Kyc/Demat/demat_api"
import { getErrorMessage } from "../../../../../utility/getErrorMessage"
import { useDispatch } from "react-redux"
import { SET_MINOR } from "../../../../../redux/types/types"

/*________________________GET DP INDIVIDUAL DETAILS_____________________________________*/
export const useGetBasicDetail = () => {
  return useQuery(["getBasicDetail"], () => getBasicDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })
}

/*________________________POST DP INDIVIDUAL DETAILS_____________________________________*/
export const useAddBasicDetail = ({ onSuccess }) => {
  const dispatch = useDispatch()
  return useMutation(
    ["addBasicDetail"],
    (formData) => addBasicDetail(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added basic detail")
        onSuccess && onSuccess(data, variables, context)
        dispatch( {type : SET_MINOR, payload : data?.isMinor})

      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err))
      },
    }
  )
}
