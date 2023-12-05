import { axiosInstance } from '../axiosInterceptor';

export const addProfilePic = async (image) => {
  const imgData = new FormData();

  imgData.append('multipartFile', image);

  const { data } = await axiosInstance.post(
    `app-user/upload/profile-photo`,
    imgData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
