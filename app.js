const express = require("express");
const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal para servir el archivo index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 80;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});