import { json } from 'stream/consumers';
import livro from '../Models/Livro.js'
import { autor } from '../Models/Autor.js';

class livroController{

    static async listarLivros (req,res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).send(json({message:`${erro.message } - falha na requisição!`}))
        }
    }
    static async listarLivroPorId (req,res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).send(json({message:`${erro.message } - falha na requisição do livro!`}))
        }
    }
    static async atualizarLivroPorId (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:"livro alterado com sucesso!"});
        }catch(erro){
            res.status(500).send(json({message:`${erro.message } - falha na atualização do livro!`}))
        }
    }

    static async cadastrarLivro(req,res){
        const novoLivro = req.body;
        try{ 
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {... novoLivro , autor:{... autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message:"Livro novo criado com sucesso!" , livro: livroCriado });
        }catch(erro){
            res.status(500).send(json({message:`${erro.message} - falha ao cadastrar livro.`}));
        }
    }

    static async removerLivro(req,res){
        try{ 
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({message:"Livro removido com sucesso!" });
        }catch(erro){
            res.status(500).json({message:`${erro.message} - falha ao remover o livro.`});
        }
    }

    static async listarLivroPorEditor(req,res){
        const editora = req.query.editora;
        try{
            const livroPorEditora = await livro.find({editora:editora})
            res.status(200).json(livroPorEditora);
        
        }catch(erro){
            res.status(500).json({message:`${erro.message} - falha na busca.`});
        }

    }
};

export default livroController;