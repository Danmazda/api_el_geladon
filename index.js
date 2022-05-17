import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

const paletas = [
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

// Get all
app.get('/paletas/all', (req, res) => {
  res.send(paletas);
});

// Get by Id
app.get('/paletas/:id', (req, res) => {
  const id = Number(req.params.id);
  const paleta = paletas.find((p) => p.id === id);
  res.send(paleta);
});

//Search
app.get('/paletas/find/:search', (req, res) => {
  const search = req.params.search.replace(/-/g, ' ');
  const regExp = new RegExp(`${search}`, 'i');
  const foundPaletas = paletas.filter((p) => regExp.test(p.sabor));
  res.send(foundPaletas);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
