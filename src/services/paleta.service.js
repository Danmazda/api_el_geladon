import { Paleta } from '../models/paleta.model.js';
import jsonwebtoken from 'jsonwebtoken';
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
    const newPaleta = new Paleta({ ...params });
    await newPaleta.save();
    return newPaleta;
  } catch (e) {
    const { message } = e;
    return { message };
  }
};

export const deletePaleta = async (id) => {
  try {
    await Paleta.deleteOne({ _id: id });
    return { message: 'Item deleted' };
  } catch (e) {
    const { message } = e;
    return { message };
  }
};
export const updatePaleta = async (id, params) => {
  try {
    await Paleta.updateOne({ _id: id }, { ...params });
    return { message: 'updated' };
  } catch (e) {
    const { message } = e;
    return { message };
  }
};
