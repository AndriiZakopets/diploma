import {
  signUpValidationSchema,
  loginValidationSchema,
} from './validationSchema';

export const signup = async (req, res, next) => {
  try {
    await signUpValidationSchema.validate(req.body);

    next();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    await loginValidationSchema.validate({
      email,
      password,
    });

    next();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
