const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public'); //const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));

// Ruta del Home
const mainRoutes = require('./routes/mainRoutes');
app.use("/", mainRoutes)

// Ruta del Register
const userRoutes = require('./routes/userRoutes');
app.use("/register", userRoutes)

// Ruta del Login
const userRoutes = require('./routes/userRoutes');
app.use("/login", userRoutes)


