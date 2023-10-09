import * as Yup from 'yup';

const watchlistMasterSchema = Yup.object().shape({
  watchlistName: Yup.string().required('Name is Required'),
});

const watchlistDetailSchema=Yup.object().shape({
  script:Yup.string().required("Script name isrequired"),
})

export { watchlistMasterSchema , watchlistDetailSchema};