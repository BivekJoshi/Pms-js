import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addCitizenship } from "../../../api/Kyc/document/add-citizenship-api";
import {
  addDocument,
  addDocumentDetail,
  addDocumentProfile,
  addPhoto,
  addPhotoDragImage,
  addVerificationDocument,
  getDocumentAll,
  getDocumentTypes,  
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

export const useAddDocumentProfile = ({ onSuccess }) => {
  return useMutation(
    ["getCitizenshipField"],
    (formData) => addDocumentProfile(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added document");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};

export const useAddDocument = ({ onSuccess }) => {
  return useMutation(
    ["getCitizenshipField"],
    (formData) => addDocument(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added document");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};

export const useAddVerificationDocument = ({ onSuccess }) => {
  return useMutation(
    ["getCitizenshipField"],
    (formData) => addVerificationDocument(formData, formData.onUploadProgress),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Successfully added document");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};











/*________________________GET DP INDIVIDUAL DETAILS_____________________________________*/
export const useGetDocumentTypes = () => {
  return useQuery(["getBasicDetail"], () => getDocumentTypes(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })
}

/*________________________GET DP INDIVIDUAL DETAILS_____________________________________*/
export const useGetDocumentAll = () => {
  return useQuery(["getDOcAll"], () => getDocumentAll(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })
}

/*________________________POST DOCUMENT INDIVIDUAL DETAILS_____________________________________*/
export const useAddDocumentDetail = ({ onSuccess }) => {
  return useMutation(
    ["getDocument"],
    (formData) => addDocumentDetail(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added basic detail")
        onSuccess && onSuccess(data, variables, context)
      },
      onError: (err, _variables, _context) => {
        toast.error(getErrorMessage(err))
      },
    }
  )
}
