import * as yup from 'yup';

export const createReviewValidationSchema = yup.object().shape({
  content: yup
    .string()
    .required(`body should have required property 'content'`)
    .min(1, "Content can't be blank"),
});
