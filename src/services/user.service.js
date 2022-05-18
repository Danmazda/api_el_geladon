import { userCart } from '../models/user.model.js';
import { paletas } from '../models/paleta.model.js';

export const getAllCart = () => userCart;
export const addItemToCart = (id) => {
  const toAdd = paletas.find((p) => p.id === id);
  if (!toAdd) {
    return 'Not found';
  }
  const alreadyPickedFlavors = userCart.map((paleta) => paleta.sabor);
  if (!alreadyPickedFlavors.includes(toAdd.sabor)) {
    userCart.push({ ...toAdd, quantity: 1 });
  } else {
    userCart[userCart.indexOf(userCart.find((p) => p.id === id))].quantity += 1;
  }
  return userCart;
};
export const deleteAllQuantitiesFromCart = (id) => {
  const toDelete = userCart.find((p) => p.id === id);
  if (!toDelete) {
    return 'Not found';
  }
  userCart.splice(userCart.indexOf(toDelete), 1);
  return userCart;
};
export const deleteOneItemFromCart = (id) => {
  const toDelete = userCart.find((p) => p.id === id);
  if (!toDelete) {
    return 'Not found';
  }
  const quantity = userCart[userCart.indexOf(toDelete)].quantity;
  if (quantity - 1 > 0) {
    userCart[userCart.indexOf(toDelete)].quantity -= 1;
  } else {
    userCart.splice(userCart.indexOf(toDelete), 1);
  }
  return userCart;
};
