const express = require('express')
const server = express()

server.get('/', function(req, res){
  res.send('<h1>Index</h1>')
})

server.all('/teste', function(req, res) {
  res.send('<h1>Dentro do All</h2>')
})

server.get(/api/, function(req, res) {
  res.send('<h1>API</h1>')
})

server.listen(4000, () => console.log('servidor rodando'))
