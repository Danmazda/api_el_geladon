import { Paleta } from '../models/paleta.model.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const jwtKey = process.env.JWTKEY;
const jwt = jsonwebtoken;

export const findAllPaletas = async () => {
  const allPaletas = await Paleta.find();
  return allPaletas;
};

export const findPaletaById = async (id) => {
  try {
    const paleta = await Paleta.find({ _id: id });
    return paleta;
  } catch (e) {
    const { message } = e;
    return { message };
  }
};

export const createPaleta = async (params) => {
  try {
    const { flavor, description, image, price, token } = params;
    jwt.verify(token, jwtKey);
    const newPaleta = new Paleta({ flavor, description, image, price });
    await newPaleta.save();
    const message = "Paleta created!";
    return {message};
  } catch (e) {
    const { message } = e;
    return { message };
  }
};

export const deletePaleta = async (id, token) => {
  try {
    jwt.verify(token, jwtKey);
    await Paleta.deleteOne({ _id: id });
    return { message: 'Item deleted' };
  } catch (e) {
    const { message } = e;
    return { message };
  }
};
export const updatePaleta = async (id, params) => {
  try {
    const { flavor, description, image, price, token } = params;
    jwt.verify(token, jwtKey);
    await Paleta.updateOne({ _id: id }, { flavor, description, image, price });
    return { message: 'updated' };
  } catch (e) {
    const { message } = e;
    return { message };
  }
};
