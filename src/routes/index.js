import express from 'express';
import livro from './livrosRoutes.js';
import autores from './autorRoutes.js';
const routes = (app)=>{
    app.route("/").get((req,res)=> res.status(200).send("Curso De NodeJs!"));
    app.use(express.json(),livro,autores);
};

export default routes; 