import express from "express";
import { app } from "./app";
import { port } from "./config/vars";
import { userRouter } from "./routes/userRoute";
import { evaluationRouter } from "./routes/evaluationRoute";

app.use(express.json());

app.use(userRouter)
app.use(evaluationRouter)
app.use((req, res, next) => {res.status(404).json({error: 'Not found'})})

app.listen(3000, () => {
  console.log(`\u{1F680} Servidor rodando  na porta ${port}`);
}); 
