const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());
const lembretes = {};
let id = 0;

const funcoes = {
  LembreteBloqueado: (lembrete) => {
    lembretes[lembrete.id].status = "bloqueado";
  },
};

app.get("/lembretes", (req, res) => {
  res.json(lembretes);
});

app.post("/lembretes", async (req, res) => {
  id++;
  const texto = req.body.texto;
  lembretes[id] = { id, texto };
  await axios.post("http://localhost:10000/eventos", {
    tipo: "LembreteCriado",
    dados: { id, texto },
  });
  res.json(lembretes[id]);
});

app.post("/eventos", async (req, res) => {
  try {
    const evento = req.body;
    funcoes[evento.tipo](evento.dados);
    console.log(evento);
  } catch (e) { }
  res.end();
});

const port = 4000;
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`);
});
