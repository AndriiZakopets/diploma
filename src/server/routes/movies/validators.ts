import { createReviewValidationSchema } from './validationSchema';

export const createReview = async (req, res, next) => {
  try {
    const { content } = req.body;

    await createReviewValidationSchema.validate({
      content,
    });

    next();
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};
