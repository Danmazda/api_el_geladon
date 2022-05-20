import { Router } from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  deletePaletaController,
  updatePaletaController,
} from '../controllers/paleta.controller.js';
import { checkPaletaAttributes } from '../middlewares/checkPaletaAttributes.middleware.js';
const routesPaletas = Router();
routesPaletas.get('/all', findAll);
routesPaletas.get('/:id', findById);
routesPaletas.post('/create', checkPaletaAttributes, createPaletaController);
routesPaletas.delete('/delete/:id', deletePaletaController);
routesPaletas.put('/update/:id', checkPaletaAttributes, updatePaletaController);

export default routesPaletas;
