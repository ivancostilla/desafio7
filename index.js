const express = require('express');
const apiRouter = require('./routes/api');

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log('Servidor corriendo');
})
server.on('error', (error) => console.log('hubo un error: ', error) );
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/api', apiRouter);