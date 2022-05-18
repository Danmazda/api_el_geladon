import { paletas } from '../models/paleta.model.js';

export const findAllPaletas = () => {
  return paletas;
};

export const findPaletaById = (id) => {
  const paleta = paletas.find((p) => p.id === Number(id));
  return paleta;
};
