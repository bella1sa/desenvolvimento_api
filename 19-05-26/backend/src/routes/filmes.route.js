import { Router } from 'express';
import filmesService from '../services/filmes.service.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    const novoFilme = await filmesService.criarFilme(nome, categoria);
    res.status(201).json(novoFilme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const filmes = await filmesService.listarFilmes();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, categoria } = req.body;
    const filmeAtualizado = await filmesService.atualizarFilme(id, nome, categoria);
    if (!filmeAtualizado) return res.status(404).json({ message: "Filme não encontrado" });
    res.json(filmeAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const filmeDeletado = await filmesService.deletarFilme(id);
    if (!filmeDeletado) return res.status(404).json({ message: "Filme não encontrado" });
    res.json({ message: "Filme deletado com sucesso!", filme: filmeDeletado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;