import { findAllPaletas, findPaletaById } from '../services/paleta.service.js';
export const findAll = (req, res) => {
  const paletas = findAllPaletas();
  res.send(paletas);
};
export const findById = (req, res) => {
  const id = req.params.id;
  const paleta = findPaletaById(id);
  res.send(paleta);
};
export const searchPaletas = (req, res) => {
  const search = req.params.search.replace(/-/g, ' ');
  const regExp = new RegExp(`${search}`, 'i');
  const foundPaletas = paletas.filter((p) => regExp.test(p.sabor));
  res.send(foundPaletas);
};
