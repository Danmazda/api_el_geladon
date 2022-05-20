import {
  addItemToCart,
  deleteAllQuantitiesFromCart,
  deleteOneItemFromCart,
  getAllCart,
  createUserService,
  loginUserService,
} from '../services/user.service.js';

export const addUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await createUserService(email, password);
  res.send(newUser);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const loggedUser = await loginUserService(email, password);
  res.send(loggedUser);
};

export const getAll = async (req, res) => {
  const userCart = await getAllCart();
  res.send(userCart);
};

export const addItem = async (req, res) => {
  const id = req.params.id;
  const { email } = req.body;
  const userCart = await addItemToCart(id, email);
  if (userCart == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(userCart);
};

export const deleteAll = async (req, res) => {
  const id = req.params.id;
  const { email } = req.body;
  const user = await deleteAllQuantitiesFromCart(id, email);
  res.send(user);
};

export const deleteOne = async (req, res) => {
  const id = req.params.id;
  const { email } = req.body;
  const userCart = await deleteOneItemFromCart(id, email);
  if (userCart == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(userCart);
};
