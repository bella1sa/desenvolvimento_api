import express from 'express';
import dotenv from 'dotenv';
import filmesRoutes from './routes/filmes.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/filmes', filmesRoutes);

app.get('/', (req, res) => {
  res.json({ message: "API da Locadora com CRUD Completo e Banco de Dados" });
});

app.listen(PORT, () => {
  console.log(` Servidor rodando lindamente na porta http://localhost:${PORT}`);
});