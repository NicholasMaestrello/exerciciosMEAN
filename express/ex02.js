const express = require('express')
const server = express()

server.get('/', function(req, res, next){
  console.log('inicio !')
  next()
  console.log('fim !')
})

server.get('/', function(req, res){
  console.log('resposta')
  res.send('<h1>Ola express !!!!</h1>')
})

server.listen(4000, () => console.log('servidor rodando'))
