import { Router } from 'express';
import {
  findAll,
  findById,
  searchPaletas,
} from '../controllers/paleta.controller.js';
const routesPaletas = Router();
routesPaletas.get('/all', findAll);
routesPaletas.get('/:id', findById);
routesPaletas.get('/find/:search', searchPaletas);

export default routesPaletas;
