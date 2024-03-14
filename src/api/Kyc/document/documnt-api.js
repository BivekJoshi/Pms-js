import { base64ToBinary, handleBlobImg } from "../../../utility/image";
import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const getDocument = async () => {
  const data = await axiosInstance.get(`/client/client-document`);
  return data;
};

export const addDocument = async (image, formData) => {
  console.log(formData, "IMage ma chaii");
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
        `/client/client-document?currentForm=1`,
        imgData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", data);
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
