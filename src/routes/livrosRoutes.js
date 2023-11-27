import express from 'express'
import livroController from '../controllers/livroController.js'

const routes = express.Router();

routes.get('/livros',livroController.listarLivros);
routes.get('/livros/busca', livroController.listarLivroPorEditor);
routes.get('/livros/:id',livroController.listarLivroPorId);
routes.post('/livros',livroController.cadastrarLivro);
routes.put('/livros/:id',livroController.atualizarLivroPorId);
routes.delete('/livros/:id',livroController.removerLivro);


export default routes;