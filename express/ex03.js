const express = require('express')
const server = express()

server.use('/api', function(req, res, next){
  console.log('inicio !')
  next()
  console.log('fim !')
})

server.use('/api', function(req, res){
  console.log('resposta')
  res.send('<h1>API !!!!</h1>')
})

server.listen(4000, () => console.log('servidor rodando'))
