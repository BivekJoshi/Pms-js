import * as Yup from 'yup';

const buySellSchema = Yup.object().shape({
  shareQty: Yup.number()
    .required('Required')
    .max(1000000, 'Enter valid quantity'),
  buyPrice: Yup.number().required('Required').max(100000, 'Enter valid price'),
});

export { buySellSchema };
