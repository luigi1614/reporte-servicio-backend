const express = require("express");
const cors = require("cors");
const path = require("path");

// Crear app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Backend funcionando correctamente 🚀");
});

// Render obliga a usar process.env.PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});
