import mongoose from 'mongoose';
import { paletaSchema } from './paleta.model.js';

export const userCart = [];
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true},
    password: {type: String, required: true},
    list: [{type: mongoose.SchemaTypes.ObjectId, ref: "Paleta"}]
})
export const User = mongoose.model('User', userSchema);
