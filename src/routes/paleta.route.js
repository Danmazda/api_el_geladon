import { Router } from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  deletePaletaController,
  updatePaletaController,
} from '../controllers/paleta.controller.js';
const routesPaletas = Router();
routesPaletas.get('/all', findAll);
routesPaletas.get('/:id', findById);
routesPaletas.post('/create', createPaletaController);
routesPaletas.delete('/delete/:id', deletePaletaController);
routesPaletas.put('/update/:id', updatePaletaController);

export default routesPaletas;
