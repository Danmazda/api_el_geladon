import { paletas } from '../models/paleta.model.js';

export const findAllPaletas = () => {
  return paletas;
};

export const findPaletaById = (id) => {
  const paleta = paletas.find((p) => p.id === Number(id));
  return paleta;
};

export const createPaleta = (params) => {
  paletas.push({ ...params });
  return paletas;
};

export const deletePaleta = (id) => {
  const toBeDeleted = paletas.find((p) => p.id === id);
  if (!toBeDeleted) {
    return 'Not found';
  }
  paletas.splice(paletas.indexOf(toBeDeleted), 1);
  return paletas;
};
export const updatePaleta = (id, params) => {
  const toBeUpdated = paletas.find((p) => p.id === id);
  if (!toBeUpdated) {
    return 'Not found';
  }
  paletas[paletas.indexOf(toBeUpdated)] = {
    ...paletas[paletas.indexOf(toBeUpdated)],
    ...params,
  };
  return paletas;
};
