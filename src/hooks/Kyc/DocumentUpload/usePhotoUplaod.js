import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../api/axiosInterceptor";
import toast from "react-hot-toast";

export const usePhotoUpload = ({ onSuccess }) => {
  const addPhoto = async (image) => {
    const imgData = new FormData();
    imgData.append("ppSizePhoto", image?.ppSizePhoto);
    const { data } = await axiosInstance.post(
      `/client/client-document?currentForm=1`,
      imgData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  };
  return useMutation(
    "addDocument",
    async (formData) => {
      const result = await addPhoto(formData);
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
