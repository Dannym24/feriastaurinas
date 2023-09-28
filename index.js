const express = require('express');
const app = express();

const connectDatabase = require('./Server/data/database');
const feriaRoutes = require('./Server/routers/routes');

// Conexión a la base de datos MongoDB
connectDatabase();

// Middleware para manejar el JSON
app.use(express.json());

// Define una ruta para las ferias
app.use('/ferias', feriaRoutes);

const port = 8009;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
