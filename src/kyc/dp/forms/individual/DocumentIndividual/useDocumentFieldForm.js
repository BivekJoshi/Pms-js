import { useFormik } from "formik";
import {
  useAddDocumentDetail,
  useAddVerificationDocument,
  usePhotoUploadDragDrop,
} from "../../../../../hooks/Kyc/DocumentUpload/usePhotoUplaod";
import { useState } from "react";

export const useDocumentFieldForm = () => {
  // const { mutate } = usePhotoUploadDragDrop({});
  const { mutate } = useAddDocumentDetail({});

  const formik = useFormik({
    initialValues: {
      documentType: "",
      documentNo: "",
      issuedDate: "",
      issuedDistrict: "",
      path: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};

export const useDocumentVerification = () => {
  const { mutate } = useAddVerificationDocument({});

  const formik = useFormik({
    initialValues: {
      documentType: "",
      kycDocument: "",
    },
    onSubmit: (values) => {
      // setLoading(false);
      const formData = { ...values };
      mutate(formData, {
        onSuccess: (data) => {
          formik.resetForm();
        },
      });
    },
  });

  return { formik };
};
