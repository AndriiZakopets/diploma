import { Schema, model } from 'mongoose';

const schema = new Schema({
  content: { type: String, required: true },
  authorId: { type: String, required: true },
  movieId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Review', schema);
