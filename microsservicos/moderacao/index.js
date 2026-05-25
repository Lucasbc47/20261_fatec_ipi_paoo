const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const proibidas = ['avenida', 'gato', 'pastel', 'uva', 'fruta']

const contagemPorPalavra = {}
let lembretesTotal = 0
let qtdPalavrasLembrete = 0
let observacoesTotal = 0
let qtdPalavrasObservacao = 0

const funcoes = {
  LembreteCriado: (lembrete) => {
    const encontradas = proibidas.filter(p => lembrete.texto.toLowerCase().includes(p))
    lembretesTotal++
    qtdPalavrasLembrete += encontradas.length
    encontradas.forEach(p => {
      contagemPorPalavra[p] = (contagemPorPalavra[p] || 0) + 1
    })
    if (encontradas.length > 0) {
      axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteBloqueado',
        dados: lembrete
      })
    }
  },
  ObservacaoCriada: (observacao) => {
    const encontradas = proibidas.filter(p => observacao.texto.toLowerCase().includes(p))
    observacoesTotal++
    qtdPalavrasObservacao += encontradas.length
    encontradas.forEach(p => {
      contagemPorPalavra[p] = (contagemPorPalavra[p] || 0) + 1
    })
    if (encontradas.length > 0) {
      axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoBloqueada',
        dados: observacao
      })
    }
  }
}

app.get('/moderacao/palavras/:palavra', (req, res) => {
  const palavra = req.params.palavra.toLowerCase()
  res.json({ palavra, contagem: contagemPorPalavra[palavra] || 0 })
})

app.get('/moderacao/log', (req, res) => {
  res.json({
    mediaLembrete: lembretesTotal > 0 ? qtdPalavrasLembrete / lembretesTotal : 0,
    mediaObservacao: observacoesTotal > 0 ? qtdPalavrasObservacao / observacoesTotal : 0
  })
})

app.post('/eventos', async (req, res) => {
  try {
    const evento = req.body
    console.log(evento)
    funcoes[evento.tipo](evento.dados)
  } catch(e) {}
  res.end()
})

const port = 9000
app.listen(port, () => console.log(`(moderacao): http://localhost:${port}`))
