import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../../../api/axiosInterceptor";
import toast from "react-hot-toast";
import { addCitizenship } from '../../../api/Kyc/document/add-citizenship-api';

export const usePhotoUpload = ({ onSuccess, documentName }) => {
  const addPhoto = async (image) => {
    const imgData = new FormData();
    imgData.append(documentName, image);
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


export const useAddCitizenshipField = ({ onSuccess }) => {
    return useMutation(["getCitizenshipField"], (formData) => addCitizenship(formData), {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added Family Detail");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    });
  };
