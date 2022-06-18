import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './routes';

const port = process.env.MODE === 'production' ? process.env.PORT : 3001;

const app = express();
app.use(bodyParser.json());

app.use('/', rootRouter);

app.listen(port, () => {
  console.log(`Server now listening on port: ${port}`);
});
