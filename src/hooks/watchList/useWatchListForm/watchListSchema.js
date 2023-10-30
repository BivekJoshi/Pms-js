import * as Yup from "yup";

const watchlistMasterSchema = Yup.object().shape({
  watchlistName: Yup.string().required("Name is Required"),
});

const watchlistDetailSchema = Yup.object().shape({
  script: Yup.array()
    .of(Yup.string()) // Specifies that 'script' should be an array of strings
    .min(1, "Please select at least one Nepse code") // Validates for a minimum of one selected code
    .required("Please select Nepse code"),
});

export { watchlistMasterSchema, watchlistDetailSchema };
