import express from 'express'
import connectDb from './config/dbConnect.js'
import routes from './routes/index.js'
const conexao = await connectDb();
conexao.on('error',(erro)=>{
    console.error('erro de conexão', erro)
})

conexao.once('open',()=>{
    console.log('Conexão feita com sucesso!');
})

const app = express();
routes(app);

app.delete('/livros/:id',(req,res) =>{
    const index = buscarLivro(req.params.id);
    livros.splice(index,1);
    res.status(200).send('Livro removido com sucesso!');
})

export default app

