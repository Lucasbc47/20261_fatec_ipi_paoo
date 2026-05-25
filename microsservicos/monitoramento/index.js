const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

app.get('/status', async (req, res) => {
  const resultado = []
  try {
    await axios.get('http://localhost:10000/eventos')
    resultado.push({ nome: 'barramento', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'barramento', status: 'offline' })
  }
  try {
    await axios.get('http://localhost:4000/lembretes')
    resultado.push({ nome: 'lembretes', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'lembretes', status: 'offline' })
  }
  try {
    await axios.get('http://localhost:5000/lembretes/0/observacoes')
    resultado.push({ nome: 'observacoes', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'observacoes', status: 'offline' })
  }
  try {
    await axios.get('http://localhost:6000/lembretes')
    resultado.push({ nome: 'consulta', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'consulta', status: 'offline' })
  }
  try {
    await axios.get('http://localhost:7000/')
    resultado.push({ nome: 'classificacao', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'classificacao', status: 'offline' })
  }
  try {
    await axios.get('http://localhost:9000/moderacao/log')
    resultado.push({ nome: 'moderacao', status: 'online' })
  } catch(e) {
    resultado.push({ nome: 'moderacao', status: 'offline' })
  }
  res.json(resultado)
})

app.post('/eventos', (req, res) => res.end())

const port = 8000
app.listen(port, () => console.log(`(monitoramento): http://localhost:${port}`))
