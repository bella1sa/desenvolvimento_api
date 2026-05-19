import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Servidor da Locadora rodando com sucesso!" });
});

app.listen(PORT, () => {
  console.log(` Servidor rodando na porta http://localhost:${PORT}`);
});