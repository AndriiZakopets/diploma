import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      "Password confirmation doesn't match Password"
    ),
  password: yup
    .string()
    .min(8, 'Password is too short - should be at least 8 characters.')
    .max(50, 'Password is too long - should be less than 50 characters.'),
  username: yup
    .string()
    .required("Username can't be blank")
    .matches(
      /^([A-Za-z0-9]*)$/g,
      'Username can only contain Latin letters and numbers.'
    ),
  email: yup
    .string()
    .required("Email can't be blank")
    .email('Invalid email address'),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required(`body should have required property 'email'`),
  password: yup
    .string()
    .required(`body should have required property 'password'`),
});
