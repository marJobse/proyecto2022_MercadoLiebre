const express = require('express');
const path = require('path');
const app = express();
//const publicPath = path.resolve(__dirname, './public');
const publicPath = path.join(__dirname, './public');


app.use(express.static(publicPath));


app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));

});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ofertas.html'));
});
app.get('/tiendas-oficiales', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/tiendas-oficiales.html'));
});
app.get('/vender', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/vender.html'));
});
app.get('/ayuda', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ayuda.html'));
});

app.get('/mis-compras', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/mis-compras.html'));
});
