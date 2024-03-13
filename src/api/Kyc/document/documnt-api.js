import { axiosInstance } from "../../axiosInterceptor";

/*________________________GET DOCUMENT DETAIL_____________________________________*/
export const getDocument = async () => {
  const data = await axiosInstance.get(`/client/client-document`);
  return data;
};

export const addDocument = async (image) => {
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

export const addPhoto = async (formData, { finalImage }) => {
  if (finalImage) {
    const imgData = new FormData();
    imgData.append("ppSizePhoto", finalImage);
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
    // const postData = {
    //   "ppSizePhoto": finalImage
    // };
    // const { data } = await axiosInstance.post(
    //   `/client/client-document?currentForm=1`,
    //    postData,
    //    {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    // return data;
  } else {
    const imgData = new FormData();
    imgData.append("ppSizePhoto", formData?.ppSizePhoto);
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
  }
};
