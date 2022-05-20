import { Router } from 'express';
import {
  findAll,
  findById,
  createPaletaController,
  deletePaletaController,
  updatePaletaController,
} from '../controllers/paleta.controller.js';
import { checkPaletaAttributes, checkPaletaId } from '../middlewares/checkPaletaAttributes.middleware.js';
import { getToken } from '../middlewares/checkUserAttributes.middleware.js';
const routesPaletas = Router();
routesPaletas.get('/all', findAll);
routesPaletas.get('/:id', checkPaletaId, findById);
routesPaletas.post('/create', checkPaletaAttributes,  getToken,createPaletaController);
routesPaletas.delete('/delete/:id', checkPaletaId, getToken, deletePaletaController);
routesPaletas.put('/update/:id', checkPaletaId, checkPaletaAttributes, getToken, updatePaletaController);

export default routesPaletas;
