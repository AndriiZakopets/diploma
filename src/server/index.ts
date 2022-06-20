import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import rootRouter from './routes';
import { PORT, MONGO_URI } from './config';

const app = express();
app.use(bodyParser.json());
app.use('/', rootRouter);
startDb();

async function startDb() {
  try {
    mongoose.connect(MONGO_URI, () => console.log('Mongoose is connected'));
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    );
  } catch (err: any) {
    console.error('Server Error: ', err.message);
    process.exit(1);
  }
}
