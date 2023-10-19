const express = require("express");
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: 'Jugar', completed: false },
  { id: 2, description: 'Viajar', completed: true },
  { id: 3, description: 'Estudiar', completed: false }
];


app.get("/", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});