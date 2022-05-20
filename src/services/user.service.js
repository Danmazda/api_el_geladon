import { User } from '../models/user.model.js';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Paleta } from '../models/paleta.model.js';
import bcrypt from 'bcrypt';
dotenv.config();
const jwt = jsonwebtoken;
const jwtKey = process.env.JWTKEY;
export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  const log = await bcrypt.compare(password, user.password);
  let token;
  log
    ? (token = jwt.sign({ user }, `${jwtKey}`, { expiresIn: 60 * 60 }))
    : (token = '');
  return { log, role: user.role, token };
};

export const createUserService = async (email, password) => {
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
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
