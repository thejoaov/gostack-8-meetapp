import app from './app';

console.log(`Servidor rodando na porta ${process.env.PORT}`);
app.listen(process.env.PORT);
