import { useFormik } from "formik";
import { usePhotoUpload, usePhotoUploadDragDrop } from "./usePhotoUplaod";

export const usePhotoUploadForm = ({ finalImage, handleCloseModal }) => {
  const { mutate } = usePhotoUpload({});
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: "",
    },
    onSubmit: () => {
      const formData = {
        name: "ppSizePhoto",
        img: finalImage,
      };
      mutate(formData, {
        onSuccess: () => {
          handleCloseModal();
        },
      });
    },
  });

  return { formik };
};

export const usePhotoUploadDragForm = ({ file, handleCloseModal }) => {
  const { mutate } = usePhotoUploadDragDrop({});

  const handleAddProfileImage = (value) => {
    mutate(value, {
      onSuccess: () => {
        handleCloseModal();
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      ppSizePhoto: file,
    },
    onSubmit: () => {
      handleAddProfileImage(file);
    },
  });

  return {
    formik,
  };
};
