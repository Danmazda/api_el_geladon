import { Router } from 'express';
import {
  getAll,
  addItem,
  deleteAll,
  deleteOne,
} from '../controllers/user.controller.js';
const routesUser = Router();
routesUser.get('/all', getAll);
routesUser.post('/add/:id', addItem);
routesUser.delete('/deleteAll/:id', deleteAll);
routesUser.delete('/deleteOne/:id', deleteOne);
export default routesUser;
