import { Schema, model } from 'mongoose';

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

schema.methods.accountView = function () {
  return {
    id: this.id,
    email: this.email,
    username: this.username,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

export default model('User', schema);
