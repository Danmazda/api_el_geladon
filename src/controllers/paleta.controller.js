import {
  findAllPaletas,
  findPaletaById,
  createPaleta,
  deletePaleta,
  updatePaleta,
} from '../services/paleta.service.js';
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

export const createPaletaController = (req, res) => {
  const params = req.body;
  console.log(params);
  const paletas = createPaleta(params);
  res.send(paletas);
};

export const deletePaletaController = (req, res) => {
  const id = Number(req.params.id);
  const paletas = deletePaleta(id);
  if (paletas == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(paletas);
};

export const updatePaletaController = (req, res) => {
  const id = Number(req.params.id);
  const params = req.body;
  const paletas = updatePaleta(id, params);
  if (paletas == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(paletas);
};
