import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {
  getTransactionPortfolio,
  getUserInfo,
  getUserPortfolio,
  postChangeProfile,
} from "../../api/portfolio/portfolio-api";

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetTransactionPortfolio = () => {
  return useQuery(
    ["getTransactionPortfolio"],
    () => getTransactionPortfolio(),
    {
      cacheTime: 10000,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
};

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetUserenPortfolio = () => {
  return useQuery(["getUserenPortfolio"], () => getUserPortfolio(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET TRANSACTION PORTFOLIO_____________________________________*/
export const useGetUserInfo = () => {
  return useQuery(["getUserInfo"], () => getUserInfo(), {
    cacheTime: 10000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const usePostChangeProfile = ({ onSuccess }) => {
  return useMutation(["addAlert"], () => postChangeProfile(), {
    onSuccess: (data, variables, context) => {
      toast.success("Succesfully Change Profile");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err) => {
      toast.error(`error: ${err.message}`);
    },
  });
};

/*________________________ADD A SINGLE PROFILE PHOTO THAT IS PP PHOTO_____________________________________*/

export const useAddProfile = ({ onSuccess }) => {
  const addDocument = async (image) => {
    const { documentType, document } = image;
    const imgData = new FormData();
    imgData.append("file", document);
    imgData.append("documentType", documentType);
    const { data } = await axiosInstance.post(
      `app-user/upload/profile-photo`,
      imgData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  };

  const queryClient = useQueryClient();
  return useMutation(
    ["addProfile"],
    (formData) => {
      addDocument(formData);
    },
    {
      onSuccess: (data, variables, context) => {
        toast.success("Add profile successfully");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries("getDocumentType");
      },
      onError: (err, _variables, _context) => {
        toast.error(`error: ${err.message}`);
      },
    }
  );
};
