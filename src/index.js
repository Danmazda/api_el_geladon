import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routesPaletas from './routes/paleta.route.js';
import routesUser from './routes/user.route.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
const port = process.env.PORT;
async function connectMongo() {
  try {
    await mongoose.connect(`${process.env.MONGOURL}`);
    console.log('DB connected');
  } catch (e) {
    console.log(e.message);
  }
}
connectMongo();
app.use(express.json());
app.use(cors());
app.use('/paletas', routesPaletas);
app.use('/user', routesUser);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
