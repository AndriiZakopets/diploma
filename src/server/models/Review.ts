import { Schema, model } from 'mongoose';

const schema = new Schema({
  content: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, required: true },
  movieId: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model('Review', schema);
