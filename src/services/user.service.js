import { User } from '../models/user.model.js';
import { Paleta } from '../models/paleta.model.js';

export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  return user.password === password;
};

export const createUserService = async (email, password) => {
  console.log(email, password);
  const newUser = new User({ email, password });
  await newUser.save();
  return { message: 'created' };
};

export const getAllCart = async () => {
  const user = await User.find().populate('list');
  return user;
};
export const addItemToCart = async (id, email) => {
  try {
    const toAdd = await Paleta.findOne({ _id: id });
    const user = await User.findOne({ email });
    user.list.push(toAdd);
    await user.save();
    return { message: 'added' };
  } catch (e) {
    return { message: e.message };
  }
};
export const deleteAllQuantitiesFromCart = async (id, email) => {
  const user = await User.findOne({ email });
  user.list = user.list.filter((p) => p != id);
  await user.save();
  return user;
};

export const deleteOneItemFromCart = async (id, email) => {
  const user = await User.findOne({ email });
  const index = user.list.findIndex((p) => p === id);
  user.list.splice(index, 1);
  console.log(user.list);
  await user.save();
  return user;
};
