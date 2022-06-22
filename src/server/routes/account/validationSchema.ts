import * as yup from 'yup';

export const updateAccountValidationSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required(`body should have required property 'fullName'`)
      .min(1, 'Name can not be blank.'),
  })
  .strict(true);
