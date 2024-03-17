import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  addBodCorporate,
  getBodCorporate,
} from "../../../../api/Kyc/Bod-Corporate/bod-corporate-api";

/*________________________GET BOD CORPORATE DETAIL_____________________________________*/
export const useGetBodCorporate = () => {
  return useQuery(["getBodCorporate"], () => getBodCorporate(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST BOD CORPORATE DETAIL_____________________________________*/
export const useAddBodCorporate = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addBodCorporate"],
    (formData) => addBodCorporate(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added BO data");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getBodCorporate");
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};
