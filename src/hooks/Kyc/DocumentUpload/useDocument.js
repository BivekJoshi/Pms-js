import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDocument, getDocument } from '../../../api/Kyc/document/documnt-api';

/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const useGetDocument = () => {
    return useQuery(["getDocument"], () => getDocument(), {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };
  
  
/*________________________POST DOCUMENT DETAIL_____________________________________*/
export const useAddDocument = ({ onSuccess }) => {
  const queryClient = useQueryClient();
    return useMutation(
      "addDocument",
      async (formData) => {
        const result = await addDocument(formData);
        return result;
      },
      {
        onSuccess: (data, variables, context) => {
          toast.success("Photo added successfully");
          onSuccess && onSuccess(data, variables, context);
        },
      }
    );
  };
  