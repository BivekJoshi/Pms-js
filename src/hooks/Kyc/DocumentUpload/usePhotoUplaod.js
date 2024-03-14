import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addCitizenship } from "../../../api/Kyc/document/add-citizenship-api";
import {
  addPhoto,
  addPhotoDragImage,
} from "../../../api/Kyc/document/documnt-api";
import { getErrorMessage } from "../../../utility/getErrorMessage";

/*------------------------------CAMERA PHOTO--------------------------------------------------*/
export const usePhotoUpload = ({ onSuccess }) => {
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
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err));
      },
    }
  );
};

/*------------------------------DRAG PHOTO--------------------------------------------------*/
export const usePhotoUploadDragDrop = ({ onSuccess }) => {
  return useMutation(["addProfile"], (image) => addPhotoDragImage(image), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
      toast.success("Photo added successfully");
    },
    onError: (err, _variables, _context) => {
      toast.error(getErrorMessage(err));
    },
  });
};

export const useAddCitizenshipField = ({ onSuccess }) => {
  return useMutation(
    ["getCitizenshipField"],
    (formData) => addCitizenship(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added Family Detail");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};
