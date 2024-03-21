import { useFormik } from "formik";
import {
  useAddVerificationDocument,
  usePhotoUploadDragDrop,
} from "../../../../../hooks/Kyc/DocumentUpload/usePhotoUplaod";
import { useState } from "react";

export const useDocumentFieldForm = () => {
  const { mutate } = usePhotoUploadDragDrop({});

  const formik = useFormik({
    initialValues: {
      citizenshipNo: "",
      docType: "",
      issuedDatebs: "",
      issuedDistrict: "",
    },
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
      docType: "",
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
