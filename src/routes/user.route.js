import { Router } from 'express';
import {
  getAll,
  addItem,
  deleteAll,
  deleteOne,
  addUser, loginUser
} from '../controllers/user.controller.js';
import { checkIdAndEmail, checkUserAttributes } from '../middlewares/checkUserAttributes.middleware.js';
import { encryptPasswordUser } from '../middlewares/userPassword.middleware.js';
const routesUser = Router();
routesUser.get('/all', getAll);
routesUser.post('/add/:id', checkIdAndEmail ,addItem);
routesUser.post('/signup', checkUserAttributes, encryptPasswordUser, addUser);
routesUser.post('/signin', checkUserAttributes, loginUser);
routesUser.delete('/deleteAll/:id', checkIdAndEmail, deleteAll);
routesUser.delete('/deleteOne/:id', checkIdAndEmail,deleteOne);
export default routesUser;
