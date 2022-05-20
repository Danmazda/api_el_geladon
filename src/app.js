import express from 'express';
import cors from 'cors';
import routesPaletas from './routes/paleta.route.js';
import routesUser from './routes/user.route.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

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

export default app;
