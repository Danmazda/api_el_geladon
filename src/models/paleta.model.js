import mongoose from 'mongoose';
export const paletaSchema = new mongoose.Schema({
  flavor: { type: String, required: true, lowercase: true },
  description: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  price: { type: Number, required: true, min: 1, max: 100 },
});
export const Paleta = mongoose.model('Paleta', paletaSchema);
