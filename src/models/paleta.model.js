import mongoose from 'mongoose';

export const Paleta = mongoose.model('Paleta', {
  id: Number,
  sabor: String,
  descricao: String,
  foto: String,
  preco: Number,
});


export const paletas = [
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];
