import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './lib/connectDatabase';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, async () => {
  routes(app);
  await connectDatabase();
  // eslint-disable-next-line no-console
  console.log(`🔥 Server is up and running on port ${process.env.PORT}.`);
});
