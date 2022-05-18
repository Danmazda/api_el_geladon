import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectMongo() {
  try {
    await mongoose.connect(`${process.env.MONGOURL}`);
  } catch (e) {
    console.log(e.message);
  }
}
connectMongo();

export const Admin = mongoose.model('Paleta', {
  email: String,
  password: String,
});
