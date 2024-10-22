import { base64ToBinary, handleBlobImg } from "../../../utility/image";
import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const getDocument = async () => {
  const res = await axiosInstance.get(`/client/client-document`);
  return res.data;
};

/*________________________POST PP DETAIL_____________________________________*/
export const addDocumentProfile = async (image, formData) => {
  console.log(image, "image")
  const imgData = new FormData();
  imgData.append(image?.file, image?.ppSizePhoto);
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

/*________________________POST DOCUMENT DETAIL_____________________________________*/
export const addDocument = async (image, formData) => {
  console.log(image, "image")
  const imgData = new FormData();
  imgData.append("file", image?.finalImage);
  const { data } = await axiosInstance.post(
    `/client/client-document?currentForm=1&type=${image?.file}`,
    imgData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

/*________________________POST Verification DOCUMENT DETAIL_____________________________________*/
export const addVerificationDocument = async (image, onUploadProgress) => {
  const imgData = new FormData();
  console.log(image, "img")
  imgData.append("file", image?.finalImage);
  const { data } = await axiosInstance.post(
    `/client/client-document?currentForm=2&type=${image?.file}`,
    imgData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: onUploadProgress,
    }
  );
  return data;
};

/*------------------------------CAMERA PHOTO--------------------------------------------------*/
export const addPhoto = async (formData) => {
  if (formData) {
    const imgData = new FormData();
    const formImg = base64ToBinary(formData.img);

    // Convert ArrayBuffer to Blob
    const blob = new Blob([formImg]);

    const image = await handleBlobImg(blob);

    // Append Blob to FormData
    imgData.append("ppSizePhoto", image, "photo.png");

    try {
      const { data } = await axiosInstance.post(
        `/client/client-document?currentForm=1&type=PP`,
        imgData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (error) {
      console.error("Error uploading photo:", error);
      throw error; // Throw the error to handle it in the caller function
    }
  }
};

/*------------------------------DRAG PHOTO--------------------------------------------------*/
export const addPhotoDragImage = async (image) => {
  const imgData = new FormData();

  imgData.append("ppSizePhoto", image);
  const { data } = await axiosInstance.post(
    `/client/client-document?currentForm=1&type=PP`,
    imgData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};










/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const getDocumentTypes = async () => {
  const response = await axiosInstance.get(`/client/individual-details/document-types`);
  return response.data;
}

/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const getDocumentAll = async () => {
  const response = await axiosInstance.get(`/client/client-document/all`);
  return response.data;
}

/*________________________POST DOCUMENT DETAIL_____________________________________*/
export const addDocumentDetail = async (formData) => {
  const data = await axiosInstance.post(
    `/client/individual-details/doc-details`,
    formData
  )
  return data
}