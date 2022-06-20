import { updateAccountValidationSchema } from './validationSchema';

export const updateAccount = async (req: any, res: any, next: any) => {
  try {
    await updateAccountValidationSchema.validate(req.body);

    next();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
