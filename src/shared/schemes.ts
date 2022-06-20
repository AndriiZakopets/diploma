import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
  body: yup.object({
    email: yup
      .string()
      .required("Email can't be blank")
      .email('Invalid email address'),
    username: yup
      .string()
      .required("Username can't be blank")
      .matches(
        /^([A-Za-z0-9]*)$/g,
        'Username can only contain Latin letters and numbers.'
      ),
    password: yup
      .string()
      .min(8, 'Password is too short - should be at least 8 characters.')
      .max(50, 'Password is too long - should be less than 50 characters.'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        "Password confirmation doesn't match Password"
      ),
  }),
});
