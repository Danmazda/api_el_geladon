import {
  findAllPaletas,
  findPaletaById,
  createPaleta,
  deletePaleta,
  updatePaleta,
} from '../services/paleta.service.js';
export const findAll = async (req, res) => {
  const paletas = await findAllPaletas();
  res.send(paletas);
};
export const findById = async (req, res) => {
  const id = req.params.id;
  const paleta = await findPaletaById(id);
  res.send(paleta);
};
export const createPaletaController = async (req, res) => {
  const params = req.body;
  const paleta = await createPaleta(params);
  res.send(paleta);
};

export const deletePaletaController = async (req, res) => {
  const id = req.params.id;
  const message = await deletePaleta(id);
  res.send(message);
};

export const updatePaletaController = async(req, res) => {
  const id = req.params.id;
  const params = req.body;
  const paleta = await updatePaleta(id, params);
  res.send(paleta);
};
