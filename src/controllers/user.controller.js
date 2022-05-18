import {
  addItemToCart,
  deleteAllQuantitiesFromCart,
  deleteOneItemFromCart,
  getAllCart,
} from '../services/user.service.js';

export const getAll = (req, res) => {
  const userCart = getAllCart();
  res.send(userCart);
};

export const addItem = (req, res) => {
  const id = Number(req.params.id);
  const userCart = addItemToCart(id);
  if (userCart == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(userCart);
};

export const deleteAll = (req, res) => {
  const id = Number(req.params.id);
  const userCart = deleteAllQuantitiesFromCart(id);
  if (userCart == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(userCart);
};

export const deleteOne = (req, res) => {
  const id = Number(req.params.id);
  const userCart = deleteOneItemFromCart(id);
  if (userCart == 'Not found') {
    return res.status(404).send('Not found');
  }
  res.send(userCart);
};
