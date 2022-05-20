import { Router } from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  deletePaletaController,
  updatePaletaController,
} from '../controllers/paleta.controller.js';
import { checkPaletaAttributes, checkPaletaId } from '../middlewares/checkPaletaAttributes.middleware.js';
const routesPaletas = Router();
routesPaletas.get('/all', findAll);
routesPaletas.get('/:id', checkPaletaId, findById);
routesPaletas.post('/create', checkPaletaAttributes, createPaletaController);
routesPaletas.delete('/delete/:id', checkPaletaId, deletePaletaController);
routesPaletas.put('/update/:id', checkPaletaId, checkPaletaAttributes, updatePaletaController);

export default routesPaletas;
