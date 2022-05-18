import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectMongo() {
  try {
    await mongoose.connect(`${process.env.MONGOURL}`);
  } catch (e) {
    console.log(e.message);
  }
}
connectMongo();

const Paleta = mongoose.model('Paleta', {
  id: Number,
  sabor: String,
  descricao: String,
  foto: String,
  preco: Number,
});

const acai = new Paleta({
  id: 1,
  sabor: 'Açaí com Leite Condensado',
  descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
  foto: 'assets/images/acai-com-leite-condensado.png',
  preco: 10.0,
});
acai.save().then(() => console.log('added'));

export const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];
